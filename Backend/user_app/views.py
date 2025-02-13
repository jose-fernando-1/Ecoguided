from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView

from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import CustomUser, UserPreference, PreferenceCategory
from .serializers import CustomUserSerializer, GuideSerializer, UserPreferenceSerializer,PreferenceCategorySerializer
from django.contrib.auth import get_user_model

User = get_user_model()  # Obter usuário customizado, é necessário por conta da autenticação

'''
# OPCIONAL
    -Fazer função get_token
    -Fazer token expirar

'''

@api_view(['POST'])
#colocar Allow_Any em funções que não precisam de autenticação
@permission_classes([AllowAny])
def signup(request):
    if request.data['is_guide'] == 'True':
        serializer = GuideSerializer(data=request.data)
    else: 
        serializer = CustomUserSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()
        # caso todos os campos obrigatórios estejam corretamente preenchidos, adiciona usuário
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        # cria token para usuário
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    # checa se existe user com esse username
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    # pega token do user
    token, created = Token.objects.get_or_create(user=user)
    # chama serializer para obter dados do usuario
    serializer = CustomUserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.auth.delete()  # Exclui o token atual
    return Response({'message': 'Logout realizado com sucesso!'}, status=status.HTTP_200_OK)


@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    def perform_destroy(self, instance):
        return super().perform_destroy(instance)
    
    
    
    
    
class UserPreferenceView(APIView):
    # authentication_classes = [TokenAuthentication]
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        user = request.user  # Obtém o usuário autenticado
        data = request.data.copy()  # Faz uma cópia para evitar manipulação direta
        data['user'] = user.id  # Adiciona o ID do usuário autenticado aos dados

        serializer = UserPreferenceSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=user)  # Salva a preferência associada ao usuário autenticado
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, *args, **kwargs):
        preferences = get_object_or_404(UserPreference, user=request.user)
        serializer = UserPreferenceSerializer(preferences)
        return Response(serializer.data, status=status.HTTP_200_OK)



class UserList(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        custom_users = CustomUser.objects.all()
        serializer = CustomUserSerializer(custom_users, many=True)
        return Response(serializer.data)


# Preferências Categóricas
class PreferenceCategoryView(generics.ListCreateAPIView):
    queryset = PreferenceCategory.objects.all()
    serializer_class = PreferenceCategorySerializer
    permission_classes = [AllowAny]

class PreferenceCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PreferenceCategory.objects.all()
    serializer_class = PreferenceCategorySerializer
    permission_classes = [AllowAny]