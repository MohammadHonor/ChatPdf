from django.db import models

# Create your models here.
class pdfPath(models.Model):
        pdf = models.FileField(upload_to='uploads/',null=True, blank=True)
        upload_at = models.DateTimeField(auto_now_add=True,null=True,blank=True)

# class userQuerry(models.Model):
#         querry = models.CharField(max_length=200)

class Book(models.Model):
        title = models.CharField(max_length=100,primary_key=True)
        author = models.CharField(max_length=100)