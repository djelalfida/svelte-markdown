<script>
	import Card from '$lib/components/Card.svelte';
	import { name } from '$lib/config/config';
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Welcome to {name}'s blog</title>

	<meta name="description" content="Welcome to {name}'s blog" />
	<meta name="keywords" content="blog, svelte, sveltekit" />
</svelte:head>

<ul class="posts">
	{#each data.posts as post, i}
		<Card
			url={post.path}
			image={post.meta.cover}
			title={post.meta.title}
			published={post.meta.date}
			animations={{ y: 100, delay: 400 * i, x: 80 * i }}
			tags={post.meta.tags}
			description={post.meta.description}
		/>
	{/each}
</ul>

<style>
	.posts {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, clamp(24rem, 25vw, 2rem));
		gap: 2rem;
		padding: 0;
	}
</style>
