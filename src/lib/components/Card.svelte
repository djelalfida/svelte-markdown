<script>
	import { formatDate } from '$lib/utils/formDate';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Tag from '$lib/components/Tag.svelte';

	export let url = '';
	export let image = '';
	export let title = '';
	export let published = '';
	export let tags = '';
	export let animations = {};
</script>

<div
	in:fly={{
		y: animations.y,
		delay: animations.delay,
		easing: backOut
	}}
>
	<h2><a data-sveltekit-prefetch href={url}>{title}</a></h2>
	{#each tags.split(' ') as tag}
		<Tag tagName={tag} />
	{/each}

	<p>Published {formatDate(published)}</p>
	<img src={image} alt={title} />
</div>

<style>
	div {
		border: 1px solid #ccc;
		color: #fff;
		padding: 1rem;
		border-radius: 5px;
		margin-bottom: 2%;
	}

	h2 {
		margin-bottom: 0;
	}

	h2 a {
		color: #fff;
	}

	img {
		max-width: 50%;
		border-radius: 5px;
	}
</style>
