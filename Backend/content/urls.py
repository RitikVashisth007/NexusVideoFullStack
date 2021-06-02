from django.urls import path
from . import views

urlpatterns = [
    path('movie', views.movieDetails),
    path('movie/<int:id>', views.singleMovie),
    path('series', views.seriesDetails),
    path('series/<int:id>', views.singleSeries),
    path('movieupload', views.movieUpload),
    path('seriesupload', views.seriesUpload),
]
 