from django.contrib import admin
from .models import Room, Event, Contact, Booking


admin.site.register(Room)
admin.site.register(Event)
admin.site.register(Contact)
admin.site.register(Booking)