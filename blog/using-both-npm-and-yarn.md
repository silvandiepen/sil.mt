---
date: 2020-09-25
---

# Using both npm and Yarn

Personally, I like to use npm, I don't really see a good reason why I would use Yarn. It could be faster, but I don't really feel it. So in all my personal projects I just use npm, but at my work, we use yarn. 

In some way I tend to keep using npm and it will create a `package-lock.json` file which could be added to the `.gitignore` but still. It give more complications than just that. So I need to force myself into using Yarn, which I am not a fan of.

So after years of thinking about doing it, I finally made a little script which just detects if the projects has a yarn.lock file and if so, it will use Yarn instead of npm.

```bash

alias serve='run serve'
alias dev='run dev'
alias start='run start'
alias build='run build'

function install() {
    if [ isYarn() ]; then  
        if [ -z $a]; then   
            yarn
        else
            yarn add $@
        fi
    else 
        npm install $@  
    fi    
}
function remove() {
    if [ isYarn() ]; then  
        yarn remove $@
    else 
        npm install $@  
    fi    
}

function run() {
    if [ isYarn() ]; then   
        npm run $@
    else    
        yarn $@ 
    fi
}

function isYarn() {
  if [ -e yarn.lock ]; then
    echo "using Yarn"
    return true
  else
    echo "using npm"
    return false
  fi
}
```

Now I can just run `build` in my terminal and the terminal will figure out what to use. I actually had these commands in the aliases already, but just like `alias build=npm run build`. Which ofcourse, only works for projects using npm. Now I can just run the same command and not think about what to use.

| command | execute |
|---|---|
| `build` | `yarn build` or `npm run build` |
| `dev` | `yarn dev` or `npm run dev` |
| `serve` | `yarn serve` or `npm run serve` |
| `start` | `yarn start` or `npm run start` |
| `run [command]` | `yarn [command]` or `npm run [command]` |
| `install [command]` | `yarn add [command]` or `npm install [command]` |
| `install`     | `yarn` or `npm install` |
| `remove [command]` | `yarn remove [command]` or `npm uninstall [command]` |
