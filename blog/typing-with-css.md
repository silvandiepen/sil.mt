---
tags: custom properties, css, styling, sass, variables, typing
category: css
date: 2024-11-08
slug: typing-css
---

# Typing with CSS Custom Properties

CSS Custom Properties become even more powerful when combined with type definitions. The @property rule allows us to define exactly what kind of values our properties can accept, providing type safety and enabling new possibilities like animations and transitions.

### Basic Type Syntax

The `@property` rule has three required descriptors:

```css
@property --my-property {
    syntax: '<type>';        /* What values are allowed */
    initial-value: value;    /* Default value */
    inherits: true | false;  /* Whether it inherits from parent elements */
}
```

### Available Types and Their Uses

__Color Values___

```css
@property --theme-color {
    syntax: '<color>';
    initial-value: #0066cc;
    inherits: true;
}

.button {
    /* Will work */
    --theme-color: rgb(100, 120, 200);
    --theme-color: hsl(210, 50%, 50%);
    --theme-color: #ff0000;

    /* Will be invalid */
    --theme-color: 20px;  /* Wrong type */
    --theme-color: blue 20%;  /* Invalid syntax */
}
```

__Numeric Types

```css
/* Plain numbers */
@property --scale {
    syntax: '<number>';
    initial-value: 1;
    inherits: false;
}

/* Integers only */
@property --grid-columns {
    syntax: '<integer>';
    initial-value: 12;
    inherits: false;
}

/* Percentage values */
@property --opacity {
    syntax: '<percentage>';
    initial-value: 100%;
    inherits: false;
}
```

__Measurement Types__

```css
/* Lengths (px, rem, em, etc.) */
@property --spacing {
    syntax: '<length>';
    initial-value: 1rem;
    inherits: true;
}

/* Combined length and percentage */
@property --width {
    syntax: '<length-percentage>';
    initial-value: 100%;
    inherits: false;
}

/* Angles */
@property --rotation {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

/* Time values */
@property --duration {
    syntax: '<time>';
    initial-value: 300ms;
    inherits: false;
}
```

### Complex Syntax Patterns

__Multiple Types__

You can allow multiple types using the `|` operator:

```css
@property --size {
    syntax: '<length> | <percentage>';
    initial-value: 100%;
    inherits: false;
}

@property --border {
    syntax: '<color> | none';
    initial-value: none;
    inherits: true;
}
```

__Value Lists__

Use `#` for comma-separated lists and `+` for space-separated lists:

```css
/* Comma-separated color list */
@property --gradient-colors {
    syntax: '<color>#';
    initial-value: #000, #fff;
    inherits: false;
}

/* Space-separated lengths */
@property --shadows {
    syntax: '<length>+';
    initial-value: 0px 2px 4px;
    inherits: false;
}
```

### Practical Applications

__Animatable Properties__

One of the biggest benefits of typed properties is animation support:

```css
@property --card-hue {
    syntax: '<number>';
    initial-value: 200;
    inherits: false;
}

.card {
    background: hsl(var(--card-hue) 50% 50%);
    transition: --card-hue 300ms ease;
}

.card:hover {
    --card-hue: 300;  /* Will smoothly animate! */
}
```

__Component Type Safety__

```css
/* Define safe types for component API */
@property --button-padding {
    syntax: '<length>';
    initial-value: 1rem;
    inherits: false;
}

@property --button-radius {
    syntax: '<length-percentage>';
    initial-value: 4px;
    inherits: false;
}

.button {
    padding: var(--button-padding);
    border-radius: var(--button-radius);
}
```

__Theme System Type Safety__

```css
/* Define theme token types */
@property --primary-color {
    syntax: '<color>';
    initial-value: #0066cc;
    inherits: true;
}

@property --spacing-unit {
    syntax: '<length>';
    initial-value: 8px;
    inherits: true;
}

/* Use in components */
.card {
    --card-bg: var(--primary-color);
    padding: calc(var(--spacing-unit) * 2);
}
```

__Error Handling__

When invalid values are provided, the property falls back to its initial value:
```css
@property --size {
    syntax: '<length>';
    initial-value: 1rem;
    inherits: false;
}

.element {
    /* Will use 1rem instead */
    --size: invalid;
    width: var(--size);
}
```

__Registration in JavaScript__

You can also register properties in JavaScript:

```js
window.CSS.registerProperty({
    name: '--theme-color',
    syntax: '<color>',
    inherits: true,
    initialValue: '#0066cc'
});
```
This is useful for:

- Dynamic property registration
- Conditional registration based on browser support
- Generating properties programmatically

### Best Practices

#1 __Type Appropriately__

```css
/* ❌ Too restrictive */
@property --padding {
    syntax: '<length>';  /* Can't use percentages */
    initial-value: 1rem;
    inherits: false;
}

/* ✅ More flexible */
@property --padding {
    syntax: '<length-percentage>';
    initial-value: 1rem;
    inherits: false;
}
```
#2 __Consider Inheritance__

```css
/* Theme tokens should usually inherit */
@property --theme-color {
    syntax: '<color>';
    initial-value: #0066cc;
    inherits: true;  /* Can be overridden by parents */
}

/* Component-specific properties often shouldn't */
@property --button-size {
    syntax: '<length>';
    initial-value: 2.5rem;
    inherits: false;
}
```

#3 __Provide meaningful defaults__

```css
@property --border-style {
    syntax: 'solid | dashed | dotted';
    initial-value: solid;  /* Common default */
    inherits: false;
}
```


### Browser Support Considerations

Since `@property` isn't supported everywhere, consider fallbacks:

```
/* Fallback for browsers without @property support */
:root {
    --theme-color: blue;
}

@property --theme-color {
    syntax: '<color>';
    initial-value: blue;
    inherits: true;
}
```

### Conclusion

Type definitions for CSS Custom Properties bring us closer to true CSS APIs. They provide:

- Type safety
- Animation capabilities
- Better error handling
- Clear documentation of intended values

While browser support is still growing, they're a powerful tool for building more robust CSS architectures. Combined with thoughtful naming and scoping conventions, they help create maintainable, type-safe component systems.
Remember to balance type strictness with flexibility, and always consider fallback strategies for broader browser support.
