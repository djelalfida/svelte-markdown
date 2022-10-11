<script>
	import Card from '$lib/components/Card.svelte';
	import { name } from '$lib/config/config';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data;
</script>

<svelte:head>
	<title>Welcome to {name}'s blog</title>
</svelte:head>

<ul class="posts">
	{#each data.posts as post, i}
		<Card
			url={post.path}
			image={post.meta.cover}
			title={post.meta.title}
			published={post.meta.date}
			animations={{ y: 100, delay: 400 * i }}
			tags={post.meta.tags}
			description={post.meta.description}
		/>
	{/each}
</ul>

<style>
	.posts {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
</style>
