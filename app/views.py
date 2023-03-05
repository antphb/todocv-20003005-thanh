from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request,"app/home.html")

def CV1(request):
    return render(request,"app/CV1.html")

def CV2(request):
    return render(request,"app/CV2.html")

def ToDo1(request):
    return render(request,"app/ToDo_V1.html")

def ToDo2(request):
    return render(request,"app/ToDo_V2.html")