from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.common import ReviewSerializer 
from .models import Review 

# Create your views here.
class ReviewListView(APIView):
    def post(self, request):
        request.data["owner"] = request.user.id
        print("data -->", request.data)
        serialized_review = ReviewSerializer(data=request.data)
        try:
            serialized_review.is_valid()
            serialized_review.save()
            print(serialized_review.data)
            return Response(serialized_review.data, status=status.HTTP_201_CREATED)
        except AssertionError as e:
            print(str(e))
            return Response({
                "detail": str(e)
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except:
            return Response({
                "detail": "Unprocessable Entity"
            }, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ReviewDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def delete(self, request, pk):
        print('User ->', request.user.id)
        try:
            review_to_delete = Review.objects.get(pk=pk)
            if review_to_delete.owner != request.user:
                raise PermissionDenied(detail="Unauthorised")

            review_to_delete.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)
        except Review.DoesNotExist:
            raise NotFound(detail="Review not found")
        except:
            return Response({
                "detail": "Failed to delete Review"
            }, status=status.HTTP_401_UNAUTHORIZED)