from django.urls import path
from rest_framework import routers

from . import views

urlpatterns = [
    # path('', views.index, name='index')
    path('getaccounts/', views.getAccounts, name="get_accounts"),
    path('create/', views.createAccounts, name="create_accounts"),

]