from django.db import models

# Create your models here.

# User Model (if applicable)
# class User(models.Model):
#     name = models.CharField(max_length=100)
#     role = models.CharField(max_length=20)  # Admin, Technician, User, etc.
#     contact_info = models.TextField()


# Network Details Model
# class NetworkDetails(models.Model):
#     subnet = models.GenericIPAddressField()
#     gateway = models.GenericIPAddressField()
#     dns_server = models.GenericIPAddressField()
#     vlan = models.CharField(max_length=20, blank=True, null=True)
#     ip_assignment_method = models.CharField(max_length=20)  # Static or Dynamic

# Computer Model
# class Computer(models.Model):
#     name = models.CharField(max_length=100)
#     ip_address = models.GenericIPAddressField()
#     mac_address = models.CharField(max_length=17)  # Assuming a standard MAC 
#     status = models.CharField(max_length=20)  # In-use, Available, Offline, etc.
#     specifications = models.TextField()
#     network_details = models.OneToOneField(NetworkDetails, on_delete=models.SET_NULL, blank=True, null=True)


# # Troubleshooting Ticket Model
# class TroubleshootingTicket(models.Model):
#     title = models.CharField(max_length=200)
#     description = models.TextField()
#     status = models.CharField(max_length=20)  # Open, In-progress, Closed, etc.
#     priority = models.CharField(max_length=20)  # Low, Medium, High, etc.
#     creation_date = models.DateTimeField(auto_now_add=True)
#     resolution_date = models.DateTimeField(blank=True, null=True)
#     assigned_technician = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
