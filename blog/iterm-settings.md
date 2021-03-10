---
date: 2020-10-12
---

# iTerm Settings

Every time I set a new Mac up I forgot that what I actually did to my iTerm to make it work perfectly for me. That's why now, I write it down. Hope somebody else can do something with this too.

## Open every tab in the same folder as the current folder you are in.

That really frustrates me, I usually open a new tab in the same folder just to run another command or do something with the same project or atleast somewhere close by. So I prefer having the same folder to be used as the default new folder.

But for some reason I always tend to be searching for that option. So here it is;

```iTerm > Preferences > Profiles```

And then under "Working Directory" just check "Reuse previous session's directory". 

## Change the prefix

The default prefix always has way too much information for me. You know, that part which iTerm will show you on every new line. So I've created my own which will just show the current folder I am in.

```
export PS1='%F{blue}%1d%f %F{green}➔%f '
```

<div style="display: inline-block; padding: 1em; background: #101010; color: white; font-family: Monospace; border-radius: 0.5em">
<span style="color: rgba(125,125,255,1)">my-folder-name</span><span style="color: rgba(0,255,100,1)"> ➔ </span>Your command
</div>

There are way more options which you can use to customize this. AS few of those;

| string | description |
|---|---|
| %@ | current time (4:13PM) |
| %t | current time (4:13PM) |
| %T | current time (16:13) |
| %1d | current folder capped to 1 (number can be changed) |
| %d | full path |
| %n | login user |
| %w | date; Fri 25 |
| %W | date; 09/25/20 |
| %m | machine name [name] |
| %M | Machine name [name].local |
| %~ |gives the path relative to HOME |


## Set the tabname in iTerm

I'm using iTerm day in day and I have the tendency to just keep opening tabs. Sometimes I have no idea what the tab does and I just keep click on all tabs to find the right one. Now I made myself just name the tabs when I open them. That can be done if you add this little function to your `~/.zshrc` or `~/.bashrc` and just type in `tabname [thenameyouwant]` in your tab. iTerm will change it's name :). Just using 'tabname' as a command, will set the current foldername as your iTerm tab.

```
tabname(){
    if [ -z $@ ]
        then
        dir=${PWD##*/}
        echo -n "\033]0;${dir}\007"
    else
        echo -ne "\033]0;"$*"\007"
    fi
}
```
