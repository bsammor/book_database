from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.recipes),
    path('<int:r_id>/', views.recipe),
    path('add/', views.add),
]