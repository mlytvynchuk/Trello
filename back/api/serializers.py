from rest_framework import serializers
from .models import List, Card


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = "__all__"


class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, required=False)

    class Meta:
        model = List
        fields = ['id', 'title', 'cards']
