# from django.shortcuts import render
# from rest_framework import viewsets
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
# from django.http import FileResponse
from django.http import JsonResponse
from rest_framework import status
# from api.models import pdfPath
from api.serializers import pdfPathSerializer
from api.models import pdfPath
from api.extract_data import extractData
import pickle
from django.db import transaction
import os
from api.models import PdfDataModel
from api.serializers import PdfDataSerializer
from api.geminiConfiguration import querry_with_pdf
class pdfPathView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = pdfPathSerializer(data = request.data)

            if(serializer.is_valid()) :

                serializer_instance = serializer.save()
                path = serializer_instance.pdf.url
                text = extractData(path[1:])
                data_serialize = PdfDataSerializer(data={'contents':text,'pdf':serializer_instance.id})
                if data_serialize.is_valid():
                    data_serialize.save()
                return Response("file uploaded successfully",status = status.HTTP_200_OK)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_404_NOT_FOUND)

class GenerativeView(APIView):
    def post(self, request, *args,**kwargs):
        try:
            question = request.data['querry']
            data = PdfDataModel.objects.all()
            data_list = PdfDataSerializer(data, many=True)
            text = data_list.data[len(data_list.data)-1]['contents']
            ans = querry_with_pdf(text,question)
            # print(str(ans))
            return Response({"message":str(ans)}, status=status.HTTP_200_OK)
        except Exception as error:
            return Response({"error":str(error)} , status=status.HTTP_404_NOT_FOUND)
