from django.contrib import admin
from trips.models import Trip, Review


@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'date', 'location', 'guide', 'max_participants', 'price')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'comment', 'stars', 'trip')