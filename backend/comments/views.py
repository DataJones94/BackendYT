from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentSerializer
from .models import Comment


@api_view(['GET', 'POST'])
def comments_list(request):
    if request.method == 'GET':

        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        return()
        

