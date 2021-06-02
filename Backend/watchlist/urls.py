from django.urls import path
from . import views

urlpatterns = [
    path('movie', views.movieWatchlist),
    path('series', views.seriesWatchlist),

]
 