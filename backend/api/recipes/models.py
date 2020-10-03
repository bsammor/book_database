from django.db import models
from django.conf import settings
from django.db.models import JSONField

# Create your models here.


class Recipe(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    recipe_image = models.ImageField(null=True, upload_to='recipes')
    description = models.CharField(max_length=250)
    time = models.IntegerField()
    difficulty = models.CharField(max_length=50)
    instructions = JSONField(null=True)
