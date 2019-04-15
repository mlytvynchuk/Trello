
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path, include
from .views import OurListApiView
router = DefaultRouter()

router.register('lists', OurListApiView, basename='lists')
urlpatterns = router.urls
