import re


def main():
    x = input()
    p = re.compile(r"\d{4}-\d{2}-\d{2}")
    r = p.match(x)
    print(r)
    print(x)
    print(p)

    phone_number = "+212123456789"
    print(phone_number.startswith('+212'))

    name = "blen"
    print(name.title())


if __name__ == "__main__":
    main()
