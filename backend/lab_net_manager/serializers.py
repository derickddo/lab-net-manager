import urllib.parse
from rest_framework import serializers
from .models import Computer, User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password

class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'avatar', 'name']

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # Add custom claims
        token["name"] = user.name
        token["email"] = user.email
        token['avatar'] = urllib.parse.urljoin('http://127.0.0.1:8000', user.avatar.url) 
        
        return token

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["email", 'name', "password", "password2"]

    def validate(self, attrs):
        if attrs["password"] != attrs["password2"]:
            raise serializers.ValidationError({"password": "password does not match"})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data["name"],
            email=validated_data["email"],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
