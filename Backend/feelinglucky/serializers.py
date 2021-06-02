from rest_framework import serializers
from .models import *

class RandomMovieSerializer(serializers.ModelSerializer):

    class Meta():
        model = RandomMovie
        fields = '__all__'