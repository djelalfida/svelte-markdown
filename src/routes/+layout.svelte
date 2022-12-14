<script>
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';

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

	@media (max-width: 600px) {
		main {
			width: 100% !important;
		}
	}
</style>
