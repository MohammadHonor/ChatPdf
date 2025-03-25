from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class AudioToTextConverter(APIView):
    def post(self,request,*args,**kwargs):
        try:
            print(request.data)
            return Response({"message":"api runing..."}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error":str(e)} , status=status.HTTP_400_BAD_REQUEST)
            