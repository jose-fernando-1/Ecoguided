from django.urls import path
from trips.views import TripCreateListView, TripRetrieveUpdateDestroyView

 
urlpatterns = [
    path('trips/', TripCreateListView.as_view(), name='trip-create-list'),
    path('trips/<int:pk>/', TripRetrieveUpdateDestroyView.as_view(), name='trip-retrieve-update-destroy')
]