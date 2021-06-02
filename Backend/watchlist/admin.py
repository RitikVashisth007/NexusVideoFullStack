from django.contrib import admin
from .models import *




class AdminMovieWatchlist(admin.ModelAdmin):
    list_display= ('user','movie')



class AdminSeriesWatchlist(admin.ModelAdmin):
    list_display= ('user','series')





admin.site.register(MovieWatchlist , AdminMovieWatchlist)
admin.site.register(SeriesWatchlist , AdminSeriesWatchlist)