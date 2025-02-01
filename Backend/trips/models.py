from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
from user_app.models import EcoGuide

class Trip(models.Model):
    categories = [
        ('trilha', 'Trilha'),
        ('sustentável', 'Sustentável')
    ]
    
    title = models.CharField(max_length=100)  # Nome do passeio
    description = models.TextField()  # Descrição do passeio
    date = models.DateField()  # Data do passeio
    location = models.CharField(max_length=100)  # Local do passeio
    guide = models.ForeignKey(EcoGuide, on_delete=models.CASCADE, related_name='trips')  # Relaciona ao guia que criou o passeio
    # participants = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='trips_participated', blank=True)  # Relaciona aos usuários inscritos
    max_participants = models.PositiveIntegerField(default=10)  # Limite de participantes
    price = models.FloatField() # Preço do passeio
    category = models.CharField(max_length=100, choices=categories) # Categoria do passeio
    photo = models.ImageField(upload_to='trips/')

    def __str__(self):
        return f"{self.title} - {self.guide}"

    def available_slots(self):
        """Retorna o número de vagas disponíveis."""
        return self.max_participants - self.participants.count()


class Review(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='reviews_written')
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='reviews')
    comment = models.TextField(null=True, blank=True)
    stars = models.IntegerField(
        validators=[
            MinValueValidator(0, 'Avaliação não pode ser inferior a 0 estrelas.'),
            MaxValueValidator(5, 'Avaliação não pode ser superior a 5 estrelas.'),
        ]
    )
    created_at = models.DateTimeField(auto_now_add=True)