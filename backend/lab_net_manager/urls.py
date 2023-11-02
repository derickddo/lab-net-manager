from django.urls import path
from .views import NetworkScanView, AuthView, RegisterView, LabView, LabDataView, GetLabView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', NetworkScanView.as_view()),
    path('labs/', LabView.as_view()),
    path('labs/<int:pk>', GetLabView.as_view()),
    path('lab-data/', LabDataView.as_view()),
    path('token/', AuthView.as_view()),  
    path('token/refresh/', TokenRefreshView.as_view()),  
    path('register/', RegisterView.as_view())
]