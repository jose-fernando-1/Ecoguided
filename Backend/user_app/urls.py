from django.urls import path
from django.urls import include, path
from django.urls import re_path

from . import views

 
urlpatterns = [
    path('users/',views.UserList.as_view()),
    re_path('users/signup', views.signup),
    re_path('users/login', views.login),
    re_path('users/logout', views.logout),
    path('users/preferences', views.UserPreferenceView.as_view(), name='create-preference'), 
    path('users/delete/<int:pk>/', views.UserRetrieveUpdateDestroyView.as_view(), name='destroy'), 
    path('users/category_preferences', views.PreferenceCategoryView.as_view(), name='cat-preference'), 
    path('users/category_preferences/<int:pk>/', views.PreferenceCategoryRetrieveUpdateDestroyView.as_view(), name='cat-preference-urd'), 

]
