from django.db import models
from django.contrib.auth.models import User
from content.models import MovieDetail
from content.models import SeriesDetail


# Create your models here.


    


class MovieWatchlist(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(MovieDetail,on_delete=models.CASCADE)
    
    
    def __str__(self):
        return str(self.user)
    
        


class SeriesWatchlist(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    series = models.ForeignKey(SeriesDetail,on_delete=models.CASCADE)
    
    
    def __str__(self):
        return str(self.user)
    
    


    