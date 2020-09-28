from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, renderer_classes
from recipes.models import Recipe
from rest_framework.response import Response
from recipes.serializers import RecipeSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

# Create your views here.
@api_view(['GET', 'POST'])
def recipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def recipe(request, r_id):
    recipe = Recipe.objects.get(id=r_id)
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def add(request):
    data = JSONParser().parse(request)
    serializer = RecipeSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
