---
date: 2020-08-20
---

# Converting Asciidoc to Markdown

Asciidoc is a nice file format but many websites or script really want to have markdown, which is way more compatible. I was working on a website which had a large amount of posts ready. But the new system is using just Nuxt with Nuxt Content. Nuxt Content also, does not support Asciidocs so we decided to just convert all Asciidoc files to Markdown. I've found multiple scripts to do so, but all would be a lot work to manually convert every file. Thats why I wrote a little script to just convert them all in once.

First of all you will need to install pandoc and asciidoc local on your computer;

```bash
sudo apt install pandoc asciidoc
```

Then create a new file, preferably in the same folder as where all your asciidoc files are. I called mine 'convert.sh'.

```bash
#!/bin/bash
for i in *.adoc; do
    [ -f "$i" ] || break        
    find=".adoc"
    replace=""
    result=${i//$find/$replace}

    echo "$i"
    echo "$result"
    asciidoc -b docbook $i
    pandoc -f docbook -t markdown_strict ${result}.xml -o ${result}.md
    rm -rf ${result}.xml
done
```

Navigate to your folder in your terminal and run `chmod +x convert.sh`.

And run the the converter; `./convert.sh`.

Now you have .md files of every .adoc file in that folder :)
