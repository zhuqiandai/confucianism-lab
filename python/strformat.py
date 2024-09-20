import re

line = 'asdf fjdk; afed, fjek,asdf, foo'
print(re.split(r'[;,\s]\s*', line))

code = '你好'
ucode = u'你好'

print(code, ucode)

# `10` width
#  `:` align
print('{:_>10}'.format('test'))
print('{:_<12}'.format('test'))


print('{:_>10.5}'.format('xylophone'))


class Data(object):

    def _private_method(self):
        pass

    def __str__(self):
        return 'str'

    def __repr__(self):
        return 'repr'


print("{0!s}, {1!r}".format(Data(), Data()))
