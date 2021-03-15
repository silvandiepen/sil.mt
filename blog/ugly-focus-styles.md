---
date: 2021-03-15
---

# Ugly focus styles

That's the problem, right there, in the title. Focus styles, are often seen as ugly, yet they have a very good purpose. Accessibility is on of those. Being able to tab through a website and navigate completely with your keyboard. You might not need to do it, but many people actually do. Therefore, it's really bad practice to just hide the focus styles from elements, it hides the indicator that a certain element is selected and therefore makes a website unbrowseable using a keyboard.


But it's also understandable that the default focus style is not what you want it to look like. Don't worry! You can still apply your own styles. 


**Don't!** just hide a focus style
```
button:focus { outline: none; }
```

**Do!** hide a focus style, and replace it with something else. 
```
button:focus { outline: none; box shadow: 0 0 2px 0 red; } 
```

But even then, sometimes you just don't want a focus style to show. It's weird when navigating with a mouse and perhabs doesn't look how you want it to look. 

There is a solution for that now! `:focus-visible`

:focus-visible only applies focus styles on an element when it's been tabbed through or navigated to using a keyboard. A mouseclick won't activate the focus style.

```
button:focus-visible{
  box-shadow: 0 0 2px 0 red;
}
```
You could in that case, just say outline none to all focus styles and overrule it with the focus visible, but better would be to only apply the styles to not show using the `:not` selector

```
button:not(:focus-visible) {
  outline: none;
}
```

#### Conclusion

Keep your website accesible, but also make it look like you want, styling specifically on focus-visible.

```
button:not(:focus-visible) {
  outline: none;
}
button:focus-visible { 
  outine: 2px solid blue;
}
```
