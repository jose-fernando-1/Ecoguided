from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView

from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import CustomUser, EcoGuide, UserPreference, PreferenceCategory
from trips.models import Trip
from trips.serializers import TripSerializer
from .serializers import CustomUserSerializer, GuideSerializer, UserPreferenceSerializer,PreferenceCategorySerializer
from django.contrib.auth import get_user_model

from django_filters.rest_framework import DjangoFilterBackend
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
    
    # Verifica se o usuário é um guia
    if hasattr(user, 'ecoguide') and user.ecoguide.licenca is not None:
        serializer = GuideSerializer(user.ecoguide)
    else:
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



class UserPreferenceRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserPreferenceSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retorna as preferências do usuário autenticado
        return get_object_or_404(UserPreference, user=self.request.user)



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
    filter_backends = [DjangoFilterBackend]


class PreferenceCategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PreferenceCategory.objects.all()
    serializer_class = PreferenceCategorySerializer
    permission_classes = [AllowAny]
    
    
class RecommendationSystem(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        user = request.user
        
        preferences = get_object_or_404(UserPreference, user=user)
        trips = Trip.objects.all()
        budget_map = {'$': 100, '$$': 300, '$$$': 600, '$$$$': 1000, '$$$$$': 2000}  
        preferred_styles = preferences.estilo_ecotrip.values_list('name', flat=True)
        preferred_companion = preferences.prefere_viajar_com.values_list('name', flat=True)
        scored_trips = []
        for trip in trips:
            score = 0
            for tag in trip.tags.all():
                print(tag.name)
                if tag.name in preferred_styles:
                    score += 2
                elif tag.name in preferred_companion:
                    score +=1
            print(score)
            scored_trips.append((score, trip))
        # Ordenar os passeios por score (do maior para o menor)
        scored_trips.sort(reverse=True, key=lambda x: x[0])
        recommended_trips = [trip[1] for trip in scored_trips]

        # Serializar e retornar os passeios recomendados
        serializer = TripSerializer(recommended_trips, many=True)
        return Response(serializer.data)


        
# Retornar viagens participadas

class UserTrips(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        trips = Trip.objects.filter(participants=user)
        if not trips:
            return Response({"message": "Você não se cadastrou em nenhuma viagem."}, status=status.HTTP_200_OK)
        serializer = TripSerializer(trips, many=True)
        
        return Response(serializer.data)
        
class GuideTrips(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        guide = get_object_or_404(EcoGuide, id=user.id)
        if not isinstance(guide, EcoGuide):  # Verifica se o usuário é uma instância de EcoGuide
            return Response({"message": "Apenas EcoGuias podem ver viagens criadas"}, status=status.HTTP_401_UNAUTHORIZED)
        trips = Trip.objects.filter(guide=user)
        if not trips:
            return Response({"message": "Você não criou nenhuma viagem."}, status=status.HTTP_200_OK)
        serializer = TripSerializer(trips, many=True)
        
        return Response(serializer.data)
