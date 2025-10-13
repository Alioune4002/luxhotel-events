from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.URLField(max_length=500, blank=True, null=True)  # Nouveau champ pour URL image

    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=100)
    desc = models.TextField()
    capacity = models.IntegerField()
    image_url = models.URLField(max_length=500, blank=True, null=True)  # Nouveau champ pour URL image

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

class Booking(models.Model):
    check_in = models.DateField()
    check_out = models.DateField()
    guests = models.IntegerField()
    room = models.CharField(max_length=100)  # Temporaire, pourrait être ForeignKey
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Réservation {self.room} ({self.check_in})"