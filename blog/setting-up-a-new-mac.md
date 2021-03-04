---
date: 2020-09-21
---

# Setting up a new Mac.

Well, this is mainly an article for myself. After having to install, reinstall, etc new laptops for myself. I always tend to forget to do something. Here is a little list of things to do before start working. 

### Dev tools

Install Brew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install Git
```bash
brew install git
```

Install Node
```bash
brew install node
```

Install NVM (Node Version Manager)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Don't forget to do the step afterwards, which the installation will tell you.


Install Yarn
```
npm i -g yarn
```

### Generate SSH key and add to Git

Create ssh key
```
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Do not add a password, otherwise you will have to give that password Every time you do Anything with git.

Copy the code
```
cat ~/.ssh/id_rsa.pub | pbcopy
```

And add it to GitHub, Bitbucket, etc...



### Applications

- Slack
- Chrome
- Firefox
