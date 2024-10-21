from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
import uuid

class GameSession(models.Model):
    session_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    players = models.ManyToManyField(User, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_game_started = models.BooleanField(default=False)

    def add_player(self, user):
        if self.players.count() < 2:
            self.players.add(user)
            self.save()

    def can_start(self):
        return self.players.count() == 2