+++
date = '2026-05-09T18:47:07-04:00'
draft = false
title = 'Python in 30 Days - Day 2'
tags = ['Python', 'Coding', 'Growth', 'Challenge', 'Claude', 'Python In 30 Days']

+++

Day two was all about dictionaries, which have always been a real struggle for me. I've been told by many people that they've also struggled with them in the past, so at least I know I'm not alone.

### The Challenge:

You're building a simple restaurant order sytem.

Write code that:

1. Creates a dictionary of menu items with their prices (at least 5 items)
2. Creates an empty list called order
3. Writes a function `add_item(order, item_name, menu)` that:

- Adds the item to the order list if it exists in the menu
- Prints a warning if the item isn't on the menu

4. Writes a function `get_total(order, menu)` that returns the total cost of everything in the order
5. Adds at least 3 items to the order (try adding one that doesn't exist)
6. Prints the final order list and the total, formatted cleanly

---

### My Code:

```Python
menu = {
    'Burger': 15,
    'Fries': 5,
    'Milkshake': 9,
    'Salad': 6,
    'Brownie': 3
}

order = []
total = 0


def add_item(order, item_name, menu):
    if item_name in menu:
        order.append(item_name)
        print(f"Added {item_name} to order.")
    else:
        print(f"Sorry, {item_name} is not on the menu!")

           

def get_total(order, menu):
    total = 0
    for i in order:
        price = menu[i]
        total += price
    
    
    return total

add_item(order, 'Burger', menu)
add_item(order, 'Pizza', menu)
add_item(order, 'Fries', menu)
add_item(order, 'Milkshake', menu)

bill = get_total(order, menu)


print("\nYour order:\n")
print(*order, sep="\n")
print(f"\nTotal: ${bill}")

```

The results of running the code are:

```
Added Burger to order.
Sorry, Pizza is not on the menu!
Added Fries to order.
Added Milkshake to order.

Your order:

Burger
Fries
Milkshake

Total: $29
  
```

This was a fun challenge for me, though it frustrated me a time or two.  Trying to figure out the `get_total` function took me a good bit of time, even though I now know the solution was super simple.  Sometimes, it's just like that.

I'm thankful for the opportunity to practice these skills and to have made a few realizations along the way.
