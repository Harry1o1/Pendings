import os
from django.cors.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter,URLRouter
import chat.routing
# from django.core.asgi import get_asgi_application



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

application = ProtocolTypeRouter({
  "https": get_asgi_application(),
  "websocket": URLRouter(
    
    chat.routing.websocket_urlpatterns
    
  )
})







# mysite/asgi.py
# import os

# from channels.auth import AuthMiddlewareStack
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application
# import chat.routing

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

# application = ProtocolTypeRouter({
#   "http": get_asgi_application(),
#   "websocket": AuthMiddlewareStack(
#         URLRouter(
#             chat.routing.websocket_urlpatterns
#         )
#     ),
# })
