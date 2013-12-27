from django.db import models
from zinnia_gallery.models import Date
from zinnia.models.entry import EntryAbstractClass

class EntryDate(EntryAbstractClass):
    date = models.ForeignKey(Date)

    def __unicode__(self):
        return u'DateGallery %s' % self.title

    class Meta(EntryAbstractClass.Meta):
        abstract = True
