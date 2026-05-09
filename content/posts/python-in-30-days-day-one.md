+++
date = '2026-05-09T13:54:07-04:00'
draft = false
title = 'Python in 30 Days - Day 1'
tags = ['Python', 'Coding', 'Claude', 'Python In 30 Days', 'Challenge', 'Growth']
+++

It's been a while since I've heavily invested time into learning Python and I thought I'd do a refresher course, using Claude AI to help guide mea s an experiment.  I decided to have Claude quiz me on what I know already in ten questions and build a 30 day course from there.

I passed the ten questions with flying colors and Claude said that my theoretical knowledge is excellent, so it suggested we get straight into functions and scope for day one.


## The Challenge:

Write a function called `calculate_tip` that does the following:

1. Takes two parameters: `bill_amount` and `tip_percent`
2. Gives `tip_percent` a sensible default value
3. Calculates the tip amount and the total bill amount
4. Returns both values
5. Call the function twice: once with the default `tip_percent` and a second time with a custom `tip_percent`
6. Print the results outside the function in a human readable format
7. Bonus: If you want, explore the difference between unpacking a tuple vs indexing in your print statement.

---

### My Code:

```Python
def calculate_tip(bill_amount, tip_percent = .18):
    tip = bill_amount * tip_percent
    total = bill_amount + tip

    return tip, total

# Option 1 is to use indexing to make the print statment readable:

default = calculate_tip(97)
custom = calculate_tip(97, .2)

print(f"Your default tip amount is ${default[0]:.2f} making your total ${default[1]:.2f}, while your custom tip amount is ${custom[0]:.2f} making your total ${custom[1]:.2f}.")

# Option 2 is to unpack the tuple to begin with:

tip, total = calculate_tip(117, .2)
print(f"\nYour tip amount is ${tip:.2f}, which makes your total ${total:.2f}")
```

The results of running the code are:

```
Your default tip amount is $17.46 making your total $114.46, while your custom tip amount is $19.40 making your total $116.40.

Your tip amount is $23.40, which makes your total $140.40
```

Claude says I passed and even got the bonus content right, so I'm happy with the day 1 attempt.
