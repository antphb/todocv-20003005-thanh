from django.conf import settings
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path("",views.home,name="home"),
    path("CV1/",views.CV1,name="CV1"),
    path("CV2/",views.CV2,name="CV2"),
    path("ToDo1/",views.ToDo1,name="ToDo1"),
    path("ToDo2/",views.ToDo2,name="ToDo2"),
]
urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)