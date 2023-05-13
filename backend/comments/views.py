from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment


@api_view(['GET'])
@permission_classes([AllowAny])
def comments_list(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)
    


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_detail(request):  
    print(
    'User', f"{request.video.id}{request.user.email}{request.user.username}")    
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():                                     
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comment = Comment.objects.filter(video_id=request.video_id)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data) 

    

        


    # elif request.method == 'PUT':
    #     serializer = CommentSerializer(comment, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)
    # elif request.method == 'DELETE':
    #     comment.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)