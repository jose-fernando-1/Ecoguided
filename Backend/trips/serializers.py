from rest_framework import serializers
from trips.models import Trip, Review


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ['id', 'author', 'comment', 'stars', 'created_at']


class TripSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Trip
        fields = '__all__'