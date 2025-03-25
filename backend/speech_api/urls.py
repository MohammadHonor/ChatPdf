from django.urls import path
from speech_api.views import AudioToTextConverter
urlpatterns = [
    path("transcript/",AudioToTextConverter.as_view() , name = "transcript the audio")
]