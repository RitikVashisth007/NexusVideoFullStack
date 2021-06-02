from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.home, name='home'),    
    path('alluser',views.allUser, name='allUser'),    
    path('user',views.MyTokenObtainPairView.as_view(), name='login'),    
    path('currentUser',views.currentUser, name='login'),    
    path('registerUser',views.registerUser, name='registerUser'),    
]
 