from rest_framework import serializers
from api.models import pdfPath
from api.models import PdfDataModel

class pdfPathSerializer(serializers.ModelSerializer):
        class Meta:
                model=pdfPath
                fields ='__all__'

class PdfDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PdfDataModel
        fields = '__all__'
