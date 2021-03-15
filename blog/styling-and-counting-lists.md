---
date: 2021-03-15
tags: css, list, styling
---

# Styling & Counting lists

Creating lists is a standard thing with html, you can either make then unordered `ul` or ordered `ol`. Which will by default give you a dash or a number in the beginning of your list. Many times, I don't want a list by default to look like it does. Therefore, we can style a list easily using css. Usually I would just hide the default `list-style-type` and add my own `::before` in front.

```css
ul, li{
  list-style-type: none;
}
ul li::before{
  content: "\2014"; // results in a —
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

```
ul li{  
  position: relative;
  padding-left: 2em;
}
ul li::before{
  position: absolute; 
  top: 0; 
  left: 0;
  content: "\2014";
}
```
Which will make it look like this;

<style>
ul.example-list2 li{
  position: relative;
  padding-left: 2em;
}
ul.example-list2 li::before{
  position: absolute; 
  top: 0; 
  left: 0;
  content: "\2014";
}
</style>
<div class="example2">
  <ul class="example2-list">
    <li>In hac habitasse platea dictumst. Curabitur blandit, arcu ac pellentesque scelerisque, nisi massa sagittis metus, in luctus velit purus vel purus. Nulla pellentesque vitae ante quis tristique. Sed at neque auctor, condimentum sapien nec, porta ipsum.</li>
    <li>Proin aliquam felis vitae elit hendrerit vulputate. In rhoncus auctor tincidunt. Suspendisse est turpis, semper in aliquet sit amet, porta vitae nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non hendrerit purus, sit amet porta turpis.</li>
    <li>Morbi maximus interdum suscipit. Duis consectetur viverra dapibus. Proin efficitur eget arcu vitae viverra. Cras eros velit, iaculis ac mi ac, aliquet bibendum sem. Sed erat mi, semper sed sagittis non, vulputate quis odio. Etiam vitae rutrum nisi. Aenean nisl libero, faucibus a quam vitae, bibendum malesuada neque. Cras lobortis vulputate eros in auctor.</li>
  </ul>
</div>



### Counting
