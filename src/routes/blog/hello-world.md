---
title: How I made my blog using Svelte
author: Djelal Fida
date: 2022-10-10
cover: https://res.cloudinary.com/practicaldev/image/fetch/s--rSOMuWAr--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gg7fp7w1n0mmknq3qt69.png
description: How I made my blog using Svelte
tags: javascript svelte md
---

<script>
    import File from "$lib/components/File.svelte";
</script>

> A quick blog post about how I made my blog using SvelteKit.

# 🚀 How I made my blog using SvelteKit

I've been nothing but impressed with SvelteKit so far. It's a great framework for building full-stack web applications. It's fast, easy to use, and has a great community that is growing day by day. I've been using it for 8 months now and I'm really enjoying it. I've been using it to build my blog and I thought I'd share how I did it.

> I used the following blog post by Josh Collinsworth as a starting point for my blog: [How to build a blog with SvelteKit](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog)

# 🔭 What is MDsveX?

[MDSveX](https://mdsvex.com/) is a Markdown preprocessor for SvelteKit, meaning you can use Markdown syntax in your Svelte components. It's a great way to write content for your blog without having to worry about HTML tags or other syntax. Which is perfect for blogs like mine.

> The following is an example of a markdown file that represents a blog post:

<File fileName="post" fileType="md" />

```md
---
title: How I made my blog using Svelte
author: Someone
date: 2022-10-10
cover: A cover
description: How I made my blog using Svelte
tags: javascript svelte md
---

# Title

Some content
```

# 🟢 Hosting?

I'm using Hetzner Cloud to host my blog, Hernzer is a IaaS provider that offers a wide range of servers. Currently my project is hosted on of of their VPS's. Using Nginx as my webserver and Cloudflare as my CDN & reverse proxy which gives me a lot of benefits like caching, security(SSL), and more. With over 250+ POPs(Point Of Presence) around the world, Cloudflare is a great choice for a CDN.

# 📈 Deployment

As I'm using the Sveltekit static adapter, I get static files in a `build` folder by running `npm run build`. With the help of Github Actions I can automate this process. I've created a Github Action that runs `npm run build` and then uploads the static files to my server. This way I don't have to worry about building the project myself.

# 🤔 What is the difference between Svelte and SvelteKit?

Svelte is the transpiler and the language that we use to build the Svelte components. SvelteKit is the framework that we use to build the full-stack web application. SvelteKit is built on top of Svelte. SvelteKit offers a lot of features that Svelte doesn't have. For example, SvelteKit has a built-in router, SSR, SSG, API routes, ...etc. You can perfectly use Svelte components in your SvelteKit application. Just like you have React and Next.js, you have Svelte and SvelteKit.

# 📝 GitHub repo

You can find the source code of my blog on [Github](https://github.com/djelalfida/svelte-markdown)
