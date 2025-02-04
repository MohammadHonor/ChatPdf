from rest_framework import serializers
from login_auth.models import RegisterModel
from login_auth.models import RefreshTokenModel

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = RegisterModel
        fields ='__all__'
    # def create(self,validate_data):
    #     print(validate_data)

class RefreshTokenSerialization(serializers.ModelSerializer):
    class Meta:
        model = RefreshTokenModel
        fields = '__all__'
