# minha_app/serializers.py
from rest_framework import serializers
from .models import CustomUser, EcoGuide, UserPreference, EcoTripStyle, TravelCompanionPreference, TravelPriority

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [ 'username', 'email', 'cpf'] 

class GuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = EcoGuide
        fields = ['id', 'username', 'email', 'cpf', 'telefone', 'formacao','licenca','password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = EcoGuide.objects.create_user(**validated_data)
        user.is_guide = True
        user.save()
        return user


class UserPreferenceSerializer(serializers.ModelSerializer):
    estilo_ecotrip = serializers.PrimaryKeyRelatedField(
    queryset=EcoTripStyle.objects.all(), many=True
)
    prefere_viajar_com = serializers.PrimaryKeyRelatedField(
    queryset=TravelCompanionPreference.objects.all(), many=True
)
    prioridade_viagem = serializers.PrimaryKeyRelatedField(
    queryset=TravelPriority.objects.all(), many=True
)

    class Meta:
        model = UserPreference
        fields = '__all__'
        read_only_fields = ['user']  # Para garantir que o usuário seja o autenticado
