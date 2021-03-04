---
date: 2020-12-02
---

# CSS Custom Property inheritance caveat

Custom properties are great, but they don't always do what you expect them to do. Like if the property is not defined, standard css will fallback to it's parents properties. In the case of css custom properties, this won't happen. They have an automatic fallback to none. So if the property is not defined, it won't fallback automatically to the parents value. What you need to do, is manually add the fallback for custom properties.

An example in code;
```css
body {
	font-family: sans-serif;
}

/* Would usually just inherit from the body */
.element {
}
/* But when you define a font family, it will overrule. */
.element {
	font-family: 'Lala';
}

/* If you define it with a custom property, will do the same. */
.element {
	--my-font-family: 'Lala';
	font-family: var(--my-font-family);
}

/* But if you don't define the custom property */
.element {
	font-family: var(--my-font-family);
}
/* The font-family won't fall back to the body, or another parent. But will fallback to none. Thus it will fallback to 'serif' probably.
*/

/* So what we need to do is to define a fallback on a custom prop, to make sure it will fallback to a 'sans-serif'
*/
.element {
	font-family: var(--my-font-family, sans-serif);
}
```

When you are using non-webfonts, make sure you will always fallback to a webfont too. Otherwise, if the font does not exists, it also won't fallback to the body, but to 'serif'.

```css
.element {
	font-family: var(--my-font-family, 'MyCustomFont, helvetica, sans-serif');
}
```

