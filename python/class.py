from dataclasses import dataclass
import math


@dataclass
class Coffee():
    name: str
    price: float
    ingredients: list[str]
    is_vegan: bool

    def order(self, amount: int) -> str:
        return ''


SIMPLE_COFFEE = Coffee(name="Simple Coffee", price=1.0, ingredients=["Coffee"], is_vegan=True)
SIMPLE_COFFEE_DOUBLE = Coffee(name="Simple Coffee Double", price=1.0, ingredients=["Coffee"], is_vegan=True)
print(SIMPLE_COFFEE.__eq__(SIMPLE_COFFEE_DOUBLE))
