from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes

from rest_framework.permissions import IsAuthenticated , IsAdminUser

from django.contrib.auth.models import User


from .Serializers import *
 


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializers = UserSerializerWithToken(self.user).data
        
        for k,v in serializers.items():
            data[k] = v
        
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


#  Down side custome 



@api_view(['GET'])
def home(request):
    
    return Response('This is home page')


@api_view(['GET'])
def allUser(request):
    allUser = User.objects.all()
    serializer = AllUserSerializer(allUser, many=True)
    return Response(serializer.data)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def currentUser(request):
    user = request.user
    serializers = CurrentUserSerializer(user)
    return Response(serializers.data)




@api_view(['POST'])
def registerUser(request):
    data = request.data

    try:
        user = User.objects.create_user(
        username = data['email'].lower(),
        email = data['email'].lower(),
        password= (data['password']),
        first_name= data['name'],
    
        
        )
        
        user.save()

        serializer = UserSerializerWithToken(user , many=False)

        return Response(serializer.data)
    
    except:
        message = {'deatil':'User with this email already register'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)
   
    
    
