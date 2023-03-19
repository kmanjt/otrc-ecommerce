from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Account


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ["email", "phone", "forename", "surname", "address1", "address2", "county", "eircode", "password", ]

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Account.objects.create_user(email=validated_data["email"], phone=validated_data["phone"],
                                           password=password, forename=validated_data["forename"],
                                           surname=validated_data["surname"], address1=validated_data["address1"],
                                           address2=validated_data["address2"],
                                           county=validated_data["county"], eircode=validated_data["eircode"]
                                           )

        return user
