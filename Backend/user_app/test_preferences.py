from .models import EcoTripStyle, TravelCompanionPreference, TravelPriority

print(EcoTripStyle.objects.all())  # Lista os estilos de ecotrip cadastrados
print(TravelCompanionPreference.objects.all())  # Lista as preferências de companhia
print(TravelPriority.objects.all())  # Lista as prioridades de viagem