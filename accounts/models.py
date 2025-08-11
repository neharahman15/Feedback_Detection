from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='feedbacks')
    text = models.TextField()
    rating = models.IntegerField(null=True, blank=True)
    sentiment = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Feedback by {self.user.username} on {self.created_at.date()}"