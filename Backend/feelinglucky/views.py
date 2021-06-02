from rest_framework.response import  Response
from rest_framework.decorators import api_view , permission_classes

from rest_framework.permissions import IsAdminUser , IsAuthenticated

from .models import *
from .serializers import *


@api_view(['GET'])
def luckyMovie(request):
    detail = RandomMovie.objects.all()
    serializers = RandomMovieSerializer(detail, many=True)

    return Response(serializers.data) 