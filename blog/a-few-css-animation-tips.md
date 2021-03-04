---
date: 2019-06-25
---

# A few CSS animation tips

CSS Animation is a lot of fun and CSS has a big set of tools you can use to do so. Unfortunately some tools are better than others and some or better to avoid at all. So I made a list with a few tips to keep in mind while doing CSS animations.

### 1. Smaller animations are better than big ones.

The urge to start animating big things is really big, but in most websites “micro animations” actually are a lot better. It can give a user some little interactions with the website and show what is happening. Big animations can feel sluggish and make the experience on a website more often worse than better.

### 2. Cheap animations

With cheap I don’t mean they cost less money, but less power to do so. Some elements require a repaint in the browser in order to animate, but some don’t. So cheaper animations are usually better, since the rest of page won’t be affected by these animations.

**The cheap properties are:**

- `transform` 
- `translate` (for position)
- `scale` (for size)
- `rotate` (for rotation)
- `opacity` (opaque visibility)
- `clip-path` (partial visibility)

**Try to avoid the following**, they are expensive to use and therefore can make animations sluggish. These are animatable properties, there are ofcourse
but mostly they aren’t even doing anything besides going from 1 to the next value.

- `width` (min-width, max-width)
- `height` (min-height, max-height)
- `padding`
- `margin`
- `border`
- `position` (top, left, bottom, right)
- `line-height`
- `font-size`
- `background` (color, size, repeat, position)

### 3. Use a curve

A little cubic-bezier or curve can make your animation so much better. For instance simple ones; use a `ease-in` for incoming animations and a ease-out for outgoing animations. Also, you can go all over the top playing with cubic-bezier curves. A good tool to play and test with this is: [cubic-bezier.com](https://cubic-bezier.com/#0,2,1,1.5), the link given here has a cubic bezier of `0,2,1,1.5`. Which is going all the way over the top and back, it looks cool... can be nice, but some browsers won’t do anything beyond 1 and under 0. So try to keep your beziers between 0 and 1.

### 4. Let the browser know.

In some cases when using expensive elements to animate, atleast let the browser know you are going to animate this property. The browser will treat this element different, which makes it better/faster to animate:
For instance you are going to animate a `background-color`.

```css
.element {
  background-color: red;
  will-change: background-color;
  transition: background-color 0.3s;
}
.element:hover {
  background-color: blue;
}
```

Now the browsers knows and it will be prepared to do the animation.

### 5. Keep it short

A short timed animation is usually better, if the user has to wait it can feel sluggish. Also, a short animation takes less power and will feel snappier and smoother. My go to is usually about `0.3s` for small animations.

