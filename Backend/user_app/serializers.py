# minha_app/serializers.py
from rest_framework import serializers
from .models import CustomUser, EcoGuide, Trip

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

class TripSerializer(serializers.ModelSerializer):
        class Meta:
            model = Trip
            fields = ['title', 'description', 'date', 'location', 'guide']
            
        def create(self, validated_data):
            user = EcoGuide.objects.create_user(**validated_data)
            user.is_guide = True
            user.save()
            return user