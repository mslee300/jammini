from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework import status
from .models import GameSession
from django.shortcuts import redirect, get_object_or_404
import uuid

class GameSessionView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        """
        Creates a new game session and returns the link for players to join.
        """
        user = request.user
        session = GameSession.objects.create()
        game_link = f"http://127.0.0.1:8000/game/speedgame/{user.id}/session/{session.session_id}"
        return Response({'game_link': game_link}, status=status.HTTP_201_CREATED)

    def get(self, request, user_id, session_id):
        """
        Handles GET request to check if the game can start or to redirect players to the waiting room.
        - If it's a direct browser access, redirect to React frontend.
        - If it's an API poll, return JSON to indicate game status.
        """
        user = get_object_or_404(User, id=user_id)
        session = get_object_or_404(GameSession, session_id=session_id)

        # Add the player to the session
        if user not in session.players.all():
            session.add_player(user)

        # Check if this is an AJAX/API call (polling from React app)
        if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
            # Return JSON response for polling
            if session.can_start():
                session.is_game_started = True
                session.save()
                return Response({"message": "Game started", "can_start": True}, status=status.HTTP_200_OK)

            return Response({"message": "Waiting for another player", "can_start": False}, status=status.HTTP_200_OK)

        # If not an API request, redirect to React frontend running on port 5173
        return redirect(f"http://localhost:5173/game/speedgame/{user_id}/session/{session_id}")
