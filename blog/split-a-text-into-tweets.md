---
date: 2020-09-24
---

# Split a text into tweets

When creating a long text as an reply or a tweet on twitter, you can only use a fixed amount of characters (140 or some 280). It can be quite a hassle to split your text with a lot copy, pasting, checking, etc..

There are many solutions for this, other twitter clients, little tools, etc.. But as the developer I am, I created my own, because yeah, why not?

### The start

Since I'm a fan of Vue and havent really worked with Vue 3, I just used the [Vue CLI](https://cli.vuejs.org) to create a new project using TypeScript, Sass and some other things. I'm also not a big fan of bloating a project with all kind of extra packages, so if I can I will just use something small to get the same result. 

But watch out, this project is not made "good" in any way, it's just a really tiny project with works (for now) with code I'm not that proud of. It just shows that you don't need third-party code/packages for every little thing you want to achieve.

### What It should do.

Well, basically what it should have, is an input field for text. The text should be split into tweets of a maximum amount of characters. We can give it some more things, to make it easier to use.

features;
- Input long text, split into multiple tweets
- Be able to copy each tweet.
- Show which tweet is copied.
- When a tweet is copied, "disable" the editting of text, because it could change all tweets.
- When changing the text anyway, all tweets are "uncopied" again.
- Change the amount of maximum characters. Tweets can be 140 or 280 characters.
- Add an option to add numbering to the tweet like 2/4 tweets.
- Add an option to show where the numbering should be in the tweets, beginning or end.

### Split the tweets

What I did to split the tweets, is to get the full text, split the text into words (`const words = input.split(" ");`) and go through all words to create the tweets based on the maximum amount of characters.


```js

  const splitIntoTweets = (
      input: string,
      chars: number,
      numbering: boolean
    ): string[] => {
      const words = input.split(" ");
      const tweets: string[] = [];
      
      // Get either 5 (not many tweets) or 7 (many tweets) characters from the total for the numbering.
      const allowedLength =
        chars - (numbering ? (input.length > chars * 8 ? 7 : 5) : 0);

      let tweet = "";

      for (let i = 0; i < words.length; i++) {
        const newTweet = tweet + " " + words[i];

        if (newTweet.length > allowedLength) {
          tweets.push(tweet);
          tweet = words[i];
        } else {
          tweet = newTweet;
        }
        if (i + 1 === words.length) tweets.push(tweet);
      }
      return tweets;
    };
```

This function will be invoked every time the input text is changed.

### Copy the tweets

When you have the tweets, and you show them. You want to copy them. There a large libraries to do so, but in the end it's actually really simple. 

```js
const copy = (text: string, idx: number): void => {
  // We create a new input element
  const copyElement: HTMLInputElement = document.createElement("input");
  
  // Add the text which we want to copy to it.
  copyElement.value = text.trim();
  
  // Set the input element on the document
  document.body.appendChild(copyElement);

  // Select the content
  copyElement.select();
  copyElement.setSelectionRange(0, 9999);
  
  // Copy the content
  document.execCommand("copy");
  
  // And remove the element again.
  document.body.removeChild(copyElement);

  // Oh now we add the id of the tweet to a list of copied tweets. Just to show which ones are copied.
  state.copied.push(idx);
};
```

In the template we can now just put this on an element so when you click on the tweet, it will copy the text;

```html
<template>
...
  <ul v-for="(tweet, idx) in state.tweets" :key="idx">
    <li @click="copy(tweet, idx)">{{ tweet }}</li> 
  </ul>
...
</template>
```

### AutoResize the input text

The input text area has a AutoResize on it, that means that the input field just gets smaller and bigger when there is more text. Also for this you can install full libraries, but why would you if you can do it with a few lines of code?

```js
    const autoResize = (event: Event): void => {
      if (!event.target) return;
      (event.target as HTMLInputElement).style.height = "auto";
      (event.target as HTMLInputElement).style.height = `${
        (event.target as HTMLInputElement).scrollHeight
      }px`;
    };
```

and on the actual textarea, so it will just invoke the function every time you type.

```html
<textarea v-model="state.input" @input="autoResize" />
```

### The end.

These are some little functions which could have been solved in a way longer way with external packages, but in this case just with a few lines of code. If you want to see the full project you can check it out on [Github](https://github.com/silvandiepen/spleet) or the live project at [Spleet](https://spleet.sil.mt)



