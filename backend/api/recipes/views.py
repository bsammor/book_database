from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from recipes.models import Recipe
from rest_framework.response import Response
from recipes.serializers import RecipeSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser

# Create your views here.


@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def recipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def recipe(request, pk):
    try:
        recipe = Recipe.objects.get(id=pk)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)
    except Recipe.DoesNotExist:
        return Response(status=404)


@api_view(['POST'])
# @permission_classes((IsAuthenticated, ))
def add(request):
    data = JSONParser().parse(request)
    serializer = RecipeSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
