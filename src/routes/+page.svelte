<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<ul>
	{#each data.posts as post}
		<Card
			url={post.path}
			image={post.meta.cover}
			title={post.meta.title}
			published={post.meta.date}
		/>
	{/each}
</ul>
