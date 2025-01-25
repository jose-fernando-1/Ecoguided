from django.urls import path
from django.urls import include, path
from django.urls import re_path

from . import views

 
urlpatterns = [
    path('users/',views.UserList.as_view()),
    re_path('users/signup', views.signup),
    re_path('users/login', views.login),
    re_path('users/logout', views.logout),

]
