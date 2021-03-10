---
date: 2019-05-22
---

# iOS and css clip-paths don't really go along

Lately i've been working more and more with clipping path animations, unfortunately I still have to write ugly fixes to get them working in another "modern" browser called "Edge" so the experience isn't all that. But yeah, thats what you choose when using that browser.
A litte animation like this, just shows the element when it gets a class `is-active`.

```css
.element {
    clip-path: inset(0 0 0 100%);
    transition: clip-path 0.5s ease-in-out;
    &amp;.is-active {
        clip-path: inset(0 0 0 0%);
    }
}
```
Anyway, everything was alright until I was doing some bigger animations which worked perfectly in (almost) all browsers and checked Ios. It looked like the animations just didnt work at all. They went from begin state to the end without any transform or animation. But why?!
Apparently Ios has a little render issues with these animations, so you need to (very dirty) just make the browser rerender a little more and I came to his solution:

```css
@keyframes iosFix {
    from {
        top: 0px;
    }
    to {
        top: 0.01px; // The 0.01px you don't see, because your browser will render it as 0, but it does make it rerender.
    }
}
.element {
    clip-path: inset(0 0 0 100%);
    transition: clip-path 0.5s ease-in-out;
    animation: iosFix 0.01s infinite;
}
.element.is-active {
        clip-path: inset(0 0 0 0%);
}
```

Yes! That works.. BUT! When for instance the <code>.element</code> is a big element where you want to scroll in. You want it too smoothscroll (<code>-webkit-overflow-scrolling: touch;</code>) on Ios. When checking that. It really doesn't like this animation + the scrolling. So what to do now? You want both.
I came to the following fix, it takes some code. But It gives the best result.

```css
@keyframes iosFix1 {
    to {
        top: 0.01px;
    }
}
@keyframes iosFix2 {
    to {
        top: 0.01px;
    }
}

.element {
    clip-path: inset(0 0 0 100%);
    transition: clip-path 0.5s ease-in-out;
    animation: iosFix1 0.5s;
}
.element.is-active {
    animation: iosFix2 0.5s;
    clip-path: inset(0 0 0 0%);
}
```
Yeah, this works! But some questions answered:


- **Animation length**; The animation is just as long as the transition. This makes sure your browser keeps rerendering while the transition happens. When you make this shorter, the transition will just stop there (Could be handy for something, but not in this case).
- **Not infinite**; It's not infinite anymore, that means it stops when the animation is done and won't have any influence on the scrolling.
- **2 animations?** Yes, because it's animation on the same element, so the browser doesnt see it as a new animation when you just add or a class. So you have to make two animations, for the with and without active state.

Hope this helps somebody!
