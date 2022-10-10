<script>
	import Card from '$lib/components/Card.svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let data;
</script>

{#each data.posts as post, i}
	<div
		in:fly={{
			y: 100,
			delay: 400 * i,
			easing: backOut
		}}
	>
		<Card
			url={post.path}
			image={post.meta.cover}
			title={post.meta.title}
			published={post.meta.date}
		/>
	</div>
{/each}
