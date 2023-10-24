from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from scapy.all import ARP , Ether, srp
import nmap
import socket

# Create your views here.
def scan_network():
    network = "192.168.137.0/24"
    arp_requests = srp(Ether(dst="ff:ff:ff:ff:ff:ff")/ARP(pdst=network), timeout=30)[0]
    devices = []

    for (_,arp_response) in arp_requests:
        device = {'ip': arp_response.psrc, 'mac': arp_response.hwsrc}

         # Perform reverse DNS lookup to get the hostname
        try:
            hostname, _, _ = socket.gethostbyaddr(arp_response.psrc)
            device['hostname'] = hostname
        except socket.herror:
            device['hostname'] = "N/A"

        # You may use Nmap for more detailed OS detection
        # Include additional code to integrate Nmap and OS detection

        devices.append(device)
    return devices



class NetworkScanView(APIView):
    def get(self, request):
        devices = scan_network()
        return Response({'devices':devices})
    