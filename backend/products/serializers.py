from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, ProductImage, Category, Review, Order, CartItem, ShippingAddress


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
