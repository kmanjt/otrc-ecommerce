from django.urls import path
from rest_framework import routers

from . import views

urlpatterns = [
    # path('', views.index, name='index')
    path('', views.getAccounts, name="get_accounts"),
    path('<int:pk>/', views.getAccount, name="get_account"),
    path('create/', views.createAccounts, name="create_accounts"),

]