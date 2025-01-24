from django.db import models

# Create your models here.
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    cpf = models.CharField(max_length=12, blank=False, null=False, unique=True)
    is_guide = models.BooleanField(default=False)  # Acho que não é necessario um atributo para isso
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
    licenca = models.CharField(max_length=15, blank=False, null=False, default=0) # Número de Licença do guia

from django.db import models
from django.conf import settings

class Trip(models.Model):
    title = models.CharField(max_length=100)  # Nome do passeio
    description = models.TextField()  # Descrição do passeio
    date = models.DateField()  # Data do passeio
    location = models.CharField(max_length=100)  # Local do passeio
    
    guide = models.ForeignKey(
        'EcoGuide', 
        on_delete=models.CASCADE, 
        related_name='trips'
    )  # Relaciona ao guia que criou o passeio
    
    participants = models.ManyToManyField(
        settings.AUTH_USER_MODEL, # Usa o modelo de usuário configurado, pode trocar por CustomUser, mas assim evita problemas futuros
        related_name='trips_participated',
        blank=True
    )  # Relaciona aos usuários inscritos
    max_participants = models.PositiveIntegerField(default=10)  # Limite de participantes

    def __str__(self):
        return f"{self.title} - {self.guide}"

    def available_slots(self):
        """Retorna o número de vagas disponíveis."""
        return self.max_participants - self.participants.count()

    
    
    
    
    
    
    
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