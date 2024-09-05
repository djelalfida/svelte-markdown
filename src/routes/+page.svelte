<script>
	import Card from '$lib/components/Card.svelte';
	import { name } from '$lib/config/config';

	export let data;
</script>

<svelte:head>
	<title>{name} | Software Engineer</title>

	<meta name="description" content="{name} | Software Engineer" />
	<meta
		name="keywords"
		content="blog, svelte, sveltekit, djelalfida, djelal, fida, Djelal Fida, linkedin Djelal Fida, Fida Djelal"
	/>

	<meta property="og:title" content="{name} | Software Engineer" />
	<meta
		property="og:description"
		content="My personal website, you can find my blog and my projects"
	/>
	<meta property="og:url" content="https://djelalfida.com" />

	<meta name="twitter:title" content="{name} | Software Engineer" />
	<meta name="twitter:description" content="{name} | Software Engineer" />

	<link rel="canonical" href="https://djelalfida.com" />
</svelte:head>

<!-- {#if data.tag}
	<a href="/">Reset tag</a>
{/if} -->

<h2>Blog</h2>

<ul class="posts">
	{#each data.posts as post, i}
		<Card
			url={post.path}
			image={post.meta.cover}
			title={post.meta.title}
			published={post.meta.date}
			animations={{ y: 100, delay: 100 * i, x: 80 * i }}
			tags={post.meta.tags}
			description={post.meta.description}
		/>
	{/each}
</ul>

<style>
	.posts {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 2rem;
		padding: 0;
	}

	h2 {
		font-size: 2.8rem;
	}
</style>
