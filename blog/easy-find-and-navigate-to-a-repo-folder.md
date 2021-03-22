---
date: 2020-07-02
---

# Easy find and navigate to a repository folder

Switching projects, finding folders. Every time I'm typing my ass of to open the folder, so I made a faster solutions which automatically finds a folder in my defined repos folder.
Add this to your bash_profile and use a simple command to go to your repo folder.

I started with a little shortcut just to go to my repos folder. Which is in my root, it's not that long, but it makes it easier.

```bash

export REPOS_DIR=~/Repositories

function repos(){
     if [ -z $@ ]
        then
        cd $REPOS_DIR
    else
        # check if the folder exists
        if [ -d $REPOS_DIR/$@ ]
            then
            cd $REPOS_DIR/$@
        else
            #Check if the folder Does exist with an underscore
            if [ -d $REPOS_DIR/_$@ ]
                then
                cd $REPOS_DIR/_$@
            else
                if [[ -n $(find $REPOS_DIR -type d -maxdepth 2 -name $@) ]]
                    then
                    for i in $(find $REPOS_DIR -type d -maxdepth 2 -name $@);
                        do
                        "$@"
                    done
                else
                    echo $@ "folder doesn't exist"
                fi
            fi
        fi
    fi
}
```


- Obviously... change `~/Repositories` into your own local repositories folder.
- Go to your local repos folder with the command `repos`.
- Go to a local repo with the command `repos NameOfProject`.
- This script searches for the folder in the first level and second level. Third level projects won't be found.
- This script automatically also searches for folder with a underscore `_` in front of the name.  (for ex. `repos projects` will also navigate to `_projects`

I have been using this code for a few years now and really implement it asap on a new device otherwise I really miss it. The code could probably be a lot better, but it works.
