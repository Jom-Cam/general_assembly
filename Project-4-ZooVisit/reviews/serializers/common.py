from rest_framework import serializers # import serializers so we can extend from ModelSerializer
from ..models import Review # import Review model - it's now up a level so we write ..models

# Serializers
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review # specify the model the serializer needs to use
        fields = '__all__' # specify the fields it should return