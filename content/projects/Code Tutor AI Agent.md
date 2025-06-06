+++
date = '2025-05-28T16:25:16-04:00'
title = 'Code Tutor AI Agent'
tags = ['AI', 'Coding', 'CLI']
+++

# Code Tutor AI 🧙🏼‍♂️

## An AI-powered interactive CLI coding tutor built with OpenAI Agent SDK.

**Code Tutor** is built to allow you to _learn_ to code yourself rather than just vibe code your way to success. This AI agent is supportive and uses the **Socractic method** to walk you, the coding student, through solving the problem on your own with guidance.

> 🧠 **Code tutor is built on the principle that we can use AI to accomplish great things, but we need to protect our ability to think critically and learn.**

If you happen to get stuck and truly can't figure the problem out, you can ask Code Tutor to give you the full answer. It will first verify you want it to simply give you the answer and if you do verify, then it will do so.

### Example Session ✅

```bash
What coding topic are we covering today?
Use [q] to quit

You: How do I write a recursive function in Python?

Tutor: What do you think recursion means in your own words?

You: I think it is when a function can call itself?

Tutor: Excellent observation!  How might a function being able to call itself be useful when coding?

```

You can download the tool and use it in your own command line (terminal) by going to my [GitHub Repo](https://github.com/MistbornOne/code-tutor-ai/tree/main?tab=readme-ov-file) or by following the instructions below:

---

## Getting Started 🚀

---

### Requirements 📦

- [Docker](https://www.docker.com/) (optional)
- An [OpenAI API key](https://platform.openai.com/api-keys)

---

### Installation 🔧

````bash
git clone https://github.com/MistbornOne/code-tutor-ai.git```

```bash
cd code-tutor-ai
````

#### Setup OpenAI API Key 🔐

You need to create a new .env file:

```bash
cp .env.example .env
```

Then open the .env file and paste in your API key:

```bash
OPENAI_API_KEY=sk-...
```

**Never Share This! ❌**

If you use Git to version control, make sure you add your .env to a .gitignore file _before_ you do so.

#### Run the Code Tutor! 🔥

```bash
./run.sh

```

---

## Alternative Install with Docker 🐳

````bash
git clone https://github.com/MistbornOne/code-tutor-ai.git```

```bash
cd code-tutor-ai
````

#### Setup OpenAI API Key 🔐

You need to create a new .env file:

```bash
cp .env.example .env
```

Then open the .env file and paste in your API key:

```bash
OPENAI_API_KEY=sk-...
```

**Never Share This! ❌**

If you use Git to version control, make sure you add your .env to a .gitignore file _before_ you do so.

#### Build Docker Image

```bash
docker build -t codetutor .
```

#### Run the Code Tutor with Docker! 🔥

```bash
docker run -it --rm \
  --env-file .env \
  -v ~/Documents/conversations:/logs \
  codetutor

```

**What this does:**

`--env-file .env` loads your OpenAI API key

`-v ~/Documents/conversations:/logs` mounts your conversation log folder

`codetutor` is the name of the image you built (or pulled)

> 💡 Make sure the `.env` file exists in your current directory.

---

## Change AI Model 🔄

You will be prompted on first run to choose a model, which will persist until you force a change with the command below:

```bash
./run.sh --change-model
```

Or

```bash
docker run -it --rm \
-e OPENAI_API_KEY=sk... \
codetutor --change-model
```

---

### Saving Sessions 📝

When you quit a session with `q` or `exit`, your full conversation is saved to:

```bash
conversations/session_YYYY-MM-DD_HH-MM-SS-topic-we-discussed.md

```

This lets you review past sessions, reflect, or build a study journal.

I hope this is a useful tool for many!!!
