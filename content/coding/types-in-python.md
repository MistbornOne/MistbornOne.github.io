+++
date = '2025-05-09T19:41:43-04:00'
title = 'Types in Python'
tags = ['Python', 'Beginner']
+++

## Type()

In Python you can check for what type of variable you are dealing with by using the type() formula. It takes one input and tells you what type of variable it is.

See below:

```Python
>>> num = 3
>>> num_str = "3"
>>> bool = True
>>> num_float = 3.0
>>> type(num)
<class 'int'>
>>> type(num_str)
<class 'str'>
>>> type(bool)
<class 'bool'>
>>> type(num_float)
<class 'float'>
```

---

In the example above, we see that the function returns what class the variable belongs to. This can be very useful if you are trying to debug existing code that has variables written somewhere other than where you are looking or trying to fix the bug.

If you run your code to test it and get an error, Python will tell you if your variable isn't the right type for the job you're trying to accomplish. For instance, you may get a `TypeERROR` 'int' object is not subscriptable if you were trying to treat an integer like a dictionary.

Moral of the story, if you aren't certain what type of variable you are dealing with, run it through the type() function to find your answer.

**Bonus Tip**

You can convert variables to different types easily.

```Python
num = 3 # this is an integer `int`

str(num) # this converts the integer to a string

print(num)
>> "3" # printed as a string `str` because we converted it
```

This is super handy when you need to manipulate a variable to make it work for you rather than against you. For example, you may have a program that asks users for their age and for some reason they input it as a string, but your program is expecting an integer.
