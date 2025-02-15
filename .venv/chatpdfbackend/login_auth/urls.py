from django.urls import path
from login_auth.views import RegisterView
from login_auth.views import RefreshTokenView
from login_auth.views import LoginView

urlpatterns = [
    path('register/' ,RegisterView.as_view(),name="user_register"),
    path('password/forget/',RegisterView.as_view(), name="forget_password"),
    path('login/' , LoginView.as_view() , name="user_login"),
    path('refresh/',RefreshTokenView.as_view(),name='refresh_access_token'),
    path('logout/',LoginView.as_view(), name='user_logout')
]