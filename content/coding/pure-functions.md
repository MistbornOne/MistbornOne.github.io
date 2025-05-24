+++
date = '2025-05-06T06:58:59-04:00'
title = 'Pure Functions'
tags = ['Python', 'Functional-Programming', 'OOP']
+++

## Pure Functions

Pure functions are functions that return the same result every time, assuming they receive the same inputs. This is made possible by writing the function to be self-contained, meaning it doesn't rely on variables outside it's local scope.

Pure functions _do not_ change the external state of the program. They are great for keeping clean code that is easy to debug, but you can't write an entire program of pure functions, because it wouldn't actually do anything.

Pure functions also don't perform any I/O operations, such as reading from a disk, accessing the internet, or writing to the console.

Example:

```py
def squared(num):
    return num * num
```

The example above will always return a squared number, but has no side effects. It won't modify any variables outside its own scope, nor does it depend on variables from the global scope.

Pure functions are an essential part of functional programming, but are also used in object-oriented programming as well. The difference is that functional programming is essentially centered around writing as many pure functions as possible.
