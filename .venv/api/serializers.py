from rest_framework import serializers
from api.models import pdfContent
# class pdfContentSerializer(serializers.HyperlinkedModelSerializer):
#         class Meta:
#                 model=pdfContent
#                 fields ='__all__'

class pdfContentSerializer(serializers.ModelSerializer):
        class Meta:
                model=pdfContent
                fields ='__all__'                