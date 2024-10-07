from django.shortcuts import render
from django.views import View

class GameStartPageView(View):
    def get(self, request):
        return render(request, 'game/start_page.html')