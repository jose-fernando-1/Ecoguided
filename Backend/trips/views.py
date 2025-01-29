from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

from .models import Trip
from user_app.models import CustomUser

from trips.serializers import TripSerializer

@permission_classes([AllowAny])
class TripCreateListView(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

@permission_classes([AllowAny])
class TripRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    
    


@api_view(['POST'])
@permission_classes([IsAuthenticated])  # apenas usuários autenticados podem se inscrever
def register_for_trip(request):
    # Obtém o usuário autenticado
    user = request.user 
        
    # Obtém a viagem ou retorna erro 404 caso não exista
    trip = get_object_or_404(Trip, id=request.data.get('id_viagem'))
    
    # Checa se o usuario ja está inscrito no passeio 
    if trip.participants.filter(id=user.id).exists():
        return Response({"error": "Você já está inscrito nesta viagem."}, status=status.HTTP_400_BAD_REQUEST)
    # Verifica se há vagas disponíveis
    if trip.available_slots() > 0:
        # Adiciona o participante à viagem
        print(trip.available_slots())
        trip.participants.add(user)
        return Response({"message": "Inscrição realizada com sucesso!"}, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Não há vagas disponíveis para esta viagem."}, status=status.HTTP_400_BAD_REQUEST)
