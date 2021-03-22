---
date: 2021-03-15
tags: css, list, styling
---

# Styling and Counting lists

<style>
  ul[class^="example"] li { margin: 0.5em 0;}
</style>

Creating lists is a standard thing with html, you can either make then unordered `ul` or ordered `ol`. Which will by default give you a dash or a number in the beginning of your list. Many times, I don't want a list by default to look like it does. Therefore, we can style a list easily using css. Usually I would just hide the default `list-style-type` and add my own `::before` in front.

```css
ul, li{
  list-style-type: none;
}
ul li::before{
  content: "\2014"; 
  /* results in a — */
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

But what, if your list will have really long items?

<div class="example">
  <ul class="example-list">
    <li>In hac habitasse platea dictumst. Curabitur blandit, arcu ac pellentesque scelerisque, nisi massa sagittis metus, in luctus velit purus vel purus. Nulla pellentesque vitae ante quis tristique. Sed at neque auctor, condimentum sapien nec, porta ipsum.</li>
    <li>Proin aliquam felis vitae elit hendrerit vulputate. In rhoncus auctor tincidunt. Suspendisse est turpis, semper in aliquet sit amet, porta vitae nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non hendrerit purus, sit amet porta turpis.</li>
    <li>Morbi maximus interdum suscipit. Duis consectetur viverra dapibus. Proin efficitur eget arcu vitae viverra. Cras eros velit, iaculis ac mi ac, aliquet bibendum sem. Sed erat mi, semper sed sagittis non, vulputate quis odio. Etiam vitae rutrum nisi. Aenean nisl libero, faucibus a quam vitae, bibendum malesuada neque. Cras lobortis vulputate eros in auctor.</li>
  </ul>
</div>

It will look very weird. So what we can do is go a little further;

```css
ul li{  
  position: relative;
  padding-left: 2em;
  display: block;
}
ul li::before{
  position: absolute; 
  display: block;
  top: 0; 
  left: 0;
  content: "\2014";
}
```
Which will make it look like this;

<style>
ul.example-list2 li {
  display: block;
  position: relative;
  padding-left: 2em;
}
ul.example-list2 li::before{
  position: absolute; 
  top: 0; 
  left: 0;
  content: "\2014";
  display: block;
}
</style>

<div class="example2">
  <ul class="example-list2">
    <li>In hac habitasse platea dictumst. Curabitur blandit, arcu ac pellentesque scelerisque, nisi massa sagittis metus, in luctus velit purus vel purus. Nulla pellentesque vitae ante quis tristique. Sed at neque auctor, condimentum sapien nec, porta ipsum.</li>
    <li>Proin aliquam felis vitae elit hendrerit vulputate. In rhoncus auctor tincidunt. Suspendisse est turpis, semper in aliquet sit amet, porta vitae nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non hendrerit purus, sit amet porta turpis.</li>
    <li>Morbi maximus interdum suscipit. Duis consectetur viverra dapibus. Proin efficitur eget arcu vitae viverra. Cras eros velit, iaculis ac mi ac, aliquet bibendum sem. Sed erat mi, semper sed sagittis non, vulputate quis odio. Etiam vitae rutrum nisi. Aenean nisl libero, faucibus a quam vitae, bibendum malesuada neque. Cras lobortis vulputate eros in auctor.</li>
  </ul>
</div>



### Counting

But what, if you have your `ordered-list`, how would you do that? You can't just add a before with a 1. It will give every item a 1. 


```css
ol, ol li{
  list-style-type: none;
}
ol li::before {
  content: "1";
}
```

<style>
ol.example-list3, ol.example-list3 li { list-style-type: none; }
ol.example-list3 li::before{ content: "1"; }
</style>

<div class="example">
  <ol class="example-list3">
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ol>
</div>

That's where the counter comes in!

```css
ol{
  counter-reset: my-list;
}
ol li {
  counter-increment: my-list;
}
ol, ol li{
  list-style-type: none;
}
ol li::before {
  content: counter(my-list);
}
```
<style>
ol.example-list4,
ol.example-list5{
  counter-reset: my-list;
}

ol.example-list4 li, 
ol.example-list5 li {
  counter-increment: my-list;
}

ol.example-list4, 
ol.example-list4 li,
ol.example-list5, 
ol.example-list5 li{
  list-style-type: none;
}

ol.example-list4 li::before {
  content: counter(my-list);
}
ol.example-list5 li::before {
  content: counter(my-list)".";
  font-weight: bold;
  text-transform: rotate(2deg);
  padding: 0.5em; 
  background-color: red; 
  color: white; 
  border-radius: 0.5em
}
</style>

<div class="example">
  <ol class="example-list4">
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ol>
</div>

And if you want, you can even style your number a bit;

```css
ol li::before{
  content: counter(my-list)'.';
  font-weight: bold;
  text-transform: rotate(2deg);
  padding: 0.5em; 
  background-color: red; 
  color: white; 
  border-radius: 0.5em;
}
```

<div class="example">
  <ol class="example-list5">
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ol>
</div>


