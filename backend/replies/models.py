from django.db import models
from authentication.models import User
from comments.models import Comment

# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, related_name='users',on_delete=models.CASCADE)
    comment = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
