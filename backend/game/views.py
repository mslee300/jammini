import uuid  # Add this import to fix the 'uuid is not defined' error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework import status
from django.http import HttpResponse


class GameSessionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """
        This endpoint initializes a new game session for the user with a unique session ID.
        """
        user = request.user
        session_id = uuid.uuid4()  # Generate a unique session ID

        # Generate a game link with the unique session ID
        game_link = f"https://jammini.replit.app/speedgame/{user.id}/session{session_id}"
        
        return Response({'game_link': game_link}, status=status.HTTP_201_CREATED)

    def get(self, request, user_id, session_id):
        """
        Display the waiting room when the game link is visited.
        """
        # Render a waiting room template or return a success response
        return HttpResponse("Waiting room... Invite more players to join.")
