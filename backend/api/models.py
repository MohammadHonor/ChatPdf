from django.db import models

# Create your models here.
class pdfPath(models.Model):
        # id = models.IntegerField(primary_key=True,auto_created=True)
        pdf = models.FileField(upload_to='uploads/',null=True, blank=True)
        upload_at = models.DateTimeField(auto_now_add=True,null=True,blank=True)


class PdfDataModel(models.Model):
    pdf = models.ForeignKey(pdfPath,on_delete=models.CASCADE,related_name="pdf_content")
    contents = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True ,null=True,blank=True)

