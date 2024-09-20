import numpy as np


if __name__ == '__main__':
    m = np.matrix([[1, -2, 3], [0, 4, 5]])

    t = ('a', 'c', 'd')

    def add(x, y): return x + y

    add(2, 3)

    m = np.matrix([[1, -2, 3], [0, 4, 5]])
    m = m.I

    print(m.T)
    print(m.I)
