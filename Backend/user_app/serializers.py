# minha_app/serializers.py
from rest_framework import serializers
from .models import CustomUser, EcoGuide, UserPreference, PreferenceCategory

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


from rest_framework import serializers
from .models import CustomUser, UserPreference, PreferenceCategory


class PreferenceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PreferenceCategory
        fields = ['id', 'name', 'category']
   

class UserPreferenceSerializer(serializers.ModelSerializer):
    estilo_ecotrip = serializers.PrimaryKeyRelatedField(
        queryset=PreferenceCategory.objects.filter(category='ecotrip_style'), many=True
    )
    prefere_viajar_com = serializers.PrimaryKeyRelatedField(
        queryset=PreferenceCategory.objects.filter(category='travel_companion'), many=True
    )
    prioridade_viagem = serializers.PrimaryKeyRelatedField(
        queryset=PreferenceCategory.objects.filter(category='travel_priority'), many=True
    )


    user = serializers.StringRelatedField(read_only=True)  # Retorna `username` do usuário
    # estilo_ecotrip = PreferenceCategorySerializer(many=True, read_only=True)
    # prefere_viajar_com = PreferenceCategorySerializer(many=True, read_only=True)
    # prioridade_viagem = PreferenceCategorySerializer(many=True, read_only=True)

    class Meta:
        model = UserPreference
        fields = [
            'user', 'genero', 'faixa_etaria', 'pais_regiao',
            'estilo_ecotrip', 'prefere_viajar_com', 'viagens_anuais',
            'orcamento_medio', 'prioridade_viagem',
            'importancia_sustentabilidade',
            'pagaria_por_servicos_sustentaveis', 'participa_ecoturismo',
        ]


