from rest_framework import serializers
from .models import *


class MovieDetailSerializer(serializers.ModelSerializer):

    class Meta():
        model = MovieDetail
        fields = '__all__'


class SeriesDetailSerializer(serializers.ModelSerializer):

    class Meta():
        model = SeriesDetail
        fields = '__all__'