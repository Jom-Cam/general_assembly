from rest_framework.views import APIView
from django.contrib.auth import get_user_model 
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from .serializers.common import UserSerializer
from datetime import datetime, timedelta
from django.db import IntegrityError
import jwt
from django.conf import settings

# User model
User = get_user_model()

# Create your views here.
class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        print(user_to_create)
        try:
            user_to_create.is_valid()
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        except: 
            return Response(IntegrityError)

class UserDetailView(APIView):
    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response(IntegrityError)

    def get(self, _request, pk):
        user = self.get_user(pk)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)


class LoginView(APIView):

    def post(self, request):
        print(request.data)
        try:
            user_to_login = User.objects.get(email=request.data.get('email'))
        except User.DoesNotExist:
            return PermissionDenied(detail="Unauthorised")

        if not user_to_login.check_password(request.data.get('password')):
            return PermissionDenied(detail="Unauthorised")

        dt = datetime.now() + timedelta(days=7)
        print('Date/Time >', int(dt.strftime('%s'))) 

        token = jwt.encode({
            'sub': user_to_login.id,
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY, 'HS256')
        print('Generated Token >', token)

        # print(user_to_login.id)
        return Response({
            'token': token,
            'message': f"Welcome back {user_to_login.name}"
        }, status.HTTP_202_ACCEPTED)