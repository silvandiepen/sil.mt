---
date: 2020-09-25
---

# Using npm, Yarn or pnpm

Personally, I like to use npm, I don't really see a good reason why I would use Yarn. It could be faster, but I don't really feel it. So in all my personal projects I just use npm, but at my work, we use yarn. 

In some way I tend to keep using npm and it will create a `package-lock.json` file which could be added to the `.gitignore` but still. It give more complications than just that. So I need to force myself into using Yarn, which I am not a fan of.

So after years of thinking about doing it, I finally made a little script which just detects if the projects has a yarn.lock file and if so, it will use Yarn instead of npm.

```bash

alias serve='run serve'
alias dev='run dev'
alias start='run start'
alias build='run build'

function isYarn() {
    if [ -e yarn.lock ]; then
        return
    fi

    false
}
function isPnpm() {
    if [ -e pnpm-lock.yaml ]; then
        return
    fi

    false
}
function isNpm() {
    if [ -e package-lock.json ]; then
        return
    fi

    false
}

function run() {

    if isYarn; then
        echo "running ${bold}${@}${normal} using ${bold}Yarn${normal}"
        yarn $@
    fi

    if isPnpm; then
        echo "running ${bold}${@}${normal} using ${bold}pnpm${normal}"
        pnpm run $@
    fi

    if isNpm; then
        echo "running ${bold}${@}${normal} using ${bold}npm${normal}"
        npm run $@
    fi
}

function install() {

    if isYarn; then
        if [ -z $a]; then
            echo "Installing packages using ${bold}Yarn${normal}"
            yarn
        else
            echo "Installing ${bold}${@}${normal} using ${bold}Yarn${normal}"
            yarn add $@
        fi
    fi

    if isPnpm; then
        if [ -z $a]; then
            echo "Installing packages using ${bold}Yarn${normal}"
            pnpm install
        else
            echo "Installing ${bold}${@}${normal} using ${bold}pnpm${normal}"
            pnpm install $@
        fi
    fi

    if isNpm; then
        if [ -z $a]; then
            echo "Installing packages using ${bold}Yarn${normal}"
            npm install
        else
            echo "Installing ${bold}${@}${normal} using ${bold}pnpm${normal}"
            npm install $@
        fi
    fi
}
function remove() {
    if isYarn; then
        echo "Removing ${bold}${@}${normal} using ${bold}Yarn${normal}"
        yarn remove $@
    fi

    if isPnpm; then
        echo "Removing ${bold}${@}${normal} using ${bold}pnpm${normal}"
        pnpm uninstall $@
    fi

    if isNpm; then
        echo "Removing ${bold}${@}${normal} using ${bold}npm${normal}"
        npm uninstall $@
    fi
}

function showPackageManager() {

    bold=$(tput bold)
    normal=$(tput sgr0)

    if isYarn; then
        echo "package manager: ${bold}yarn${normal}"
    fi
    if isPnpm; then
        echo "package manager: ${bold}pnpm${normal}"
    fi
    if isNpm; then
        echo "package manager: ${bold}npm${normal}"
    fi
}

showPackageManager
```

Now I can just run `build` in my terminal and the terminal will figure out what to use. I actually had these commands in the aliases already, but just like `alias build=npm run build`. Which ofcourse, only works for projects using npm. Now I can just run the same command and not think about what to use.

| command | execute |
|---|---|
| `build` | `yarn build`, `npm run build` or `pnpm run build` |
| `dev` | `yarn dev`, `npm run dev` or `pnpm run dev` |
| `serve` | `yarn serve`, `npm run serve` or `pnpm run serve` |
| `start` | `yarn start`, `npm run start` or `pnpm run start` |
| `run [command]` | `yarn [command]`, `npm run [command]` or `pnpm run [command]` |
| `install [command]` | `yarn add [command]`, `npm install [command]` or `pnpm install [command]` |
| `install`     | `yarn`, `npm install` or `pnpm install` |
| `remove [command]` | `yarn remove [command]`, `npm uninstall [command]` or `pnpm uninstall [command]` |
