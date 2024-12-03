from django.urls import path
from .views import GameSessionView

urlpatterns = [
    path('gameplay/', GameSessionView.as_view(), name='gameplay'),
    path('speedgame/<int:user_id>/session/<uuid:session_id>/', GameSessionView.as_view(), name='waiting-room'),
    path('speedgame/1/session/bc61c131-57c0-45ad-869a-9b651f83edf4', GameSessionView.as_view(), name='waiting-room'),
    path('countdowngame/1/session/cd478cb5-23d0-4837-bc7f-dd2af33051c4', GameSessionView.as_view(), name='waiting-room'),
]