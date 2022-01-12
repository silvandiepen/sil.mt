---
date: 2022-01-12
title: Switching ColorModes - Part 2: Styling
---

# Switching Color Modes, the styling part

When we determined the technical part of styling, we need to set up the css in order to use darkmode and lightmode.

We can do this multiple ways, like you can create completely different stylesheets for either way. But a better solution (in my opinion) is just to use the power of custom properties.

For all the styling colors, we will use just a small set of custom properties all throughout the project. In the example I'm using a really small set, but it's of course up to you what to do with that.

The philosophy for styling and theming will be to not determine actual colors in the variables, but use terms like 'background' and 'foreground' which will be use after for the background and the text. In this way there will be no confusion.

```css
:root {
  --background: white;
  --foreground: black;
  --primary: red;
  --secondary: blue;
}
```

We just defined these colors on the body and a button for now.

```css
body {
  background-color: var(--background);
  color: var(--foreground);
}
button {
  background-color: var(--primary);
}
```

But this doesnt switch yet, so we can use the power of media queries in order to switch the color mode. The `prefers-color-scheme` media query, helps you create styling just based on the color mode.

```css
@media (prefers-color-scheme: light) {
  :root {
    --background: white;
    --foreground: black;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --background: black;
    --foreground: white;
  }
}
```

Now your page will show the background and foreground based on your browsers preference, but we still didn't use our created function from the technical part. So instead of the media queryies, we will use the determined data-attribute.

```css
body[color-mode="light"] {
  --background: white;
  --foreground: black;
}
body[color-mode="dark"] {
    --background: black;
    --foreground: white;
  }
}
```

In this way, the page will always show the right colors, based on your defined setting.

You could practically define both the media queries and the `color-mode` on the body in order to have a fallback whenever the colorSwitch script doesn't work and you just want to fall back to the browser default.
