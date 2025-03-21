from django.contrib import admin
from django.urls import path , include
# from api.views import pdfContentViewSet
from api.views import pdfPathView
from rest_framework import routers
from api.views import GenerativeView

# router = routers.DefaultRouter()
# router.register(r'content',pdfContentViewSet)
# urlpatterns = [
#     path('',include(router.urls))
# ]

urlpatterns = [
    path('content/', pdfPathView.as_view(), name='pdf-data'),
    path('content/<int:id>/', pdfPathView.as_view(), name='get-data'),
    path('generate/' ,GenerativeView.as_view() , name="generate_text" )
    
]