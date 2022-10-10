---
title: Hello World
author: Djelal Fida
date: 2022-10-10
cover: https://www.zend.com/sites/default/files/image/2019-09/logo-laravel.jpg
---

<script>
import File from '$lib/components/File.svelte'
</script>

<File fileName={"+app"} fileType={"svelte"} />

```svelte
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
```

<File fileName={"program"} fileType={"csharp"} />

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```

<File fileName={"main"} fileType={"js"} />

```js
console.log('Hello World!');
```

# Random image

![](https://picsum.photos/200/300)

# markdown root file tree

```bash
├── README.md
├── package.json
├── package-lock.json
├── svelte.config.js
├── src
│   ├── components
│   │   ├── file.svelte
│   │   └── markdown.svelte
│   ├── lib
│   │   └── markdown.js
│   ├── routes
│   │   ├── _error.svelte
│   │   ├── _layout.svelte
│   │   ├── blog
│   │   │   ├── +page.md
│   │   │   └── index.svelte
│   │   ├── index.svelte
│   │   └── test.svx
│   └── static
│       └── favicon.png
└── tsconfig.json
```
