from django.db import models

class RandomMovie(models.Model):
    title = models.CharField( max_length=50)
    poster = models.ImageField(blank=True)
    link = models.CharField( max_length=50)
    description = models.CharField(max_length=280, blank=True)
    uploadDate = models.DateTimeField(  auto_now_add=True)
    releaseDate = models.DateField(blank=True,  auto_now_add=False)
    genres = models.CharField(blank=True, max_length=90)
    contentType = models.CharField(max_length=7, default='movie', editable=False)

    def __str__(self):
        return self.title