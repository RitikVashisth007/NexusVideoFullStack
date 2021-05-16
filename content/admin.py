from django.contrib import admin
from .models import *

class AdminMovie(admin.ModelAdmin):
    list_display= ('title','releaseDate','genres')

class AdminSeries(admin.ModelAdmin):
    list_display= ('title','releaseDate','genres')

admin.site.register(MovieDetail, AdminMovie)
admin.site.register(SeriesDetail, AdminSeries)