from django.db import models

# Create your models here.
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    profile_photo = models.ImageField(upload_to='users/', null=True)

    cpf = models.CharField(max_length=12, blank=False, null=False, unique=True)
    telefone = models.CharField(max_length=15, blank=True, null=True)
    endereco = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.username
    
    
class EcoGuide(CustomUser):
    # Adicionar mais especialidades, pode virar uma classe no futuro 
    especialidades = [
        ('floresta','Floresta'),
        ('cachoeira', 'Cachoeira')
    ]
    bio = models.TextField(blank=True, null=True)  # Descrição do guia
    especialidade = models.CharField(max_length=15, choices=especialidades)
    formacao = models.CharField(max_length=15, blank=True, null=True)
    licenca = models.CharField(max_length=15, blank=False, null=False) # Número de Licença do guia

    
'''
class CustomUser(AbstractUser):
    cpf = models.CharField(max_length=12, blank=False, null=False)

    def __str__(self):
        return self.username
class TURISTA(AbstractUser):
    perfil = onetoonefield(...)
    
    def __str__(self):
        return self.username


class GUIA(AbstractUser):
    user = onetoonefield(CustomUser, guia)
    perfil = onetoonefield(...)
    id_guia = ...
    especialidade = 
    def __str__(self):
        return self.username

'''

# classe cartao de credito

# 

# classe perfil contendo info do usuário