---
date: 2019-01-05
tags: help, server, terminal
---

# Which server is it running on?

Sometimes you are in the need to check where a website is running. There are difficult ways and services which can help you with that, but its also built in to your system to check this.

```bash
curl -v https://silvandiepen.nl 22>&1 | grep -i server
```

To make this easy to use in your terminal, you can add this to your bash_profile:

```bash
server(){
    curl -v $1 2&gt;&amp;1 | grep -i server
}
```

Now you can just run:

```bash
server https://silvandiepen.nl
```
