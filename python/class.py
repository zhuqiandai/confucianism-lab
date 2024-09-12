from dataclasses import dataclass
import math
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


if __name__ == '__main__':
    cur_path = os.fspath(os.getcwd())
    print(os.fspath(cur_path))

    df = pl.DataFrame(
        {
            "integer": [1, 2, 3],
            "date": [
                datetime(2025, 1, 1),
                datetime(2025, 1, 2),
                datetime(2025, 1, 3),
            ],
            "float": [4.0, 5.0, 6.0],
            "string": ["a", "b", "c"],
        }
    )

    print(df)
