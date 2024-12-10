from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework import status
from .models import GameSession
from django.shortcuts import redirect, get_object_or_404
import uuid
from django.views import View
from django.shortcuts import redirect


class SpeedGameRedirectView(View):
    """
    Redirects the hardcoded speedgame URL to the game page.
    """
    def get(self, request, *args, **kwargs):
        return redirect('http://localhost:5173/gamepage2')


class CountDownGameRedirectView(View):
    """
    Redirects the hardcoded countdown game URL to the countdown game page.
    """
    def get(self, request, *args, **kwargs):
        return redirect('http://localhost:5173/countdowngamepage2')