from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.db import IntegrityError

from .models import Animal
from .serializers.common import AnimalSerializer 
from .serializers.populated import PopulatedAnimalSerializer

# Create your views here.
class AnimalListView(APIView):

    def get(self, _request):
        animals = Animal.objects.all()
        serialized_animals = PopulatedAnimalSerializer(animals, many=True)
        return Response(serialized_animals.data, status=status.HTTP_200_OK)

    def post(self, request):
        serialized_data = AnimalSerializer(data=request.data)

        try:
            serialized_data.is_valid()
            serialized_data.save()
            return Response(serialized_data.data, status=status.HTTP_201_CREATED)
        except IntegrityError as e:

            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        except AssertionError as e:
            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        except:
            return Response(
                { "detail": "Unprocessable Entity" },
                status=status.HTTP_422_UNPROCESSABLE_ENTITY
            )


class AnimalDetailView(APIView):

    def get_animal(self, pk):
        try:
            return Animal.objects.get(pk=pk)
        except Animal.DoesNotExist:
            raise NotFound(detail="Animal not found")

    def get(self, _request, pk):
        animal = self.get_animal(pk=pk)
        serialized_animal = PopulatedAnimalSerializer(animal)
        return Response(serialized_animal.data, status=status.HTTP_200_OK)

    def delete(self,_request, pk):
        animal = self.get_animal(pk=pk)
        animal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        animal_to_update = self.get_festival(pk=pk)

        serialized_animal = AnimalSerializer(animal_to_update, data=request.data)
        try:
            serialized_animal.is_valid()
            serialized_animal.save()

            return Response(serialized_animal.data, status=status.HTTP_202_ACCEPTED)

        except AssertionError as e:
            return Response({ "detail": str(e) }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            
        except:
            return Response("Unprocessable Entity", status=status.HTTP_422_UNPROCESSABLE_ENTITY)