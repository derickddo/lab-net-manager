from django.urls import path
from .views import NetworkScanView

urlpatterns = [
    path('', NetworkScanView.as_view())
]