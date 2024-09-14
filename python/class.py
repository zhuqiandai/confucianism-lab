from dataclasses import dataclass
import math
import random
import os
import polars as pl
from datetime import datetime


@dataclass
class Coffee():
    name: str
    price: float
    ingredients: list[str]
    is_vegan: bool

    def order(self, amount: int) -> str:
        return ''


SIMPLE_COFFEE = Coffee(name="Simple Coffee", price=1.0,
                       ingredients=["Coffee"], is_vegan=True)
SIMPLE_COFFEE_DOUBLE = Coffee(
    name="Simple Coffee Double", price=1.0, ingredients=["Coffee"], is_vegan=True)
print(SIMPLE_COFFEE.__eq__(SIMPLE_COFFEE_DOUBLE))


class Animal:
    pass


class Duck(Animal):
    def __init__(self, color):
        self.color = color

    @classmethod
    def create_random(cls):
        color = random.choice(['yellow', 'red', 'blue'])
        return cls(color=color)

    @staticmethod
    def make_sound():
        pass

    @property
    def basename():
        pass

    @basename.setter
    def basename():
        pass


class Cat(Animal):
    pass


if __name__ == '__main__':
    pass
