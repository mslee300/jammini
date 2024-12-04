from django.urls import path
from .views import SpeedGameRedirectView, CountDownGameRedirectView

from django.urls import path
from .views import SpeedGameRedirectView, CountDownGameRedirectView

urlpatterns = [
    path('speedgame/1/session/bc61c131-57c0-45ad-869a-9b651f83edf4', SpeedGameRedirectView.as_view(), name='speedgame-redirect'),
    path('countdowngame/1/session/cd478cb5-23d0-4837-bc7f-dd2af33051c4', CountDownGameRedirectView.as_view(), name='countdowngame-redirect'),
]