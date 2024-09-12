#!/usr/bin/env python

import click

@click.command()
@click.option("--count", default=1, help="Number of greetings.")
@click.option("--name", prompt="Your name", help="The person to greet.")
@click.option("--strname", prompt="Your name", help="The person to greet.")
def hello(count, name, strname):
    """Simple program that greets NAME for a total of COUNT times."""
    for _ in range(count):
        click.echo(f"Hello, {name}!")
        click.echo(f"{strname}")


if __name__ == '__main__':
    hello()
