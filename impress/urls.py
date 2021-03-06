from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',

    url(r'^$', 'storage.views.imagelist', name='imagelist'),
    url(r'^impress/(?P<image_id>\d+)/$', 'impress.views.impress', name='impress'),
    # Examples:
    # url(r'^$', 'impress.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
