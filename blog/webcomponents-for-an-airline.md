---
date: 2020-02-02
tags: designsystem, component, react, story
---

# Building a Design System for an airline

For the last few months I have been working on a Design System for an airline in the Netherlands. This airline does have a pretty good website. Overall, their design is well implemented, but there was no real source of truth.

The current stack of the website is completely running in Sitecore, which also means the full frontend is built using [Sitecore](https://www.sitecore.com/). This is not ideal for neither developers nor business. The airline decided to convert the stack, page by page to a setup using NextJS.

When I started there was a package which was being used with several React components. This package contained anything from small to very huge components. But it was lacking documentation. With my experience with Design Systems, I proposed to separate the logical components with lots of business logic and the “dumb” components.

> **Dumb components.**
> A component which does not have any specific business logic and just displays what it’s been given.

This idea was well understood and other developers liked the idea. Now it was time to involve designers. Because in my opinion a good Design System is not only a system which is made by and for developers.

> A Design System is for everyone, not only developers or designers.

### What is a Design System?

There are many opinions and implementations of Design Systems. In it's core a Design System is a platform which holds all designed components together. This can be either just designed components or also actual built and ready to implement components.

In my opinion, a Design System is the latter. Which means that a Design System is a platform and a package with good visual documentation of all designed components which are fully implementable by developers in the projects which it's meant for. This can be an app or website or preferably even both.

Some good examples of good Design Systems are;
[Material - Google](https://material.io/design/)
[Carbon - IBM](https://www.carbondesignsystem.com/)
[Fabric (Microsoft)](https://developer.microsoft.com/en-us/fabric#/)
more here; [Design Systems Repo](https://designsystemsrepo.com/design-systems/)

## The framework

Over the last few years I have worked with many js frameworks. AngularJS, Vue, some React but my preference by far lays with Vue. Easy to jump in and I'm a fan of using near vanilla code. For JavaScript, css and html. Vue allows me to write vanilla code, which makes developing fun! When I started at the airline they told me they didn't decide on any framework yet, so I thought I could maybe help in making that decision. Unfortunately when I started the decision was already very much made. It was going to be React. Some parts of the website were already made using React. Why they chose react wasn't completely clear to me, "Because 2 years ago we decided so". Well yeah, you can't always have what you want. So I started learning some more about React.

But that doesn't mean the Design System should be done with React. Using Vue would maybe not be the best idea. Combining Vue with React is everything but ideal. Luckily, there is another contender which actually works great with almost all frameworks. And most frameworks actually do have good integrations for it; "Web Components".

I had heard of them, know what they could do, but never actually really played around with Web Components. So now was my chance. I started investigating building Design Systems with Web Components. I asked colleagues who had experience using Web Components in other environments and it looked like a serious option. I came by Stencil and it looked perfect.

So I used Stencil to create a POC (proof of concept) containing some simple components. I also implemented the component into [Angular](https://stencil-test-angular.svd.im), [Vue](https://stencil-test-vue.svd.im), [React](https://stencil-test-react.svd.im) and [React with Typescript](https://stencil-test-react-ts.svd.im). The Angular and Vue version were the easiest, they practically worked out of the box. The React version was a little more of a fight, which I needed to win because I had to show the proposal soon. So it had to work in React!

#### The decision

The POC was good and showing it to other developers was a good experience, overall my colleagues were positive. There were only a few concerns;

**"But we know React.."**
Yes, but other people also know other frameworks too, it's never bad to learn something new. Besides that, Stencil works with JSX and Typescript. That should be familiar to y'all.

**"Web components are not mature enough"**
This was an argument which I hardly wanted to get back into. Yes they are, they have been used by many big companies in production.

**"But we use only React"**
Actually, we don't. The two teams for now are using React, yes. But other teams might want to use other frameworks. Why not make something which fits everybody. Also, the current stack is Sitecore, so we could even use the Web Components in the old stack. Since Web Components are framework agnostic. Which makes it easier to update older pages without having to completely rebuild them in the new stack. This was waved away with; "The old stack is not going to be used anyway anymore, so we shouldn't think about the old stack". I know for a fact that was not going to be true, but ok.

##### React

Half the team was kind of in favor, but unfortunately after a vote we went for React. My new challenge; "How to build a Design System using React" :)

## Where to start?

I'm not the first one starting to build a Design System, there are actually many systems which provide all kind of tooling to build a Design System. We just had to figure out which was the best for what we actually try to accomplish.

There were several conditions.

1. The Design System should be friendly for everyone
2. The Design System should ready for Open Source
3. The Design System should be written in React
4. The Design System should be incorporated with the current Design tools
5. The Design System should be well maintained and updated
6. The Design System documentation should be branded

These conditions all had their own things.

**1. Friendly for everyone**
Which means that not only developers but also designers and other people should be able to work with it. There are amazing tools like Storybook, but they all involve some coding skills to actually write any documentation. Preferably, the system should allow creating pages using the **Markdown** format.

**2. Ready for Open Source**
For internal use the documentation has to be good. It needs to be even better if it’s being shown to the whole world. That means that we should write documentation not assuming that everyone understands everything about the code, the usage and the company. Write documentation with people in mind who have no idea what the company is about.

Also the code should be written well, after all, it's been shown to everybody. So better write something good which other people can take an example of.

**3. Written in React**
The system should support React components, either out of the box or with plugins. Preferably the Design System documentation should be able to use the components for its own UI. That's of course the best way to test the component you are building and to show how it will look in a real-world environment.

**4. Design Tools**
Preferably the system should have an integration for tools like Abstract, Sketch and/or Zeplin. So we can link actual built components to the designed ones. Which means it's easier to compare and as well developers and designers can use the Design System for reference and get their usuable components from once source of truth.

**5. Maintenance**
In order to build something which will be maintained and not be left alone in a corner. Which will be the tool to actually make the components and not just move them too. The DX should be good and easy. It should be easy to set up the system and ship new components and features.

**6. In style**
The Design System documentation should fit with the brand. When looking through it, you should directly understand that it's a part of the brand. Because most developers prefer working with Sass, not CSS-in-JS or other options, it's preferred that the documentation also makes use of Sass. This will also make it easier to create a big stylesheet from all components which can be used in other, non-react environments.

## The Environment

After all decisions made about which tools to use and what the stack should look like. There was one more major decision to make. _"Which development environment are we going to use?"_ Obviously, there was only one way to find out. Just by trying them all. Or at least, the biggest ones.

**Storybook**
_pro:_ Storybook is great, and widely used. It will be a good platform since it has a lot of people working with it.
_con:_ Pages are mainly made using code. Which makes it harder to use for everyone else besides developers.
_con:_ Styling Storybook is limited.
~~#Friendly~~ #OpenSource #React ~~#DesignTools~~ ~~#Maintenance~~ ~~#InStyle~~ score: 2/6

**Styleguidist**
_pro:_ Styleguidist is simple, it uses markdown for documentation and is widely used.
_con:_ Styling Styleguidist is limited, unless you alter source files. So.. half bad.
~~#Friendly~~ #OpenSource #React ~~#DesignTools~~ #Maintenance ~~#InStyle~~ score: 3.5/6

**Docz**
_pro:_ Written on top of Gatsby, lightweight and simple.
_con_: Unfortunately not very customisable.
_con_: Doesn't feel mature.
_con:_ Styling Docz is limited, unless you alter source files. So.. half bad.
~~#Friendly~~ #OpenSource #React ~~#DesignTools~~ #Maintenance ~~#InStyle~~ score: 3/6

They all had there pro's and cons. But in the end, Styleguidist seemed the best for what we wanted to accomplish. And to write something from scratch would take too much time. So **Styleguidist** it was.

## Start!

So now it was time to actually start building. There was a js framework, an environment. Git was setup and there was a little example. Now just start writing the components and have it working in an actual project.

Since we were working on a new feature in the website which was completely getting build in NextJS. That was the ideal situation to test it in. For this feature we had to build the full page over, since it would be the first NextJS living in between the booking flow. There were quite some struggles to conquer to actually get a complete different page working in between a booking flow within Sitecore, but that didn't have any influence on the Design System.

So, to create the full page quite some components needed to be rebuild, since reusing them from the current website was not an option. Also, some components were very much due to have a little refresh. Together with the design team we made a list of components which needed to be made, either completely new or just based on the old versions.

- **A simple Header**, the header in the booking flow doesn't have a menu, just a logo and a title.
- **Footer**, the footer isn't very complicated visually. The main challenge is to get little elements from a sitecore api to be working within this footer component. Which just accepts a list of items with titles.
- **Panel & Blocks**, several reusable building blocks needed to be made. From a background, to the components having icons.
- **Icons**, all Icons have their own component. Since it was quite a large set of icons I created a tool which automatically converts SVG icons into React icons with the right props so they can be used easily in other components or separately.
- **Button**, well yeah.. buttons for everyone! Buttons everywhere...
- **Form elements**, luckily the page didn't include many form elements. The current page only holds a checkbox. So that was the main priority, but along the way another team also started to use the Design System. They needed a little more basic form elements like a text input, a select and all with their different states and icons.

All and all, there were quite some components to be built for the first workable version. But that's ofc ourse a nice challenge too.

A few months in, working 32h a week for me + the help of several other developers and there is a working version which is fully implementable. But then...

## An unfortunate event..

I'm sorry. I can't really show you anything made. This is because Corona unfortunately killed my project for now which means the Design System as it is now, has been set on hold and won't be developed until further notice...

## The current status

At the moment, there is an implementable Design System which can be installed from a package which is living in the Azure Artifacts of the Airline. It currently provides all the UI elements for two projects which have been put on hold but they are both about to be finished whenever the airline can start up the business again.

A third project has been setup and will likely be used soon because it's made for vouchers. I set up this project within a day to show how easy it now is with a working Design System to create something fully visual with reusable components.

So lots of things are not finished yet, the design tools aren't integrated yet, the project is not launched for open source yet and nothing is actually public. Let's hope this won't be the end...

## Current Stack

- **React**
- **Sass** (Reusable in other type of projects)
- **Typescript**
- **Rollup** (Building of components for package)
- **Webpack** (documentation)

Extra tools;

- **[Stylelint](https://stylelint.io/)** + [stylelint-logic-order](https://css-order.svd.im)
- **[icon-components](https://www.npmjs.com/package/icon-components)** (to build icons from svg to react)
