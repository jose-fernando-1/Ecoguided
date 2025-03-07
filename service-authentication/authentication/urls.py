from django.urls import path
from .views import RegisterView, CustomTokenObtainPairView, DeleteUserView, ListUsersView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('delete/<int:pk>/', DeleteUserView.as_view(), name='delete_user'),
    path('list/', ListUsersView.as_view(), name='list_users'),
]
