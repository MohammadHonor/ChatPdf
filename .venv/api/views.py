# from django.shortcuts import render
# from rest_framework import viewsets
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from api.models import pdfContent
from api.serializers import pdfContentSerializer
from api.models import pdfContent
from api.extract_data import extractData
from api.text_generator import questionAnswereWithPdf

class pdfContentView(APIView):
        def post(self, request, *args, **kwargs):
                serializer = pdfContentSerializer(data = request.data)
                if(serializer.is_valid()) :
                        serializer.save()
                        print(settings.BASE_DIR)
                        pdf_path=serializer.data.get("pdf")
                        # text =extractData(pdfPath)
                        text=extractData(pdf_path[1:])
                        print(text)
                        # questionAnswereWithPdf(text)
                        return Response(serializer.data,status=status.HTTP_200_OK)
                return Response(serializer.error_messages ,status=status.HTTP_404_NOT_FOUND)
                

        