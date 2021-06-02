from collections import UserList
from django.db.models import fields
from .models import *
from rest_framework import serializers
from content.serializers import *






class MovieWatchlistSerializers(serializers.ModelSerializer):
    movie = MovieDetailSerializer()

    class Meta:
        model = MovieWatchlist
        fields = '__all__'


class SeriesWatchlistSerializers(serializers.ModelSerializer):
    series = SeriesDetailSerializer()

    class Meta:
        model = SeriesWatchlist
        fields = '__all__'