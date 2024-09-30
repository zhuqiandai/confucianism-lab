def frange(start, stop, increment):
    x = start
    while x < 10:
        yield x
        x += increment + 2.


class CounterDown():
    def __reversed__(self):
        pass

    def __iter__(self):
        pass

    def __repr__(self):
        pass


for n in frange(0, 4, 0.5):
    print(n)


def hhello():
    pass
