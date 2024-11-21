from django.db import models

# Create your models here.

class pdfContent(models.Model):
        pdf = models.FileField(upload_to='uploads/',null=True, blank=True)
        upload_at = models.DateTimeField(auto_now_add=True,null=True,blank=True)
