<script>
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let animate = true;

	setTimeout(() => {
		animate = true;
	}, 10);

	export let data;
</script>

{#if animate}
	{#key data.currentRoute}
		<main
			data-sveltekit-prefetch
			in:fly={{
				y: 100,
				delay: 300,
				easing: backOut
			}}
		>
			<Header />
			<slot />
		</main>
	{/key}
{/if}

<style>
	main {
		width: 80%;
		margin: 0 auto;
	}
</style>
