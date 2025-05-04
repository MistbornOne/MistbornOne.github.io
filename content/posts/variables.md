+++
date = '2025-05-04T14:17:36-04:00'
title = 'Variables'
tags = ['Python', 'Beginner']
+++

## What Are Variables?

If you are brand new to coding, the term _variables_ might not immediately register. It's important to understand what a variable is, as most coding languages do use them.

### So What Are Variables?

Variables are _containers that store values_, such as:

**Numbers:**

- Integers (3)
- Float (3.0)
- String ("3")

**Text:**

- Strings are plain text and are wrapped in parenthesis to tell Python to interpret the text as text only. "For example, this would be a string"

**Boolean:**

- Boolean values are simply True or False

**Sequences:**

- Lists ["Bob", "Mary", "Tom"]
- Tuples (1, "hello", 3.14)
- Range is a type of variable that generates a sequence of numbers within a given range.

**Mapping:**

- Dictionaries store data in pairs called "key/value" pairs.

**Binary:**

- Bytes are immutable sequences of data (0's and 1's)
- Bytearrays are mutable (changeable) sequences of data

**None Type:**

- None is a variable that represents the absence of a value.

We will ig more into each of those types in subsequent posts, but for now the key takeaway is that a variable is a container that stores a value or set of values.

Below is an example of _declaring_ different variable types in Python:

```Python
name = "John" #the variable is name, the value is "John"
age = 30 #the variable is age, the value is 30
is_a_male = True #boolean variable is_a_male is set to True
```

Once these variables have been declared, Python will remember them and allow you to call them later, as long as they are either in the global scope or local scope you're calling them in (more on this later).

```Python
name = "John"
age = 30

print(name, age)
# John, 30
```

Variables only allow alpha-numeric characters, must be a continuous string and may not include reserved keywords. They can begin with an underscore.

**Best Practice** is to use snake case when creating variables (IE snake_case), though some argue camel case (IE camelCase) is better.

The name variable comes from the fact that the values being stored are mutable rather than being fixed. In other words, the value may _vary_ or change.

If you're brand new to coding, I hope this explanation gives a little clarity to the topic of what variables are. In the next post we will discuss some of the variable types in more detail.
