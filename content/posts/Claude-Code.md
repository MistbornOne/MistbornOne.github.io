+++
date = '2026-05-01T08:42:52-04:00'
draft = false
title = 'Claude Code'
tags = ['AI', 'Coding', 'Go']
+++
It's been about a year since I last tried to "vibe code" and I used the normal Claude LLM to do so.  The experience was okay, but frustrating.  When using the standard chat interface, you have to be very specific about what you're feeding the chat and make sure that you keep the context window fairly short, because eventually the tool will start hallucinating more and more as you go on.  

This can lead to frustrating coding sessions in which you aren't actually accomplishing the goal you set out to do and instead are producing more bugs than fixes.  If you understand code and the architecture you're trying to accomplish, it's not the end of the world, but it does make you wonder if the juice is worth the squeeze.

Fast forward to now and I have an opportunity to begin testing Claude Code for a project I'm working on.  Before I dug into that, I wanted to test it on my own and see how far it has come.

I watched a few YouTube videos to make sure I had my bearings and then installed the CLI tool via Homebrew.  Then I created a new directory in my home folder called Claude and gave Claude Code access to it.  Then signed into my account and started a new project.

I wanted to see how quickly I could develop a static site generator in Go, so I prompted Claude Code and made sure to give it very clear instructions.  It asked some follow up questions, per my instructions, and then we were off to the races.  In about 45 minutes I had a fully functioning SSG - around 2,300 lines of code.  It cost me about $2 worth of tokens.

That's bonkers fast compared to a human coding it, even a senior dev would've taken at least a few hours to accomplish this from scratch!

Moral of the story, if you know how to prompt Claude Code well and understand at least the basics of coding, you can build useable applications very quickly.  Now, I wouldn't say that this first attempt is proof that complex applications with a codebase of 100,000+ lines of code would be as successful - though I'm sure with enough practice you could make it happen.  

However, I do feel a little more confident that with the right mindset and by using best practices the sky is the limit on what you could build.  Just be careful about what you give the AI permission to access and make sure you have redundant backups of any project you're building to avoid accidental deletions when the agent is working.
