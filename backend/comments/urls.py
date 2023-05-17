from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.get_all_comments),
    path('<str:video_id>/', views.comment_detail),
]

# for the video portion in frontemd change int to str