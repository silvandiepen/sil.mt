---
date: 2020-02-10
tags: css, custom-property, count, before
---

# Using number in custom property as content in before.

We know we can count using css. For instance you want to have a list with number but you want to have it formatted different than the default `ordered list` wants to serve you.

```css
.my-list {
    reset-counter: myList; /* Create the list on your list parent */
}
.my-list .my-item {
    counter-increment: myList; /* Increment the list with every item */
}
.my-list .my-item::before {
    content: counter(myList)' – '; /* Using the counter on the before, with a long dash and two spaces on the end. */
}
```



But what if you want to use for instance the number of a custom property on your content? This would be a logical syntax, but it's not gonna work.

```html
<div class="my-list" style="--my-number: 12"</div>
```

```css 
.my-list .my-item::before{
    content: var(--my-number)';
}
```

But! There is a way around this, so you can use that custom property, on your before:

```html
<div class="my-item" style="--my-number: 12"></div>
```

```css 
.my-item {
    counter-reset: myCounter var(--my-number);
    content: counter(myCounter);
}
```
