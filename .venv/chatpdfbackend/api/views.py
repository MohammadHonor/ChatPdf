# from django.shortcuts import render
# from rest_framework import viewsets
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import FileResponse
from django.http import JsonResponse
from rest_framework import status
from api.models import pdfPath
from api.serializers import pdfPathSerializer,BookSerializer
from api.models import pdfPath
from api.extract_data import extractData
import pickle
from django.db import transaction
class pdfPathView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            serializer = pdfPathSerializer(data = request.data)
            if(serializer.is_valid()) :
                serializer.save()
                return Response("file uploaded successfully",status=status.HTTP_200_OK)
        except:
            return Response("file not uploaded successfully")

    # def get(self,request,id):
    #     try:
    #         all_pdf = pdfContent.objects.get(id=id)
    #         file_path=all_pdf.pdf.path
    #         # return FileResponse(open(file_path,'rb'),status=status.HTTP_200_OK)
            
    #         return Response("success",status=status.HTTP_200_OK)
    #     except:
    #         return Response(f"pdf not fount whose id {id}")

# class querryView(APIView):
#     def post(self,request,*args,**kwargs):
#             serialize = userQuerrySerializer(data = request.data)
#             if serialize.is_valid() :
#                     data = serialize.data
#                     pdf = pdfContent.objects.all()
#                     pdfPath = pdfContentSerializer(pdf[len(pdf)-1]).data.get("pdf")
#                     # print(pdfPath[1:])
#                     # # print(text)
#                     text = extractData(pdfPath[1:])
#                     print(questionAnswereWithPdf(text,data['querry']))
#                     return Response(serialize.data , status=status.HTTP_200_OK)
#             Response("Not persent")

class BookView(APIView):
        def post(self,request,*args,**kwargs):
            # with transaction.atomic():
                print(request.data)
                serializer = BookSerializer(data=request.data)
                # print(serializer)
                if serializer.is_valid() :
                    # print(serializer.) 
                    serializer.save()
                    # print(data)
                    return Response({"success":"successfully save data"}, status=status.HTTP_200_OK)
                else :
                    return Response({"error":"due to some reason"},status=status.HTTP_400_BAD_REQUEST)
#         def get(self,request,pk):
                
#                 book = Book.objects.all()
#                 serializer = BookSerializer(book,many=True)
#                 return Response(serializer.data,status=status.HTTP_200_OK)
#         def put(self,request,pk):
#                 book = Book.objects.get()
#                 serialize = BookSerializer(book,data=request.data)
#                 if serialize.is_valid() :
#                         serialize.save()
#                         return Response({"success":"yes"},status=status.HTTP_200_OK)
#                 else :
#                         return Response(status=status.HTTP_400_BAD_REQUEST)