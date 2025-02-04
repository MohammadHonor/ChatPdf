from rest_framework import serializers
from api.models import pdfPath,Book

# class pdfContentSerializer(serializers.HyperlinkedModelSerializer):
#         class Meta:
#                 model=pdfContent
#                 fields ='__all__'

class pdfPathSerializer(serializers.ModelSerializer):
        class Meta:
                model=pdfPath
                fields ='__all__'

# class userQuerrySerializer(serializers.ModelSerializer):
#         class Meta:
#                 model=userQuerry
#                 fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
        class Meta:
                model = Book
                fields = ["title","author"]