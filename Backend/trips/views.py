from django.forms import ValidationError
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.generics import ListAPIView

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter




from .models import Trip
from user_app.models import CustomUser, EcoGuide

from trips.serializers import TripSerializer
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class TripCreateListView(generics.ListCreateAPIView):
    serializer_class = TripSerializer

    def perform_create(self, serializer):
        # Garante que a viagem seja salva para o usuário autenticado
        user = self.request.user
        guide = get_object_or_404(EcoGuide, id=user.id)
        # guide_id = self.request.data.get('guide')
        # if guide.id != int(guide_id):
        #     raise ValidationError({"error": "Guia inválido"})
        if not isinstance(guide, EcoGuide):  # Verifica se o usuário é uma instância de EcoGuide
            raise PermissionDenied("Apenas guias com licença podem criar viagens.")
        serializer.save(guide=guide)
            
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
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


class TripsView(ListAPIView):
    serializer_class = TripSerializer
    queryset =  Trip.objects.all()
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ( 
        '^title', 
    )
    order_fields = ("price",
                    'date',
                    )
