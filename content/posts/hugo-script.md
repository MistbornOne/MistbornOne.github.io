+++
date = '2025-05-02T20:40:33-04:00'
title = 'Hugo Script'
tags = ['Scripts']
+++

## Shell Script - Create A New Hugo Blog Post

I've recently been going deep in the world of creating shell scripts to automate tasks as I operate in the shell. I've seen other developers fly around the terminal like some kind of wizard 🧙🏼‍♂️, their hands never leaving the keyboard.

I am no stranger to using keyboard shortcuts to accomplish tasks in other apps I've used for years in my sales career and content creation, but the terminal is a new environment for me. I've really enjoyed learning to navigate and use CLI tools to accomplish tasks... and edit in my text editor of choice, Neovim. However, after a month of typing out the same commands over and over in full, I decided to teach myself to write shell scripts.

For the uninitiated, shell scripts are simple programs that you can run in the command line that will allow you to automate tasks. The simplest shell script I've created prints the date in the shell. All I have to do is type "gendate" and hit enter. The program will return the current date.

The script I created this evening isn't much more complicated, but it saves me time and allows me to jump right into writing a blog post in a _single step_ rather than three.

---

I'll outline the process below (note, I'm on MacOS):

1. Move into the directory where you want to create the script file:

```bash
cd ~/your/filepath/here
```

2. Create your new file:

```bash
touch your_script.sh #followed by nano your_script.sh

nvim your_script.sh #IYKYK
```

3. Write your code. Now, for this exact script, you can simply copy and paste the code below if you'd like:

```bash

#!/bin/zsh

echo -n "Blog Post Name: "
read name

# Capture hugo output and exit code
output=$(hugo new "content/posts/$name" 2>&1)
exit_code=$?

if [[ $exit_code -ne 0 ]]; then
  echo "❌ Hugo error:"
  echo "$output"
  exit 1
fi

# Extract file path between double quotes
filepath="${output#*\"}"
filepath="${filepath%%\"*}"

echo "DEBUG: Extracted filepath = '$filepath'"

if [[ -f "$filepath" ]]; then
  nvim "$filepath"
else
  echo "⚠️  Could not find file: $filepath"
fi

```

4. Save and exit the file. Then make it executable:

```bash
chmod +x your_script.sh
```

5. Run your program (for this script, you'd need to be in the root folder of the blog):

```bash
sh your_script.sh
```

Viola, the program should've worked 🥳

Now, this is just one very niche example of writing a shell script. All my scripts are available in my public dotfiles [repo](https://github.com/MistbornOne/.dotfiles) on GitHub.
