from itertools import permutations

permutations = permutations([1, 2, 3], 3)

for i in permutations:
    if ((n := i[0]) > 2):
        print(i, n)


def chain(*someiters):
    pass
