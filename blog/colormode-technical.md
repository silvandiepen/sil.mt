---
date: 2022-01-12
title: Switching ColorModes - Part 1: Technical
---

# Switching Color Modes, the technical part

Nowadays many websites (including this one) offer darkmode or lightmode. It can be quite a hassle to implement and make it easy for the user to switch.

### The Logic

First of all, we want to automatically use the colormode as defined by the operating system or the browser.

We can do that with a matchMedia function on the window. Let's just determine if we are in darkmode or not?

```js
const isDarkMode = window.matchMedia("prefers-color-scheme: dark").matches;
```

Then, we want to determine which mode we are currently on. We do this by using the previous boolean we created and just set the color mode to be either dark or light. We define this with a let, because we might be changing this later.

```js
let localMode = isDarkMode ? "dark" : "light";
```

Then, we create a way to switch the current mode. Because after all, that's the goal. A function to set the mode and a function to switch.

```js
function setCurrentMode(mode) {
  localMode = mode;
}

function switchMode() {
  if (localMode == "dark") setCurrentMode("light");
  else setCurrentMode("dark");
}
```

In order to use the color mode, we set a data attribute to the body with the current mode.

```js
function setCurrentMode(mode) {
  // Set the color mode to the body
  document.body.setAttribute("color-mode", mode);
}
```

At the moment, the data-attribute won't be added to the body by default. So we need to initialize that when the page loads. Create a function to set the local mode, based on the previously determined localMode.

```js
function initColorMode() {
  // Trigger the set Current mode function with your already defined localMode
  setCurrentMode(localMode);
}
// initialize the colorMode, you can also do this on document ready, what is best in your current setup.
initColorMode();
```

So now, we have the color mode always as an attribute on the body, based on this we can style the content.

But it won't be saved, when you refresh the page, the defined mode by your browser will again be used.

So we are going to save this in `localStorage`. In this way we can check if there is a saved setting and use that if it's there. Otherwise we will fall back to the default browser defined color mode.

First of all, we need to update the setCurrentMode function with localStorage properties, we create an object which will be saved in localStorage whenever it's triggered.

```js
function setCurrentMode(mode) {
  // Create an object to save
  const colorMode = { mode: mode };

  // Save the object under a key "colorMode" or whatever you please.
  localStorage.setItem("colorMode", mode);

  document.body.setAttribute("color-mode", mode);
}
```

Now it will be saved, but it still won't be used. So we also have to update the "initColorMode" function.

```js
function initColorMode() {
  // get the saved mode from the local storage.
  const savedMode = localStorage.getItem("colorMode");

  // We update the localMode.
  localMode = savedMode || localMode;

  // The value can be undefined, when there is no saved value yet, so in that case will fall back to the already defined localMode.
  setCurrentMode(savedMode || localMode);
}
```

And there we have it, now we can switch the color mode. Of course you will still need to create an element which will trigger your switch. Something like a button or a toggle.

```html
<button class="color-mode-switch" onClick="switchMode()">
  Current color mode:
</button>
```

The button above, still doesn't know in which mode we are. We can style the button using css like for example this;

```css
body[color-mode="dark"] .color-mode-switch {
  background-color: black;
  color: white;
}
body[color-mode="dark"] .color-mode-switch::after {
  content: "dark";
}
body[color-mode="light"] .color-mode-switch {
  background-color: white;
  color: black;
}
body[color-mode="light"] .color-mode-switch::after {
  content: "light";
}
```

Now we have a simple solution for the technical part of switching the color mode.

```js
const isDarkMode = window.matchMedia("prefers-color-scheme: dark").matches;
let localMode = isDarkMode ? "dark" : "light";

function initColorMode() {
  const savedMode = localStorage.getItem("colorMode");

  localMode = savedMode || localMode;

  setCurrentMode(savedMode || localMode);
}

function setCurrentMode(mode) {
  const colorMode = { mode: mode };

  localStorage.setItem("colorMode", mode);

  document.body.setAttribute("color-mode", mode);

  window.colorMode = mode;
}

function switchMode() {
  if (localMode == "dark") setCurrentMode("light");
  else setCurrentMode("dark");
}

initColorMode();
```

### The Styling

See [Part 2](https://sil.mt/blog/colormode-styling)
