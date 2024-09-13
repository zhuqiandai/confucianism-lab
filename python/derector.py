from dataclasses import dataclass
from functools import wraps


def hello(func):
    def inner(a, b):
        print('hello {}, {}'.format(a, b))
        func(a, b)

    return inner


@hello(True)
def name(a, b):
    print("Alice")


if __name__ == "__main__":
    print(dir(dataclass))
    name("first", "second")
