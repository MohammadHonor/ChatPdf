from django.contrib import admin
from django.urls import path , include
# from api.views import pdfContentViewSet
from api.views import pdfContentView
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'content',pdfContentViewSet)
# urlpatterns = [
#     path('',include(router.urls))
# ]

urlpatterns = [
    path('content/', pdfContentView.as_view(), name='pdf-data'),
    path('content/<int:id>/', pdfContentView.as_view(), name='get-data'),
]