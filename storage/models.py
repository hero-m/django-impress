from django.db import models


class ImageData(models.Model):
    name = models.CharField("Image name", max_length=100, unique=True)
    base = models.FileField("Image file", upload_to="images", max_length=1024*1024*8)
    saved = models.TextField("Saved data", null=True, blank=True)
    active = models.TextField("Active data", null=True, blank=True)
    luminance = models.TextField("Active luminance data", null=True, blank=True)

    def __str__(self):
        return self.name
