from django.db import models
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.timezone import now

# Create your models here.

class RegisterModel(models.Model):
    name = models.CharField(max_length=255,default=None)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)


#Refresh token model
class RefreshTokenModel(models.Model):
    user = models.ForeignKey(RegisterModel ,on_delete=models.CASCADE ,related_name='Refresh_Token')
    Token = models.CharField(max_length=255,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expired_at = models.DateTimeField()
    revoked = models.BooleanField(default=False)

    def revoke(self):
        self.revoked=True
        self.save()
    @classmethod
    def create_refresh_token(cls,user):
        refresh_token = RefreshToken.for_user(user=user)
        return cls.objects.create(
            user=user,
            Token=str(refresh_token),
            expired_at=now()+refresh_token.lifetime
        )

    