from django.urls import path
from .views import SignupView, SigninView, LogoutView,FeedbackCreateView

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('signin/', SigninView.as_view(), name='signin'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('feedback/', FeedbackCreateView.as_view(), name='feedback-create'),
]
