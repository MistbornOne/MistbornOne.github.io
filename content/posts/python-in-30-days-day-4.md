+++
date = '2026-05-12T07:24:58-04:00'
draft = false
title = 'Python in 30 Days Day 4'
tags = ['Python', 'Coding', 'AI', 'Challenge', 'Growth']
+++

Day four was more string work.  It was focused on manipulating strings and doing some built in methods to build some analytics.

## Challenge:
You're processing user-submitted restaurant reviews. Real user input is messy — inconsistent casing, extra spaces, typos in structure. Write a program that:

1. Starts with this list of raw reviews exactly as given:

```python
raw_reviews = [
    "  great burger, loved it! ",
    "FRIES WERE COLD. bad experience. ",
    "  the milkshake was amazing. will return.",
    "salad was okay. nothing special.   ",
    "BROWNIE IS A MUST TRY!!  "
]    
```
2. Writes a function `clean_review(review)` that:

- Strips leading/trailing whitespace
- Converts to sentence case (first letter capitalized, rest lowercase — look up which method does this in one step)
- Returns the cleaned string

3. Uses a list comprehension to apply `clean_review` to every review, storing results in `cleaned_reviews`
4. Writes a function `analyze_reviews(reviews)` that returns a dictionary containing:

- `"total"`: count of reviews
- `"positive"`: count of reviews containing words like "great", "amazing", "loved", "must", "will return"
- `"avg_length"`: average character length of the reviews (rounded to nearest whole number)

5. Prints the cleaned reviews and the analysis dictionary cleanly

Things to figure out: how to check if any of several words appear in a string, and how to calculate an average from a list.

### My Code:

```Python
# 1
raw_reviews = [
    "  great burger, loved it! ",
    "FRIES WERE COLD. bad experience. ",
    "  the milkshake was amazing. will return.",
    "salad was okay. nothing special.   ",
    "BROWNIE IS A MUST TRY!!  "
]

# 2
def clean_review(review):
    clean_string = review.strip().capitalize()

    return clean_string

# 3
cleaned_reviews = [clean_review(s) for s in raw_reviews]

# 4
def analyze_reviews(reviews):
    # count of reviews
    review_count = len(reviews)

    # count of positive words
    positive_words = ["great","amazing", "loved", "must", "will return"]
    pos_count = sum(1 for item in reviews
        if any(word.lower() in item.lower() for word in positive_words))
    

    # average character length of reviews
    #char_count_per_sublist = [sum(len(word) for word in sublist) for sublist in reviews]
    char_count = [len(review) for review in reviews]
    average = round(sum(char_count) / review_count)
    
    reviews_dict = {
        "Total": review_count,
        "Positive": pos_count,
        "Avg_length": average
    }
    pretty_dict = [f"{k}: {v}" for k, v in reviews_dict.items()]
    print("\nReview Analytics:")
    print(*pretty_dict, sep="\n")
    return reviews_dict
    
print("\nReviews:")
print(*cleaned_reviews, sep="\n")   
analyze_reviews(cleaned_reviews)
 
```
### Running the Code:

```
Reviews:
Great burger, loved it!
Fries were cold. bad experience.
The milkshake was amazing. will return.
Salad was okay. nothing special.
Brownie is a must try!!

Review Analytics:
Total: 5
Positive: 3
Avg_length: 30
  
```

So, that's day four down.  I'd like to tell you this was easy and I flew through it, but that would be a lie.  I freaking struggled something awful with getting the 4th step done.  I think my brain has such a hard time with list comprehension for some reason and it takes me *way too long* to get the code out - but I eventually got there.

Onward and upwards!
