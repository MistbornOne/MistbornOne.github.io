+++
date = '2026-05-10T16:33:18-04:00'
draft = false
title = 'Python in 30 Days Day 3'
tags = ['Coding', 'Python In 30 Days', 'Python', 'Claude', 'Challenge']
+++

Day three was all about *list comprehension*, or manipulating lists in a concise manner.  The main concept is that what would normally take a typical `for` loop to accomplish can be done in a single line.  This appiles to lists, dictionaries, and tuples.

### The Challenge:

Using your restaurant system from <a href="https://ianwatkins.dev/posts/python-in-30-days-day-two/" target="_blank">day two</a> as a base, write the following using list comprehensions — no standard for loops allowed for these:

1. Create a list called `budget_items` containing only menu items that cost $7 or less
2. Create a list called `price_tags` that contains formatted strings for every item in the menu, like "Burger - $15"
3. Create a list called `upper_order` that contains every item in your order list in uppercase
4. Print all three lists cleanly
5. Bonus if you can do #2 using `.items()` on the dictionary — that's the elegant path

### My Code:

```Python
menu = {
    'Burger': 15,
    'Fries': 5,
    'Milkshake': 9,
    'Salad': 6,
    'Brownie': 3
}


# 1.Create a list called `budget_items` containing
# only menu items that cost $7 or less

budget_items = [key for key, price in menu.items() if price <= 7]
print("\nBudget Items:")
print(*budget_items, sep='\n')

# The code below accomplishes the same thing
# but the final result is slightly more readable
# in the prior solution
# budget_items = [key for key in menu if menu[key] <= 7]


# 2. Create a list called `price_tags` that contains formatted
# strings for every item in the menu, like "Burger - $15"
# 5. Bonus if you can use `.items()` on the dictionary

price_tags = [f"{k} - ${v}" for k, v in menu.items()]
print("\nMenu Prices:")
print(*price_tags, sep='\n')


order = []

def add_item(order, item_name, menu):
    if item_name in menu:
        order.append(item_name)
        #print(f"Added {item_name} to order.")
    else:
        print(f"Sorry, {item_name} is not on the menu!")
         
def get_total(order, menu):
    total = 0
    for i in order:
        price = menu[i]
        total += price   
    
    return total

add_item(order, 'Burger', menu)
add_item(order, 'Fries', menu)
add_item(order, 'Milkshake', menu)

# 3. Create a list called upper_order that contains
# every item in your order list in uppercase

upper_order = [item.upper() for item in order]

print("\nYour order:")
print(*upper_order, sep="\n")

```
The results of running the code:

```
Budget Items:
Fries
Salad
Brownie

Menu Prices:
Burger - $15
Fries - $5
Milkshake - $9
Salad - $6
Brownie - $3

Your order:
BURGER
FRIES
MILKSHAKE  
```

So, as you can see, we were able to meet all the challenges with this solution.  It took me a bit to get the second one down.  I've never reformatted the contents of a dictionary while also transforming them into a list, so it was a great learning experience.

Onward and upward!
