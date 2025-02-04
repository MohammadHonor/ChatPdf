from django.shortcuts import render
from login_auth.serializers import RegisterSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from login_auth.models import RegisterModel
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from login_auth.models import RefreshTokenModel
from rest_framework_simplejwt.tokens import RefreshToken
from login_auth.serializers import RefreshTokenSerialization
from rest_framework_simplejwt.settings import api_settings
# Create your views here.

class RegisterView(APIView):
    #register
    def post(self,request,*args,**kwargs):
        request.data['password'] = make_password(request.data['password'])
        try:
            serialize = RegisterSerializer(data=request.data)
            # print(type(serialize))
            if serialize.is_valid() :
                # print(serialize)
                serialize.save()
                return Response({'message':"registration successful"},status=status.HTTP_201_CREATED)
            return Response({'message':"registration unsuccessful"},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message':"registration unsuccessful"},status=status.HTTP_400_BAD_REQUEST)
    # forget
    def put(self,request):
        try:
            email = request.data['email']
            new_password = request.data['password']
            if not email and not new_password :
                return Response("email and password required")
            user = RegisterModel.objects.get(email=email)
            user.password = make_password(new_password)
            user.save()
            return Response({'message':"password updated successfully"},status=status.HTTP_201_CREATED)
        except:
            return Response({'message':"password updation unsuccessful"},status=status.HTTP_404_NOT_FOUND)
    #login
    def get(self,request,*args,**kwargs):
        try:
            email = request.data['email']
            new_password = request.data['password']

            user = RegisterModel.objects.filter(email=email).first()
            if not user:
                return Response({'message':"email is not registered"},status=status.HTTP_205_RESET_CONTENT)

            if check_password(new_password,user.password):
                Refresh_Instance=RefreshTokenModel.create_refresh_token(user)
                # d = RefreshToken(Refresh_Instance)
                
                refresh_token= RefreshToken(Refresh_Instance.Token)
                access_token = str(refresh_token.access_token)
                # print(str(refresh_token.role))

                response = Response({'message':'login successful'},status=status.HTTP_200_OK)
                response.set_cookie(
                    key='refresh_token',
                    value=refresh_token,
                    httponly=True,
                    max_age=api_settings.REFRESH_TOKEN_LIFETIME,
                    samesite='lax',
                    secure=True
                )
                response.set_cookie(
                    key='access_token',
                    value=access_token,
                    httponly=True,
                    samesite='lax',
                    max_age=api_settings.ACCESS_TOKEN_LIFETIME,
                    secure=True
                )
                return response
            # return Response({'message':"validation error"},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e :
            # print(e)
            return Response({'message': str(e) },status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RefreshTokenView(APIView):
    def post(self,request,*args,**kwargs):

        refresh = request.data['refresh_token']
        user_id = RefreshTokenModel.objects.filter(Token=refresh).first().user_id
        if not user_id :
            return Response({'alert message':'refresh token not matched'})

        user = RegisterModel.objects.filter(id=user_id).first()
        Refresh_Instance = RefreshTokenModel.create_refresh_token(user)
        token = RefreshToken(Refresh_Instance.Token)
        access_token = token.access_token

        response = Response({"is_refreshed_access_token":True},status=status.HTTP_200_OK)
        response.set_cookie(
            key='access_token',
            value=access_token,
            secure=True,
            samesite='lax',
            httponly=True,
            max_age=api_settings.ACCESS_TOKEN_LIFETIME
        )
        return response
        