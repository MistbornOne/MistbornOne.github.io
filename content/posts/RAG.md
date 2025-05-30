+++
date = '2025-05-29T13:22:28-04:00'
title = 'RAG'
tags = ['AI', 'Today I Learned']
+++

# What is RAG?

If you've been _trying_ to keep up with AI, there's a good chance you've come across the term RAG. When I first learned heard the term, I wasn't exactly sure what it meant form the context of the discussion.

Retrieval-Augmented Generation (RAG) is a technique that enhances the accuracy of large language models (LLMs) by giving them a wider context window and including external (from the LLM's database) knowledge sources.

> 💡 **Big Idea**: RAG allows LLMs to access files in your knowledge base, making the results more targeted/accurate results.

## Does it really matter?

LLM's are trained on datasets and thus only have access to the knowledge given to them in the last dataset used to train it. In other words, the information can be dated by months to years, depending on last time the LLM was trained.

In recent releases of most popular LLM's, such as OpenAI's ChatGPT or Anthropic's Claude, the standard (free to use) LLM has limited access to searching the internet (Generalized RAG). This means that the context window (aka where the AI is pulling it's information from to answer your query) is wider because it can use the internet to look things up. However, this still doesn't prevent the model from giving false information (hallucinating) if the information you are seeking is still outside it's context window.

By using RAG, you are feeding the LLM pinpointed data from your own files or knowledge base, meaning you can ask it specific questions related to said data and get more accurate information as a result.

For LLM developers, RAG allows the model to be "trained" in real time rather than waiting on the next dataset to be uploaded for training. In other words, when you give the LLM a folder of PDF's to look through and ask it questions about that, you are helping train the model for your specific use case and the developers didn't have to use the resources to do so.

RAG is very useful for chatbots, [AI agents](https://ianwatkins.dev/posts/agentic-ai/), and other tools that require specific information to be as accurate and useful as possible.

As someone who has built out internal chatbots for companies I've worked for, I know it can be a real pain to get up to date and accurate answers for internal users when the AI isn't using internal documents. This is a prime use case for RAG. Instead of using a general LLM model to power the bot, you give the bot access to your internal knowledge base and tell it to use that as it's primary source of truth. Then, when an internal user asks the bot a question about an internal policy, let's say, the bot will look at the documents and return an answer based off what is written there.

## Agents

When building agents, like [this one](https://ianwatkins.dev/projects/code-tutor-ai-agent/), you will want to consider what tools the agent has access to. In the case of Code Tutor, I made sure it has access to search the internet, if the answers aren't in it's standard dataset. So, if I ask about an new update that was just released for Golang, for instance, it will be able to return more accurate results by searching the web. Otherwise, I would have received either a wrong answer or a message telling me it doesn't know about the feature I asked about.

### Sources

[IBM Research](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
[McKinsey](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-retrieval-augmented-generation-rag)
[NVIDIA](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
