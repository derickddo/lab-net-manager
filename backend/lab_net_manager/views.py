from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from scapy.all import ARP , Ether, srp, DNS, sr1, DNSQR, IP, UDP
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import ComputerSerializer, MyTokenObtainPairSerializer, RegistrationSerializer
from .models import Computer, User

# Create your views here.
def scan_network():
    network = "192.168.8.20/24"
    arp_requests = srp(Ether(dst="ff:ff:ff:ff:ff:ff")/ARP(pdst=network), timeout=1)[0]
    devices = []

    for (_,arp_response) in arp_requests:
        device = {'ip': arp_response.psrc, 'mac': arp_response.hwsrc, 'hostname':''}
        
        # You may use Nmap for more detailed OS detection
        # Include additional code to integrate Nmap and OS detection

        devices.append(device)
    return devices





class NetworkScanView(APIView):
    def get(self, request):
        devices = scan_network()
        if devices:
            for device in devices:
                computer =  Computer.objects.create(ip_address=device['ip'], mac_address=device['mac'])
                serializer = ComputerSerializer(data=computer)
                if serializer.is_valid():
                    serializer.save()
        query_set = Computer.objects.all()
        serializer = ComputerSerializer(query_set, many=True)
        return Response({'devices':serializer.data})
          

class AuthView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer