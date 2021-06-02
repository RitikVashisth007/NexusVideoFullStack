
from django.contrib import admin
from django.urls import path,include

from django.conf import settings
from django.conf.urls.static import static




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', include('api.urls')),
   
    path('content/', include('content.urls')),
    path('watchlist/', include('watchlist.urls')),
    path('feelinglucky/', include('feelinglucky.urls')),
]   
     

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  