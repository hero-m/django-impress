import json
from django.shortcuts import render_to_response
from storage.models import ImageData


def impress(request, image_id):
    image = ImageData.objects.get(pk=image_id)
    image_data = json.dumps({
        'id': image.id,
        'name': image.name,
        'url': image.base.url,
        'saved': image.saved,
        'active': image.active,
        'width': image.width,
        'height': image.height
    })
    return render_to_response('impress/impress.html', {'image_data': image_data})
