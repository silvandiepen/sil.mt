# CSS Inset

When it comes to defining box sizing in CSS, we're all familiar with the traditional
approach using `top`, `left`, `right`, and `bottom` properties. However, this can become
cumbersome and repetitive, especially when working with complex layouts.

## Enter CSS Inset

CSS Inset is a shorthand property that allows us to define box sizing in a more concise and
efficient way. Instead of setting each edge individually, we can use the `inset` property
followed by values for the top, right, bottom, and left edges.

### Syntax

```css
.inset {
  inset: <top> <right> <bottom> <left>;
}
```

### Example
```css
.box {
  display: block;
  width: 200px;
  height: 100px;
  background-color: #f2f2f2;
  inset: 10px;
}

/* equivalent to */
.box {
  display: block;
  width: 200px;
  height: 100px;
  background-color: #f2f2f2;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
}
```

### Benefits

Using CSS Inset offers several benefits, including:

- **Simplified code**: No more repetitive setting of `top`, `left`, `right`, and `bottom`
properties.
- **Improved readability**: The concise syntax makes it easier to read and understand the
code.
- **Flexibility**: You can mix and match values for each edge as needed.

### Browser Support

CSS Inset is supported in all modern browsers, including Chrome 49+, Firefox 66+, Safari
11.1+, Edge 16+, and Opera 48+.

In conclusion, CSS Inset provides a more efficient way to define box sizing, making your
code simpler, more readable, and flexible. Give it a try and enjoy the benefits of this
modern CSS feature!
