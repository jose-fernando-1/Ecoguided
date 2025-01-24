from django.urls import path
from django.urls import include, path
from django.urls import re_path

from . import views

 
urlpatterns = [
    path('users/',views.UserList.as_view()),
    re_path('signup', views.signup),
    re_path('signup/guide', views.signup_guide, name='signup-guide'),
    re_path('signup/tourist', views.signup_tourist, name='signup-tourist'),
    re_path('login', views.login),
    re_path('logout', views.logout),

]
