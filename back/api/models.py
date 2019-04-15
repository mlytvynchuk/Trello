from django.db import models

# Create your models here.


class Card(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text


class List(models.Model):
    title = models.CharField(max_length=1000)
    cards = models.ManyToManyField(
        Card, blank=True, null=True, related_name='list')

    def __str__(self):
        return self.title
