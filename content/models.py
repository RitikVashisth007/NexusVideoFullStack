from django.db import models


class MovieDetail(models.Model):
    title = models.CharField( max_length=50)
    poster = models.ImageField(blank=True)
    link = models.CharField( max_length=50)
    description = models.CharField(max_length=280, blank=True)
    uploadDate = models.DateTimeField(  auto_now_add=True)
    releaseDate = models.DateField(blank=True,  auto_now_add=False)
    genres = models.CharField(blank=True, max_length=90)

    def __str__(self):
        return self.title
    
  
    




class SeriesDetail(models.Model):
    title = models.CharField( max_length=50)
    poster = models.ImageField(blank=True)
    link = models.CharField( max_length=50)
    description = models.CharField(max_length=280)
    uploadDate = models.DateTimeField(  auto_now_add=True)
    releaseDate = models.DateField(blank=True,  auto_now_add=False)
    genres = models.CharField(blank=True, max_length=90)
    totalSeason = models.IntegerField(default=1)
    currentSeason = models.IntegerField(default=1)

    def __str__(self):
        return self.title

    

