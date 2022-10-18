<script>
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let data;
</script>

{#key data.currentRoute}
	<main
		data-sveltekit-prefetch
		in:fly={{ y: -50, duration: 250, delay: 300 }}
		out:fly={{ y: -50, duration: 250 }}
	>
		<Header />
		<slot />
	</main>
{/key}

<style>
	main {
		width: 80%;
		margin: 0 auto;
	}
</style>
