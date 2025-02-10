from django.urls import path
from trips import views
from trips.views import TripCreateListView, TripRetrieveUpdateDestroyView, TripsView

 
urlpatterns = [
    path('trips/', TripCreateListView.as_view(), name='trip-create-list'),
    path('get_trips/', TripsView.as_view(), name='trip-list'),
    path('trips/<int:pk>/', TripRetrieveUpdateDestroyView.as_view(), name='trip-retrieve-update-destroy'),
    path('trips/register_for_trip/', views.register_for_trip)
]