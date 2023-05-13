from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.comments_list),
    path('all/', views.comment_detail),
]