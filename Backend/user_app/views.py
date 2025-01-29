from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import CustomUser
from .serializers import CustomUserSerializer, GuideSerializer
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

'''
@api_view(['POST'])

@permission_classes([Token])
def subscribe_into_trip(request):
    participante = get_object_or_404(User, username=request.data['username'] ou id)
    trip = get_object_or_404(Trip, id=request.data['id_viagem'])
    
    trip = Trip.objects.get(trip = trip)
    if trip.get_avaliable_slots():
        trip.participants.add(participant)

'''
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



class UserList(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        custom_users = CustomUser.objects.all()
        serializer = CustomUserSerializer(custom_users, many=True)
        return Response(serializer.data)


