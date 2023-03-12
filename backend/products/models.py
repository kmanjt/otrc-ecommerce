from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class ProductImage(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(
        'Product', related_name='product_images', on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.image.name + ' Image'


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.AutoField(primary_key=True, editable=False)

    # product attributes
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField()
    category = models.ForeignKey(
        Category, related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    images = models.ManyToManyField(
        ProductImage, blank=True, related_name='product_images')
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    # sale attributes
    on_sale = models.BooleanField(default=False)
    sale_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)

    # review attributes
    rating = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    num_reviews = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Review(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(
        Product, related_name='reviews', on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(
        User, related_name='reviews', on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return str(self.rating)


class Order(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    payment_method = models.CharField(max_length=200, null=True, blank=True)
    tax_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shipping_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    total_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    paid_at = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_delivered = models.BooleanField(default=False)
    delivered_at = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return str(self.created_at)


class CartItem(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(
        Product, on_delete=models.SET_NULL, null=True, blank=True)
    order = models.ForeignKey(
        Order, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.name)


class ShippingAddress(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postal_code = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shipping_price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return str(self.address)
