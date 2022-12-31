---
title: Hack the Future 2022
author: Djelal Fida
date: 2022-11-15
cover: https://res.cloudinary.com/tesell/image/upload/c_scale,q_56,w_1279/v1672451642/blog/htf2022_byiyvr.webp
coverAlt: Hack the Future 2022
description: Hack the future 2022, a hackathon organized by the Cronos Group.
tags: hackathon antwerp node aws cloud lambda
gradient: ['#0071c5', '#00a1f1']
---

<script>
    import Image from '$lib/components/Image.svelte';
</script>

# 🚀 My first hackathon experience at Hack the Future 2022

> This is a recap of my first hackathon experience at Hack the Future 2022 where I was part of the team that won the first prize.

# 🔭 What is Hack the Future 2022?

Hack the Future 2022 is a hackathon that is organized by the Cronos Group which was held in the handelsbeurs in Antwerp.

# 🪪 My challenge by I8C

> The world is about to perish. We need help, but no human help is sufficient, so magicians had to step in. Using their magic they can save our world (hopefully), but they need to use Earthly spells otherwise it will have no effect in our world! We have already acquired the Earthly spells for you, but the magicians need them in an Ancient language called PigLatin. It is your job to translate them and make sure they arrive at the correct destination before it is too late...

In this challenge, we had to translate the spells from English to PigLatin and send them to the correct destination.
If the spell was sent in another language than English, it would first be translated to English and then to PigLatin.

## 📈 The architecture

<Image imgUrl={"/images/covers/HTF-2022.drawio.png"} altText={"the infrastructure of our challenge."}/>

# 🤯 The infrastructure

The following technologies were used to build the web application:

- AWS Lambda
- SQS
- AWS Translate
- AWS Comprehend
- SendGrid
- Teams
- Nodejs

# 🎉 204NoContent - The winning team

<Image imgUrl={"/images/covers/htf2022_win.jpg"} altText="Won the public and jury prize at Hack the Future 2022"/>
