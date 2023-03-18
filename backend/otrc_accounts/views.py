from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from otrc_accounts.models import Account
from otrc_accounts.serializers import AccountSerializer


@api_view(['GET'])
def getAccounts(request):
    accounts = Account.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return Response(serializer.data, status=200)


@api_view(['POST'])
def createAccounts(request):
    print("here")
    serializer = AccountSerializer(request.data)
    if serializer.is_valid():
        serializer.save()

        return Response({"message": "Account created successfully"}, status=status.HTTP_201_CREATED)

    return Response({"message": "unsuccessful"}, status=status.HTTP_400_BAD_REQUEST)
