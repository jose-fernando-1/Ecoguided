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
from .filters import TripFilter



from .models import Trip, Review, TripTag
from user_app.models import CustomUser, EcoGuide

from trips.serializers import TripSerializer, ReviewSerializer, TripTagSerializer
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
    filterset_class = TripFilter
    permission_classes = [AllowAny]
    search_fields = ( 
        '^title', 
    )
    


@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class ReviewCreateListView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        user = self.request.user
        # Pegar id da requisição
        trip_id = self.request.data.get('trip_id')
        trip = Trip.objects.get(id=trip_id)
        if not trip:
            return Response({"error": "Viagem inválida."}, status=status.HTTP_404_NOT_FOUND)
        if not trip.participants.filter(id=user.id).exists():
            return Response({"error": "Você não pode avaliar uma viagem que não participou."}, status=status.HTTP_403_FORBIDDEN)
        
        else: 
            serializer.save(
                author= user,
                trip = trip,
                comment= self.request.data.get('comment'),
                stars= self.request.data.get('stars'),
            )

@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
class ReviewRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def get_queryset(self):
        """Garante que um usuário só pode modificar/excluir sua própria avaliação."""
        user = self.request.user
        return Review.objects.filter(author=user)


@permission_classes([AllowAny])
class TagView(generics.ListCreateAPIView):
    queryset = TripTag.objects.all()
    serializer_class = TripTagSerializer

