from django.db import models

# Create your models here.
class Review(models.Model):
    text = models.TextField(max_length=300)

    animal = models.ForeignKey(
        "animals.Animal",
        related_name = "reviews", 
        on_delete = models.CASCADE 
    )
    
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="reviews",
        on_delete = models.CASCADE
    )