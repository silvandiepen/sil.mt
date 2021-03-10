---
date: 2019-07-02
---

# Responsive headings

Responsive text in web development is quite a thing right now and there are many ways to approach this with good and perfect results. We have been doing this for about 1,5 year now and I will share the way we do this. I’m not saying that any other way is bad or that this way is better, but this works pretty well for us.

Let’s start with why; Why do we want responsive text in our websites? Well, before, a few years ago we’ve been developing websites for a certain resolution. A screen popping up saying “This website is optimised for a resolution of 1024x768” was a common thing. Ok, maybe a little more then a few years. Nowadays we develop websites for every resolution, a website should look good on a small smartphone (320px) till a large 4k screen (3840px). In most cases a 4k screen won’t be used as full pixels, but a website, if done well, should still be readable and look good on a large resolution like that.

> Set font size based on design width with a min and max size.

Well, that says everything, but it might not be very clear yet. Lets start at the beginning;

- Design of the websites is based on a grid, this grid is in most cases about 24 columns and these columns spread over the full viewport from mobile till the biggest screen possible.
- The main design is made 1920px wide.
- There is responsive text and non-responsive text.
- 1 grid = viewport / columns  (100vw / 24). Which is in most cases  4,166667vw.
- Define font-size in "grid". A responsive header, lets say.. a h2 has a font-size of 60px in the main design (1920px wide). This means that the h2 has a size of 0.75 grid. (60 / (1920 / 24))

The `h2` now will be exactly 60 pixels when the screen is 1920 pixels wide, and will scale up or down depending on the size of the screen. But at some moment, this will be too big, or too small. We can create media queries in order to create a minimum and maximum size, but calculating this exact width in pixels for the media query can be quite the hassle. Therefore we created two mixins to easily set a minimum size and a maximum size for the grids. 

the mixin:
```scss
@include min-([property],[set font-size in grid],[minimum font-size in pixels]);
```

example:
```scss
h2{
    font-size: grid(0.75);
    @include min-('font-size', .75, 30);
    @include max-('font-size', .75, 72);
}
```

the result:
```scss
h2 {
    font-size: 3.125vw;
}
@media only screen and (max-width: 960px) {
    h2 {
        font-size: 30px;
    }
}
@media only screen and (min-width: 2304px) {
 h2 {
    font-size: 72px;
    }
}
```

The min an max mixins work in the same way, only respond with a different media query (obviously).
