from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


# Create your models here.


class AccountManager(BaseUserManager):
    def _create_user(self, email, phone, password, forename, surname, address1, address2, county, eircode,
                     **extra_fields):
        print("here")
        # values = [email, phone, forename, surname, address1, county, eircode]
        # field_value_map = dict(zip(self.model.REQUIRED_FIELDS, values))
        # for field_name, value in field_value_map.items():
        #     if not value:
        #         raise ValueError('The {} value must be set'.format(field_name))
        print("here")

        email = self.normalize_email(email)
        user = self.model(
            email=email,
            phone=phone,
            forename=forename,
            address1=address1,
            address2=address2,
            county=county,
            eircode=eircode,
            surname=surname,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, phone, forename, surname, address1, address2, county, eircode, password=None,
                    **extra_fields):

        extra_fields.setdefault('is_superuser', False)
        print("here")

        return self._create_user(email, phone, password, forename, surname, address1, address2, county, eircode,
                                 **extra_fields)

    def create_superuser(self, email, phone, password, forename, surname, address1, address2, county, eircode,
                         **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, phone, password, forename, surname, address1, address2, county, eircode,
                                 **extra_fields)

    def __str__(self):
        return "it worked !!!"


class Account(AbstractBaseUser, PermissionsMixin):
    COUNTY_CHOICES = [
        ('Carlow', 'Carlow'), ('Cavan', 'Cavan'), ('Clare', 'Clare'), ('Cork', 'Cork'), ('Donegal', 'Donegal'),
        ('Dublin', 'Dublin'), ('Galway', 'Galway'), ('Kerry', 'Kerry'), ('Kildare', 'Kildare'),
        ('Kilkenny', 'Kilkenny'), ('Laois', 'Laois'), ('Leitrim', 'Leitrim'), ('Limerick', 'Limerick'),
        ('Longford', 'Longford'), ('Louth', 'Louth'), ('Mayo', 'Mayo'), ('Meath', 'Meath'),
        ('Monaghan', 'Monaghan'),
        ('Offaly', 'Offaly'), ('Roscommon', 'Roscommon'), ('Sligo', 'Sligo'), ('Tipperary', 'Tipperary'),
        ('Waterford', 'Waterford'), ('Westmeath', 'Westmeath'), ('Wexford', 'Wexford'), ('Wicklow', 'Wicklow')
    ]

    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=50)
    date_joined = models.DateTimeField(default=timezone.now)
    # last_login = models.DateTimeField(null=True)
    forename = models.CharField(verbose_name="forename", max_length=255, null=True)
    surname = models.CharField(verbose_name="surname", max_length=255, null=True)
    address1 = models.CharField(verbose_name="address", max_length=255, null=True)
    address2 = models.CharField(verbose_name="address2", max_length=255, null=True, blank=True)
    county = models.CharField(verbose_name="county", max_length=20, choices=COUNTY_CHOICES, null=True)
    eircode = models.CharField(verbose_name="eircode", max_length=12, null=True)
    paypalJWT = models.CharField(max_length=255, null=True, blank=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["forename", "surname", "phone", "address1", "county", "eircode"]

    def get_full_name(self):
        return self.forename + self.surname
