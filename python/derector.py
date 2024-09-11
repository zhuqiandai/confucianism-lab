from dataclasses import dataclass


def hello(func):
    def inner(a, b):
        print('hello {}, {}'.format(a, b))
        func(a, b)

    return inner


def validate(func):
    def vali(a, b):
        print("vali", a, b)
        func(a, b)

    return vali


@hello
@validate
def name(a, b):
    print("Alice")


if __name__ == "__main__":
    name("first", "second")
