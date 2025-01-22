from django.db import models

# Create your models here.
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    cpf = models.CharField(max_length=12, blank=False, null=False)

    def __str__(self):
        return self.username

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