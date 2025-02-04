from django.contrib import admin
from django.urls import path , include
# from api.views import pdfContentViewSet
from api.views import pdfPathView,BookView
from rest_framework import routers


# router = routers.DefaultRouter()
# router.register(r'content',pdfContentViewSet)
# urlpatterns = [
#     path('',include(router.urls))
# ]

urlpatterns = [
    path('content/', pdfPathView.as_view(), name='pdf-data'),
    path('content/<int:id>/', pdfPathView.as_view(), name='get-data'),
    # path('querry/',querryView.as_view(), name = "user-querry")
    path('create_book/',BookView.as_view(),name="post-data"),
    # path('book-details/',BookView.as_view(),name="get-data"),
    # path('book-update/<str:pk>/',BookView.as_view(),name="put-data")
]