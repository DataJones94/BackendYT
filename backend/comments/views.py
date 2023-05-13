from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommentSerializer
from .models import Comment


@api_view(['GET'])
def comments_list(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many = True)


    return Response(serializer.data)
    

