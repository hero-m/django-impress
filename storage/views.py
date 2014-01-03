from django.shortcuts import render_to_response

from storage.models import ImageData


def imagelist(request):
    images = ImageData.objects.all()
    return render_to_response('storage/imagelist.html', {'images': images})
