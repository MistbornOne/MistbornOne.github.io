+++
date = '2025-05-30T09:11:25-04:00'
title = 'Decorators in Python'
tags = ['Python', 'Today I Learned', 'Functions', 'Functional Programming']
+++

## Python Decorators

Decorators are a way we can use higher order functions to modify other functions. Typically they are used to wrap a function with another function.

```python

def hello(name="Ian"):
    def greeting(func):
        def wrapper(*args, **kwargs):
            print("A man is sitting at the bar, you go up and greet him.")

            if name == "Ian":
                print("My name is Ian, what's yours?")
            else:
                print(f"My name is {name}, what's yours?")

            print("The man glances your way momentarily, then moves to the other end of the bar.")
            result = func(*args, **kwargs)
            return result
        return wrapper
    return greeting

@hello("Alice")
def bar_talk():
    print("You start a conversation about the weather with the bartender instead.")

@hello()
def another_chat():
    print("You shrug your shoulders and ask the bartender about the local sports team.")


print("=== First Interaction ===")
bar_talk()

print("\n=== Second Interaction ===")
another_chat()

```

In the example above, you would get the following print out:

```python
=== First Interaction ===
A man is sitting at the bar, you go up and greet him.
My name is Alice, what's yours?
The man glances your way momentarily, then moves to the other end of the bar.
You start a conversation about the weather with the bartender instead.

=== Second Interaction ===
A man is sitting at the bar, you go up and greet him.
My name is Ian, what's yours?
The man glances your way momentarily, then moves to the other end of the bar.
You shrug your shoulders and ask the bartender about the local sports team.
```

### What's Actually Happening?

When you called `bar_talk()`, Python encounters `@hello("Alice")`, which calls `hello("Alice")` and returns the `greeting` function.

Second, `greeting(bar_talk)` is called, which returns the `wrapper` function. `wrapper` is then assigned to decorate `bar_talk` and gets to work.

`wrapper` then works line by line and prints "A man is sitting at the bar...", checks the argument passed into `greeting` for the name given ("Alice"), and chooses the `else` option, since the `if` option failed. This prints "My name is Alice..."

It then finishes the `wrapper` function by printing "The man glances..." line and returns all those arguments to the outer functions.

Finally, the `bar_talk` function is called, having been successfully _decorated_ or wrapped by the `hello` function. This prints "You start a conversation..."

> 🧠 When you use decorators, you tell Python to wrap the function immediately following the `@decorator` with the decorator function.
>
> When you later call the function to be decorated, Python _first_ calls the innermost (wrapper) function and then the function you wanted to be decorated.

### Real Life Uses

In real life coding scenarios, decorators are commonly used for logging, authentication, timing, and caching purposes.
