---
date: 2021-03-15
tags: css, list, styling
---

# Styling & Counting lists

Creating lists is a standard thing with html, you can either make then unordered `ul` or ordered `ol`. Which will by default give you a dash or a number in the beginning of your list. Many times, I don't want a list by default to look like it does. Therefore, we can style a list easily using css. Usually I would just hide the default `list-style-type` and add my own `::before` in front.

```css
ul, li{
  list-style-type: none;
}
ul li::before{
  content: "\2014"; // results in a —
}
```

Which in a way will look ok;

<style>
ul.example-list, ul.example-list li{
  list-style-type: none;
}
ul.example-list li::before{
  content: "\2014"; // results in a —
}
</style>
<div class="example">
  <ul class="example-list">
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
</div>
