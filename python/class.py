from dataclasses import dataclass
import math
import random
import os
import polars as pl
from datetime import datetime

@dataclass
class Coffee():
    """
    Coffee class custom

    :param name: str
    :param price: float
    :param ingredients: list[str]
    :param is_vegan: bool

    """
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
    def basename(self):
        return self.color

    @basename.setter
    def basename():
        pass

    @basename.deleter
    def basename():
        pass


class Cat(Animal):
    pass


if __name__ == '__main__':
    duck = Duck.create_random()

    print(duck.basename)
