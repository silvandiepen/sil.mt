---
date: 2019-04-01
tags: opinion, self, this
---

# Self or This?

At my office, this has been an ongoing conflict between developers. Should we use `self` of `_this` in JavaScript? There are things to say for both, but I prefer `_this` because of the following reasons.

- window.self in Javascript already exists, it does not in the frameworks we use, and therefore we could repurpose it for the gain of using `this`. But why should you repurpose something if you can get something new?
- I think, it's clearer to use \_this as a reference to `this` because of its similarity. Therefor its more logical to see its the same. `self` is a complete different word, and therefore should only be used for something completely different.
- It's easier to just change your code to `_this` from `this` then making it self. Yes, I'm a lazy developer.

Some references which agree with me:

- AirBnb [AirBnb discussion on github](https://github.com/airbnb/javascript/issues/81)
