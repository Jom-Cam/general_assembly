from django.db import models

# Create your models here.

class Animal(models.Model):
    name = models.CharField(max_length=50, default="")
    type = models.CharField(max_length=50, default="")
    species = models.CharField(max_length=50, default="")
    sound = models.CharField(max_length=50, default="")
    image = models.CharField(max_length=200, default="")
    sound_url = models.CharField(max_length=200, default="")
    biome = models.CharField(max_length=50, default="")

    def __str__(self):
        return f"{self.name} the {self.species} {self.type}"

