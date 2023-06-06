from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation # password_validation provides the method to check the password meets the minimum requirements
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password # hasher - convert plain text password into the hashed password that we add to the db

# User model
User = get_user_model()

# Serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):
        print('DATA -->', data)
        
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError({ 'password_confirmation': 'Does not match password' })

        try:
            password_validation.validate_password(password)
        except ValidationError as error:
            print(error)
            raise ValidationError({ 'password': error })

        data['password'] = make_password(password)
        print('HASHED PASSWORD --->', data['password'])
        return data

    class Meta:
        model = User
        fields = ("id", "email", "username", "name", "avatar", "password", "password_confirmation")