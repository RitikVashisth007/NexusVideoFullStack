from django.contrib import admin
from .models import RandomMovie


class AdminRandomMovie(admin.ModelAdmin):
    list_display= ('title','releaseDate','genres')

admin.site.register(RandomMovie, AdminRandomMovie)