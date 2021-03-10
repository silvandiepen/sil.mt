---
date: 2020-06-07
tags: design system, ideal, developer, designer
---

# Design Systems in an ideal world

Let's first dive into what a Design System is, in the wide open world of the internets there are mainly two kinds of Design Systems;

## The Designer Design System

A design system which holds all designed components made by designers. This has documentation about how the components should be implemented and sometimes has code examples of what it should look like.

_pros_

- All components in the DS have the latest design.
- Designers happy

_cons_

- The design system is not a representation of the components used in the actual app or project.
- When the design system is updated, developers off all projects need to update their components with the last visual changes.
- New changes can be really small and not getting picked up by developers.
- Designed components can be designed, but impossible to create in actual workable code. This results in the first point of cons.
- Developers sad

## The Developer Design System

A design system made by developers who got the designs van designers and implemented these into the design system. All components build are completely functional and can be installed in projects or apps.

_pros_

- All components in the design system, are the actual components used in live projects.
- When a components is updated, all projects can be easily updated with an upgrade of the Design System package.
- Developers happy

_cons_

- Components in the Design System can look different from the designs.
- Getting a component into the design system can cost quite some time from a designers perspective a designer.
- Designers sad

## The Ideal Design System

An ideal Design System is a continuous collaboration between developers and designers. They work together, hand in hand and the Design System is the main source of truth for all sides.

![image alt](https://s3.eu-central-1.amazonaws.com/cdn.silvandiepen.nl/img/design-dev-flow.png)

### Design

The usual design flow is separated in a UX flow and a UI flow. To make it a little more understandable we will talk about teams.

- #### UI Design Team

  The UI Design team is responsible for the design of the components. Every component will be designed and delivered to the development team. Once a component is built and accepted by the UI Team, the component is final and is visible in the master Design System.

- #### UX Design Team
  The UX Design team is responsible for the flow in the projects, they decide how a page is build up and which components will be used. The UX team create mockups or designs completely based on the latest version of the Design System

### Development

When a Design System developer gets a component from a UI designer, the component is inspected and when agreed on functionality built in the Design system. Once the developer is done, the component is deployed to the Design System in development environment. The Design System Developer alerts the UI designers that the component is built, and awaits approval or feedback.

### Key Features

The ideal Design System has a few key features which are very important to keep the Design System alive and keep all parties happy.

1. #### Easy write documentation

   The documentation is easy to update and write for both developers And designers.

2. #### All files combined documented

   A component is documentated for both design and development together. Designers and Developers can find how to use and include the document in their work.

3. #### Component comparison

   Components design and built can be easily compared because both files are included. This makes it easy for the UI designer to check if the component is been built like intended.

4. #### Installable package

   The Design System is an installable package which can be installed in a codebase. Every component can be easily included in the project and used.

5. #### Framework Agnostic

   A Design System is built framework agnostic, this makes it useful for as many projects as possible. When a company grows and multiple teams built multiple functionalities for the company. You can't make every team use the same technologies. The ideal Design System can be used by teams who use React, Vue, Angular or no Javascript framework at all.

6. #### Accessibility

   Always build any component with accesibility in mind. Even when a design system is just used for internal use in the company, Accessibility is important and when done properly, not hard.

7. #### Cross Contamination
   The Documentation for the design system and it's UI is entirely build using it's own Design System. The Documenation is the ultimate developer playground and testground for the components.

### Framework Agnostic Approaches

The Framework agnostic approach is recommended but not in all cases applicable. When a company decided on fully use React. Building the Design System using React might be the most logical choice. Otherwise;

1. #### Styling only

   In order to create a framework agnostic Design System there are multiple ways to go. In some cases it is possible when there is hardly any logic in components, to built all components just using html and css. In this case it should work in all different scenarios.

2. #### Web Components

   Another approach when logic is needed, is to go for Web Components. Web Components work with any framework and can be included in many legacy projects by just adding a few lines of code.

3. #### Use a JS framework
   When the components need a lot of logic or state, components built in Web Components might not be the best choice. First you should think about the fact if these highly depending components actually belong in a Design System or if they should be living in a shared Logic Component Library. But building components using frameworks can also be for stability reasons and easy implementation.
   - #### Styling only
     In that case to keep the Design System semi-framework agnostic, it is possible to separate the styling from the components or to build an extra export of the styling. In that case the styling can still be used in other projects with the right html build up.
   - #### Build 'm all!
     Or build every component in every framework needed. That is the most stable way of building components, style and html can be reused and sometimes even used from the same files. But, this does make the process of creating a component longer and could be less ideal when new features need to be delivered asap. When this approach is chosen it is highly recommended to not accept a component for production when not all frameworks are finished. Otherwise this could be forgotten and won't be finished at all until needed.

### Techniques to use

With some experimentation and experience building Design System I have seen a lot coming by. Saas solutions for Design Systems and many frameworks to build design Systems in. My preference would always be to build something on top of a framework to give you a helping had. Saas solutions won't let you alter the UI besides a few colors, which is not stroking with [_7. Cross Contamination_](#Cross-Contamination).

A few of my preferences;

- #### Documentation with Markdown

  Markdown to write the documentation. Markdown is simple and easy to use for everyone. A standard when it comes to documentation with clean stylable output.

- #### Building with Rollup
  Rollup is a small library to build the dist files for the package. It accepts all frameworks and has many posibilities to alter things. Also to create multiple outputs for different purposes.
- #### Sass
  Eventhough there a many ways you can style nowadays. My preference will be Sass or maybe even just plain ol' Css. This because it can be used any project and separates the logic or framework from the styling. They shouldn't be together too much.
- #### StencilJS
  Stencil is a framework to build Web Components and is mainly focussed on building Design Systems. They specialize and have all kinds of solutions to get the Web Components working in other JS frameworks or non-js-framework websites.

### Open Source

Open Source will be and is a very good source of knowledge, almost everything has been done and everything can be built on ideas of others and solutions other people created. Don't always try to invent the wheel, use what's out there. But also give back, publish the design system out in the open, so others can learn from your work. A Design System should have business logic, so opening it up to the world, can't harm anybody. Many other companies did the same.

## Conclusion

This is how I see the ideal Design System. That doesn't mean that every design system should be built this way. Every company is different and has different needs. If for instance the whole company agrees upon React, building the Design System using react would be a logical choice. This avoids complication and could probably make it easier and faster to develop. Also, some companies are way less dependent on designers and will just let the Design System Developer create the design system based on something else. In that case the flow `Design > Development > Design` is not applicable.

If you would ask me, what is the best design System out there? I honestly wouldnt know. I havent seen any Design System which includes all my key features and thus is perfect. Even I, havent made my perfect Design System yet, but I would love to do so.
