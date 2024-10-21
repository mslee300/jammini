from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from rest_framework import status
from django.http import HttpResponse
import uuid
from django.shortcuts import redirect, get_object_or_404


class GameSessionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user = request.user
        session_id = uuid.uuid4()

        game_link = f"http://127.0.0.1:8000/game/speedgame/{user.id}/session/{session_id}"

        return Response({'game_link': game_link}, status=status.HTTP_201_CREATED)

    def get(self, request, user_id, session_id):
        # Redirect to React frontend running on port 5173
        return redirect(f"http://localhost:5173/game/speedgame/{user_id}/session/{session_id}")
