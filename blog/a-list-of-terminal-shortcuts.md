---
date: 2020-07-02
---

# A list of terminal shortcuts

To make my life a lot easier, I have created a whole set of shortcuts which I regularly using while developing. Earlier I wrote about my 'go to repos' script [Easy find your repos...](https://blog.silvandiepen.nl/easy-find-and-navigate-to-a-repo-folder). But there are
way more little pieces of "gold" (according to me) in my bash file (currently actually `~/.zshrc`). 


### Application Shortcuts

Open up that application from your terminal.. 

```bash
chrome() { 
    open -a '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' "$@"
}
safari() { 
    open -a '/Applications/Safari.app/Contents/MacOS/Safari' "$@"
}
firefox() { 
    open -a '/Applications/Firefox.app/Contents/MacOS/firefox' "$@"
}
notes(){
    open -a '/Applications/Notes.app/Contents/MacOS/notes'
}
sketch(){
    open -a '/Applications/Sketch.app/Contents/MacOS/Sketch' "$@"
}
zeplin(){
    open -a '/Applications/Zeplin.app/Contents/MacOS/Zeplin' "$@"
}
slack(){
    open -a '/Applications/Slack.app/Contents/MacOS/Slack'
}
```


### NPM helpers

**Publish**
Publishing, because I always forget the public part.. 

```bash
npm:publish(){
    if [ $1 == 'public' ]; then
        npm publish --access=public
    fi
    if [ $1 == 'private' ]; then
        npm publish --access=restricted
    fi
    if [ $1 == 'dry' ]; then
        npm publish --dry-run
    fi
}
```

**Login** 
for when you have multiple accounts

```bash
npm:login(){
    if [ $1 == 'npm' ]; then
        if [ $2 == '[account1]' ]; then
            npm-cli-login -u [username] -p [password] -e [email]
        fi
        if [ $2 == '[account1]' ]; then
            npm-cli-login -u [username] -p [password] -e [email]
        fi
        if [ $2 == '[account2]' ]; then
            npm-cli-login -u [username] -p [password] -e [email]
        fi
        if [ $2 == 'who' ]; then
            npm whoami
        fi
        if [ $2 == 'config' ]; then
            npm config get registry
        fi
    fi
}
```

**Reinstall / Update** 
Sometimes it just doesn't actually reinstall, so throwing away a package and installing it works better..

```bash
npm:reinstall() {
    npm uninstall $@ && npm install $@
}
npm:update() {
    npm uninstall $@ && npm install $@
}
```

### GIT shortcuts

**Simplified commit with prefixes**

```bash
commit(){
    if [$1 == 'push']; then
        if [$2 == 'fix']; then
            commit:branch push "fix: $3"
        elif [$2 == 'wip']; then
            commit:branch push "wip: $3"
        elif [$2 == 'add']; then
            commit:branch push "add: $3"
        elif [$2 == 'feature']; then
            commit:branch push "feat: $3"
        else 
            commit:branch push "$2"
        fi
    elif [$1 == 'fix']; then
       commit:branch "fix: $2"
    elif [$1 == 'wip']; then
       commit:branch "wip: $2"
    elif [$1 == 'add']; then
       commit:branch "add: $2"
    elif [$1 == 'feature']; then
       commit:branch "feat: $2"
    else 
       commit:branch "$1"
    fi
}
```
example:
```
commit push fix "my message"

// results in a commit with message "fix: my message"
```



**Commit to a new branch**

```bash
commit:branch(){
    BRANCH_NAME=$(git symbolic-ref --short HEAD)
    BRANCH_NAME="${BRANCH_NAME##*/}"

    if [$1 == 'push']; then
        commit:add:pull:push "[$BRANCH_NAME] $2" 
    else 
        commit:add:pull "[$BRANCH_NAME] $1" 
    fi
}
```

example:
```
commit:branch "newbranch" 
```


**Commit, Add and Pull**

```bash
commit:add:pull(){
    git add . && git commit -am "$@" && git pull
}
```

example:
```
commit:add:pull "I fixed this really hard!" 
```

**Commit, Add, Pull and Push**

```bash
commit:add:pull:push(){
    git add . && git commit -am "$@" && git pull && git push
}
```

example:
```
commit:add:pull:push "I fixed this sooo hard!" 
```


**Add a remote**

```bash
git:remote(){
    git remote add origin $@ && git remote -v
}
```
example:
```
git:remote git:github.com/silvandiepen/newremote.git 
```


### Helpers 

**Trash it! not remove**

```bash
trash () {
    command mv "$@" ~/.Trash ;
}
```

example:
```
trash myfile.jpg 
```

**Create a Data URL**

Create a dataurl from an SVG so you can implement it in your stylesheet directly.

```bash
function dataurl() {
	local mimeType=$(file -b --mime-type "$1")
	if [[ $mimeType == text/* ]]; then
		mimeType="${mimeType};charset=utf-8"
	fi
	echo "data:${mimeType};base64,$(openssl base64 -in "$1" | tr -d '\n')"
}
```
example:
```
dataurl path/to/svg/file.svg 
```

**Setup a simple http server**

```bash
function server() {
    re='^[0-9]+$'
	local port="${1:-8000}"
    if [[ $i =~ $re ]] ; then
        port = $i;
    fi
	sleep 1 && open "http://localhost:${port}/" &
	# Set the default Content-Type to `text/plain` instead of `application/octet-stream`
	# And serve everything as UTF-8 (although not technically correct, this doesn’t break anything for binary files)
	python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "$port"
}
```
example:
```
server 
```

**Or one with php**

```bash
function phpserver() {
	local port="${1:-4000}"
	local ip=$(ipconfig getifaddr en1)
	sleep 1 && open "http://${ip}:${port}/" &
	php -S "${ip}:${port}"
}
```
example:
```
phpserver 
```


### Decode \x{ABCD}-style Unicode escape sequences
```bash
function unidecode() {
	perl -e "binmode(STDOUT, ':utf8'); print \"$@\""
	# print a newline unless we’re piping the output to another program
	if [ -t 1 ]; then
		echo # newline
	fi
}
```
example:
```
unidecode &
// result: 28243
```

### Get a character’s Unicode code point

```bash
function codepoint() {
	perl -e "use utf8; print sprintf('U+%04X', ord(\"$@\"))"
	# print a newline unless we’re piping the output to another program
	if [ -t 1 ]; then
		echo # newline
	fi
}
```

example:
```
codepoint a
// result: U+0061
```

### Aliasses

And last but not least, just a set of aliases. Shortcuts for common commands and some for some software.

```bash
alias npm:upgrade="ncu -u"
alias ..="cd .."
alias dev="npm run dev"
alias lintfix="npm run lint:fix"
alias stylefix="npm run stylelint:fix"
alias stylelint:fix="npm run stylelint:fix"
alias style:fix="npm run stylelint:fix"
alias stylefix="npm run stylelint:fix"
alias stylelint="npm run stylelint"
alias style="npm run stylelint"
alias DEV="npm run dev"
alias tower="gittower"
alias npmi="npm i"
alias npm:clean="rm -rf node_modules && rm -rf package-lock.json && npm install"
alias npmig="npm i -g"
alias grr="grunt"
alias run="npm run"
alias start="npm run start"
alias start:dev="npm run start:dev"
alias docs:dev="npm run docs:dev"
alias docs:build="npm run docs:build"
alias build="npm run build"
alias serve="npm run serve"
alias cleanup="find . -name '.DS_Store' -type f -delete"
alias pulsh="git pull && git push"
alias mkdir="mkdir -pv"
alias mk="mkdir -pv"
alias ps-grep="ps aux | grep"
alias remove="rm -rf"
alias ls="ls -aG"
alias lls="lls -latrG"
alias myip='curl ip.appspot.com'
alias editbash='code ~/.bash_profile'
alias editzsh='code ~/.zshrc'
alias code.='code .'
alias desktop="cd ~/Desktop"
```
