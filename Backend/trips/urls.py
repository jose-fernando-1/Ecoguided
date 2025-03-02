from django.urls import path
from trips import views
from trips.views import TripCreateListView, TripRetrieveUpdateDestroyView, TripsView, ReviewCreateListView, ReviewRetrieveUpdateDestroyView,TagView

 
urlpatterns = [
    path('trips/', TripCreateListView.as_view(), name='trip-create-list'),
    path('get_trips/', TripsView.as_view(), name='trip-list'),
    path('trips/<int:pk>/', TripRetrieveUpdateDestroyView.as_view(), name='trip-retrieve-update-destroy'),
    path('trips/register_for_trip/', views.register_for_trip),
    path('reviews/create_review/', ReviewCreateListView.as_view(), name = 'review-create-list'),
    path('reviews/edit_review/<int:pk>/', ReviewRetrieveUpdateDestroyView.as_view(), name='review-retrieve-update-destroy'),
    path('tags/', TagView.as_view(), name='tag-view'),
]