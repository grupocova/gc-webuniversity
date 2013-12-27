from django.contrib import admin
from django.utils.translation import ugettext_lazy as _

from zinnia.models.entry import Entry
from zinnia.admin.entry import EntryAdmin

class EntryDateAdmin(EntryAdmin):
  # In our case we put the gallery field
  # into the 'Content' fieldset
  fieldsets = ((_('Content'), {'fields': (
    'title', 'content', 'image', 'status', 'date')}),) + \
    EntryAdmin.fieldsets[1:]

# Unregister the default EntryAdmin
# then register the EntryGalleryAdmin class
admin.site.unregister(Entry)
admin.site.register(Entry, EntryDateAdmin)