---
date: 2019-06-25
---

# 6 ways to import components in a Vue/Nuxt project

After confusions, debates about whats best, trial and error, I've created a simple overview of how to import your components in Vue (Nuxt). Some ways are better then others, but it also completely depends on the purpose and where to use it.
These methods can be used in other Vue projects just as simple, besides the plugin one which would need a little different approach.

(2020 update: Go to point 5 if you are using Nuxt).

## 1. The Classic Way

**In your vue component:***

```js
import nameOfComponent from '~/components/nameOfComponent.vue';
export default{
    components: {
        nameOfComponent
    }
}
```
##### Pros

The component loads directly and will be directly visible. Also, the renderer will always render the component.

##### Cons

All components will be loaded directly, sometimes this means that components will be loaded and rendered while they are used (yet). This adds up to build and load time.

##### Usage

Components which are you main components, like navigation or things you for sure want to see on first load.

## 2. The Async Way

**In your vue component:**

```js
const nameOfComponent = () => import('~/components/nameOfComponent.vue');
export default{
    components: {
        nameOfComponent
    }
}
```

##### Pros

The component loads asynchronous, which means that the component won't be taken part in the load time and will only be loaded when actually necessary.

##### Cons

Not much, but it means that the component could be loaded a little later than load time, especially with heavy components. Using this method on components which should be loaded directly could make them to pop in. Which is something you don't want.

##### Usage

When you have components which are below the fold, components which don't have to be loaded directly to be able to use the website. Load these components asynchronous ("lazy") and the apps load time will get a lot shorter. When lazyloading the components, the website can jump, so avoid using this method for components which should be present directly.


## 3. The Plugin Way

**In your vue component:**


```
export default{
}
```

**Create a plugin js file** (ex. plugins/components.js)

```js

import Vue from 'vue';
import nameOfComponent from '~/components/nameOfComponent.vue';
const Components = {
    nameOfComponent
};
Object.keys(Components).forEach((key) =&gt; {
    Vue.component(key, Components[key]);
});
```

**In nuxt.config.js**

```js
plugins: [{  src: "~/plugins/components.js", ssr: true }]
```

##### Pros

The component will be loaded everywhere without having to declare it in the components. This means you can easily use it anywhere.

##### Cons

The component will be loaded everywhere, which means that all pages will be loading this component even when they don't use it. This increases the load time a lot.

##### Usage

When there are components which for sure will be used almost all through your app or website, like components for layout, grid, or buttons. These components you don't want to include everywhere and just be able to use everywhere. But be careful! <em>Try to avoid this method as much as possible.</em>

## 4. The Direct Way

**In your vue component:**

```js
export default{
    components: {
        nameOfComponent: () =&gt; import('~/components/nameOfComponent.vue');
    }
}
```

##### Pros

Easy syntax and easier to comment out. In a way it's the same as the "async" way but written shorter.

##### Cons

Not much, but it means that the component could be loaded a little later than load time, especially with heavy components. Using this method on components which should be loaded directly could make them to pop in. Which is something you don't want.

##### Usage

While debugging components, and you want to just turn off 1 component easily, this makes it for sure easier to comment out a component directly. Just the syntax alone,  make it shorter to read and clearer.


## 5. The Index Way

Especially when you have a very filled components folder, it can start to be a hassle. Tidying up in the form of folder structures is a good way to create a little bit transparency in the mess. But that also comes with a cost. In which folder lives my component again?
This I usually solve by creating a index file for my components. In that way, I can just import any component from the same folder.


**In your component older:**

Add all components to a index.js/ts.

**index.js**

```js
export * from './my-component-1.vue';
export * from './my-component-2.vue';
export * from './folder/other-components.vue';
etc...
```
In this way you can use all components in the following way;

**some-page.vue**
```
import { componentName, someOther } from '~/components';
```

##### Pros

- It structurizes your components and makes it easier to import components. 
- You can import all components within one line instead of several. 

##### Cons

- Importing a component in a component both in the components folder, can be a hassle. In that case you should still import them with the relative path.
- You have to add all components to index.js files

## 5. The New Nuxt Way

Since `Nuxt 2.13` you don't have to do imports anymore, Nuxt will resolve all components for you. So, you don't have to use any of the techniques above, but you can still use them in other Vue projects ofcourse.


### Conclusion

Every way has its pros and cons, some are better for performance, some for usability. In the end, it's best to judge every import by what way would be best to use.

- Import single components which should be loaded directly: 'The Classic Way'
- Import components which can be loaded later: 'The Async/Direct Way'
- Import component which will be used a lot through the app: 'The Plugin Way'

Do you care a lot about performance? Don't use the plugin way, but are you just prototyping and want to fix something fast. Just use it for all components.
