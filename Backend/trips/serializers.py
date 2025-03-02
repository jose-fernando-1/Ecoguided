from rest_framework import serializers
from trips.models import Trip, Review,TripTag
from user_app.serializers import GuideSerializer, CustomUserSerializer

class TripTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TripTag
        fields = ['id', 'name', 'category']

class ReviewSerializer(serializers.ModelSerializer):
    author = CustomUserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'author', 'comment', 'stars', 'created_at']


class TripSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    guide = GuideSerializer(read_only=True)
    tags = serializers.PrimaryKeyRelatedField(queryset=TripTag.objects.all(), many=True)

    class Meta:
        model = Trip
        fields = ['id','title','description', 'location', 'guide', 'participants', 'max_participants','price', 'date', 'reviews','photo', 'tags']