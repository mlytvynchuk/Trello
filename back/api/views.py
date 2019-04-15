from rest_framework import generics
from .models import List
from .serializers import ListSerializer
from rest_framework import viewsets


class OurListApiView(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer
