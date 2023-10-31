from django.urls import path
from .views import NetworkScanView, AuthView, RegisterView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', NetworkScanView.as_view()),
    path('token/', AuthView.as_view()),  
    path('token/refresh/', TokenRefreshView.as_view()),  
    path('register/', RegisterView.as_view())
]