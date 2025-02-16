from django.db import models

# Create your models here.
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    profile_photo = models.ImageField(upload_to='users/', null=True)

    cpf = models.CharField(max_length=14, blank=False, null=False, unique=True)
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



### Preferências do Usuário (Formulário inicial) ### 
class EcoTripStyle(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class TravelCompanionPreference(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class TravelPriority(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class UserPreference(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='preferences')

    # Demografia
    genero = models.CharField(
        max_length=15, 
        choices=[('Feminino', 'Feminino'), ('Masculino', 'Masculino'), ('Outro', 'Outro')],
        blank=True, 
        null=True
    )
    faixa_etaria = models.CharField(
        max_length=15,
        choices=[('18-24', '18-24 anos'), ('25-34', '25-34 anos'), ('35-44', '35-44 anos'), 
                 ('45-54', '45-54 anos'), ('55+', '55+ anos')],
        blank=True,
        null=True
    )
    pais_regiao = models.CharField(max_length=50, blank=True, null=True)

    # Lifestyle
    estilo_ecotrip = models.ManyToManyField(EcoTripStyle, blank=True)
    prefere_viajar_com = models.ManyToManyField(TravelCompanionPreference, blank=True)
    viagens_anuais = models.CharField(
        max_length=15,
        choices=[('Nunca', 'Nunca'), ('1-2', '1-2 vezes'), ('3-5', '3-5 vezes'), ('5+', '5+ vezes')],
        blank=True,
        null=True
    )

    # Financeiro
    orcamento_medio = models.CharField(
        max_length=5,
        choices=[('$', '$'), ('$$', '$$'), ('$$$', '$$$'), ('$$$$', '$$$$'), ('$$$$$', '$$$$$')],
        blank=True,
        null=True
    )
    prioridade_viagem = models.ManyToManyField(TravelPriority, blank=True)

    # Sustentabilidade
    importancia_sustentabilidade = models.CharField(
        max_length=20,
        choices=[
            ('Muito importante', 'Muito importante'),
            ('Importante', 'Importante'),
            ('Pouco importante', 'Pouco importante'),
            ('Nada importante', 'Nada importante')
        ],
        blank=True,
        null=True
    )
    pagaria_por_servicos_sustentaveis = models.CharField(
        max_length=30,
        choices=[
            ('Sim, sem problemas!', 'Sim, sem problemas!'),
            ('Sim, mas até um limite', 'Sim, mas até um limite'),
            ('Não', 'Não')
        ],
        blank=True,
        null=True
    )
    participa_ecoturismo = models.CharField(
        max_length=50,
        choices=[
            ('Sim, frequentemente', 'Sim, frequentemente'),
            ('Sim, às vezes', 'Sim, às vezes'),
            ('Não, mas tenho interesse', 'Não, mas tenho interesse'),
            ('Não tenho interesse', 'Não tenho interesse')
        ],
        blank=True,
        null=True
    )

    def __str__(self):
        return f"Preferences of {self.user.username}"

    
    
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