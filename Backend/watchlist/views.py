
from rest_framework.response import  Response
from rest_framework.decorators import api_view , permission_classes
from django.contrib.auth.models import User

from rest_framework.permissions import IsAdminUser , IsAuthenticated

from .models import *
from content.models import *
from content.serializers import *

from .serializers import *




@api_view(['GET','POST','DELETE'])
@permission_classes([IsAuthenticated])
def movieWatchlist(request):
    if request.method == 'GET':
        user = request.user
       
        queryset = MovieWatchlist.objects.filter(user=user)
  
        serializers = MovieWatchlistSerializers(queryset, many=True)
        return Response(serializers.data)

    if request.method == 'POST':
        user = request.user
        data = request.data

        movieID = data['movieID']
        
        movie = MovieDetail.objects.get(id=movieID)

        watchlist_Item = MovieWatchlist.objects.create(user=user,  movie=movie )
        watchlist_Item.save()


        queryset = MovieWatchlist.objects.filter(user=user)
        serializers = MovieWatchlistSerializers(queryset, many=True)
        return Response(serializers.data)
     

        



    if request.method == 'DELETE':
        user = request.user
     
        data = request.data

        movieID = data['movieID']
   

        
        movie = MovieDetail.objects.get(id=movieID)
        watchlist_Item = MovieWatchlist.objects.get(user=user, movie=movie )
        watchlist_Item.delete()
        queryset = MovieWatchlist.objects.filter(user=user)
        serializers = MovieWatchlistSerializers(queryset, many=True)
        return Response(serializers.data)

        








@api_view(['GET','POST','DELETE'])
@permission_classes([IsAuthenticated])
def seriesWatchlist(request):  
    if request.method == 'GET':
        user = request.user
  
        queryset = SeriesWatchlist.objects.filter(user=user)

        serializers = SeriesWatchlistSerializers(queryset, many=True)
        return Response(serializers.data)

    if request.method == 'POST':
        user = request.user
        data = request.data
        seriesID = data['seriesID']

        series = SeriesDetail.objects.get(id=seriesID)
        watchlist_Item = SeriesWatchlist.objects.create(user=user,  series=series )
        watchlist_Item.save()
        queryset = SeriesWatchlist.objects.filter(user=user)
  
        serializers = SeriesWatchlistSerializers(queryset, many=True)

        return Response(serializers.data)



    if request.method == 'DELETE':
        user = request.user

        data = request.data
        seriesID = data['seriesID']
        series = SeriesDetail.objects.get(id=seriesID)
        watchlist_Item = SeriesWatchlist.objects.get(user=user, series=series)
        watchlist_Item.delete()
        queryset = SeriesWatchlist.objects.filter(user=user)

        serializers = SeriesWatchlistSerializers(queryset, many=True)
        return Response(serializers.data) 




    
