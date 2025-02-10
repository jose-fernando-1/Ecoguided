
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, EcoGuide

class CustomUserAdmin(UserAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)

@admin.register(EcoGuide)
class EcoGuide(admin.ModelAdmin):
    list_display = ('id', 'username', 'email', 'cpf', 'telefone', 'formacao','licenca','password')


