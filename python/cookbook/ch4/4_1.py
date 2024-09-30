def firstn(n):
    num = 0
    while num < n:
        yield num * .5
        num += 1

sum_of_first_n = sum(firstn(100))

print(sum_of_first_n)


def double(L):
    for x in L:
        yield x * 2

eggs = double([1, 2, 3, 4, 5])
print(eggs)
