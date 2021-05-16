from django.urls import path
from . import views

urlpatterns = [
    path('movie', views.movieDetails),
    path('series', views.seriesDetails),
    path('movieupload', views.movieUpload),
    path('seriesupload', views.seriesUpload),
]
 