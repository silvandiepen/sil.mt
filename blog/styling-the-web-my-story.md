---
date: 2020-04-20
tags: styling, css, less, sass
---

# Styling the web, my story

Many years ago, I found Css. I was styling my html just with inline styles and thought that was it. My first impressions were “interesting”, but I was wondering why I would separate my markup from my styling. “That’s not handy at all, you need to have two files open at the same time”. That obviously change quite fast and I started to love css. 

### PHP Css preprocessor

In order to get some more repeating logic, I started to build my own “css preprocessor” in PHP, not because that was the best choice, but it was logical for me. I had a basic understanding of PHP and thought that was The serverside language go use at the time. I was creating stylesheets on the fly by writing PHP in my CSS files and adding css to my phpconfig to process css files along with .php, .php3, etc. It wasn’t the best solution, but it worked.


### LESS

Then I discovered Less, a “preprocessor” which gave me something I was trying to build for a long time already: “nesting”. I was in the gloria and really loved it. I wasn’t preprocessing my files, but really adding my ‘.less’ files in production and with a along with a less javascript compiler on the clientside. It took sometimes a little to see the css, but it worked. The solution to load custom fonts took longer anyway, so who cares?

Eventually I started precompiling my stylesheets, which did make the websites I made a lot faster. It took a little step, but how many times do you upload a new website to production anyway? Well, continuously, because developing we did on the ftp server directly in production anyway. Sometimes you make a copy, just in case something goes wrong.


### Sass 

But then along came Sass, I first didn’t like it at all, that had mainly to do with the syntax. The nice thing of LESS was that its practically css, with some syntactic sugar. The default way of writing Sass was the syntax without all the braces which took a bit to get used too.

```sass
.class
   border: 1px solid red
   width: 100%```

Scss was made for people like me, who weren’t a fan of the proposed simple syntax of Sass. And Scss was truely css with syntactic sugar. Valid css is also valid Scss! I more and more loved the language and started to create bigger and crazier things.

It went from using Sass where every developer had it’s own way of compiling, to compiling Sass on the server where we were working, all on our own branches named after ourself. Then together working on a develop branch but from our local machines.

> Did you commit already? I need that part what you are working on.

It actually worked quite ok, as long as everyone working on the same project commits often. But also that wasn’t ideal.

Anyway, we started using foundation in our projects. At first the full stack and hard styling against all css which came with it. I really didn’t like it and found ways to disable more and more of foundation, which in the end resulted in just using the grid system of foundation. Next to that, I already created a little stack of mixins, functions and base scss files which was copied and adjusted from project to project. 

That little stack grew out to be a full installable package completely replacing foundation without my coworkers actually noticing. So it was good and could be used in production.

This project grew and grew and with help of others this eventually became “Henri’s”. The company I was working at the time was called Matise, the name Henri’s was a little wink to that.

Now, Henri’s is being used by a few people. It’s open to anyone but writing good documentation and marketing a package has never really come from the ground. Currently I am working on a fully new version of the stack. Based on Henri’s, reusing lots of the logic but in a new format and as a more professional setup.

### Guyn

Guyn started as a little package just containing a set of colors. Working on many little projects, made me have to pick a new color palette every time, even though they are just my projects. They could share a set of colors. Guyn was born, a limited but versatile set of colors. 

Guyn also adopted the new styling package, called Guyn Style. Which is my newer version replacing Henri’s. Making Guyn more and more a set of frontend developer tools. 

### Design Systems

At the moment I’m working on my skills with Design Systems. Especially using Sass for styling and trying to keep the styling as good, sturdy, testable and multifunctional as possible. Styled Components or other CSS-in-JS technologies are the hot thing now, but personally not a fan. More about that in another post later. 
