from django.urls import path
from .views import GameSessionView

urlpatterns = [
    path('gameplay/', GameSessionView.as_view(), name='gameplay'),
    path('speedgame/<int:user_id>/session<uuid:session_id>/', GameSessionView.as_view(), name='waiting-room'),
]
