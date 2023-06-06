from .common import AnimalSerializer
from reviews.serializers.populated import ReviewSerializer

# Serializers
class PopulatedAnimalSerializer(AnimalSerializer):
    reviews = ReviewSerializer(many=True)