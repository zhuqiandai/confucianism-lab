import re


def main():
    x = input()
    r = re.match("(abc)+", x)
    print(r)


if __name__ == "__main__":
    main()
