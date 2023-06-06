from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser): # Extending the default Django User Model
    email = models.CharField(max_length=50, unique=True)
    name = models.CharField(max_length=50) 
    avatar = models.CharField(max_length=300, null=True, default="")