from rest_framework import serializers
from recipes.models import Recipe
from rest_framework.renderers import JSONRenderer


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

        def create(self, validated_data):
            return Recipe.objects.create(validated_data)
