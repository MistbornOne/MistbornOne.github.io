+++
date = '2025-05-13T20:16:42-04:00'
title = 'Functions'
tags = ['Python', 'Beginner']
+++

**What Are Functions?**

Functions are blocks of code that perform a given task any time they are called.

A function could process one action a single time and move on to the next block of code in the script, or it could iterate through itself multiple times (infinitely if you wrote it that way).

In Python, your declare a function with the reserved keyword `def` - which _defines_ the function.

Sample function in Python:

```Python
def area(length, height):
    return length * height
```

In the simple example above, we define the function called area and give it two inputs, the length and height of an object. Then within the function, the indented text is what the function _actually does_. In this example it returns the value of length \* height.

This example wouldn't actually produce anything if called by itself. Instead, you'd get an error that the function was expecting two arguments and none were given.

```Python
def area(length, height):
    return length * height

length = 10
height = 20
rectangle_area = area(length, height) # Notice we are calling the function and giving it variables.

print(rectangle_area)
```

Now in that example, you would receive a real result if you executed the code in an interpreter.

```Bash
> > > def area(length, height):
> > >   return length \* height
> > >
> > > length = 10
> > > height = 20
> > > rectangle_area = area(length, height)
> > >
> > > print(rectangle_area)
> > > 200
```
