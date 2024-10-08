import heapq
from operator import itemgetter
from collections import ChainMap, namedtuple, defaultdict, deque, OrderedDict
import pprint


portfolio = [
    {'name': 'IBM', 'shares': 100, 'price': 91.1},
    {'name': 'AAPL', 'shares': 50, 'price': 543.22},
    {'name': 'FB', 'shares': 200, 'price': 21.09},
    {'name': 'HPQ', 'shares': 35, 'price': 31.75},
    {'name': 'YHOO', 'shares': 45, 'price': 16.35},
    {'name': 'ACME', 'shares': 75, 'price': 115.65}
]

cheaps = heapq.nsmallest(3, portfolio, key=lambda s: s['price'])


prices = {
    'ACME': 45.23,
    'AAPL': 612.78,
    'IBM': 205.55,
    'HPQ': 37.20,
    'FB': 10.75
}

max = max(zip(prices.values(), prices.keys()))
min = min(zip(prices.values(), prices.keys()))

print(max, min)

rows_by_uid = sorted(portfolio, key=itemgetter('price'))
print(rows_by_uid)

# ChainMap
a = {'x': 1, 'z': 3}
b = {'y': 2, 'z': 4}

c = ChainMap(a, b)
c.new_child()

print(len(c))
print(c['y'])

c = c.parents
print(len(c))

Subscriber = namedtuple('Subscriber', ['addr', 'joined'])
sub = Subscriber('jonesy@example.com', '2012-10-19')

print(sub.addr, sub.joined)


d = OrderedDict()
d['foo'] = 1
d['grok'] = 4
d['bar'] = 2
d['spam'] = 3

for key in d:
    print(key, d[key])

values = (1, 2)


def add(a, b):
    return a + b


add(*values)


def added(*values):
    s = 0
    for v in values:
        s += v
    return s
