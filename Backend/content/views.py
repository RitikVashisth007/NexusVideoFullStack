from django.shortcuts import render,HttpResponse
from rest_framework.response import  Response
from rest_framework.decorators import api_view , permission_classes

from rest_framework.permissions import IsAdminUser , IsAuthenticated

from .models import *
from .serializers import *
# Create your views here.



@api_view(['GET'])
def movieDetails(request):
    detail = MovieDetail.objects.all()
    serializers = MovieDetailSerializer(detail, many=True)

    return Response(serializers.data)


@api_view(['GET'])
def singleMovie(request,id):
    detail = MovieDetail.objects.get(id=id)
    serializers = MovieDetailSerializer(detail)

    return Response(serializers.data)


@api_view(['GET'])
def seriesDetails(request):
    detail = SeriesDetail.objects.all()
    serializers = SeriesDetailSerializer(detail, many=True)

    return Response(serializers.data)

@api_view(['GET'])
def singleSeries(request,id):
    detail = SeriesDetail.objects.get(id=id)
    serializers = SeriesDetailSerializer(detail)

    return Response(serializers.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def movieUpload(request):
    data = request.data 

    addMovie = MovieDetail.objects.create(
        title= data['title'],
        link= data['link'],
        poster = data['poster'],
        description = data['description'],
        genres = data['genres'],
        releaseDate = data['releaseDate'],
    )
    
    serializers = MovieDetailSerializer(addMovie)

    return Response(serializers.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def seriesUpload(request):
    data = request.data 

    addSeries = SeriesDetail.objects.create(
        title= data['title'],
        link= data['link'],
        poster = data['poster'],
        description = data['description'],
        genres = data['genres'],
        releaseDate = data['releaseDate'],
        totalSeason = data['totalSeason'],
        currentSeason = data['currentSeason'],
    )
    
    serializers = MovieDetailSerializer(addSeries)

    return Response(serializers.data)