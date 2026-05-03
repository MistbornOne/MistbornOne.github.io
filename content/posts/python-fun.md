+++
date = '2026-05-03T06:48:18-04:00'
draft = false
title = 'Python Fun'
+++

I recently started messing with Python again and saw a challenge on a practice website.  For context, I haven't written any Python in a bit, so I wanted to scratch the itch and keep my knowledge alive. 

The challenge was to create a program that asks for user input and does some math with their age to calculate what year they'd turn 100.

Here's what I came up with:

```Python
current_year = 2026
name = ""
age = ""
yourage = 0


def main():
    print(f"Hello! What's your name?")
    name = input()

    print(f"\nAnd how old are you, {name}?")
    age = int(input())
    yourage = int(age)

    return name, yourage


def hundred(yourage, current_year):
    yearstohundo = 100 - yourage
    yearwillbe = yearstohundo + current_year

    print(f"\nYou will turn 100 in {yearwillbe}!")


name, yourage = main()
hundred(yourage, current_year)
```

If you run that program in the terminal you will get (regular text is my answers):

`Hello! What's your name?`
Ian

`And how old are you, Ian?`
39

`You will be 100 in 2087!`
