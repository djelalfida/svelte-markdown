<script>
	import Header from '$lib/components/Header.svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
</script>

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

<style>
	main {
		width: 80%;
		margin: 0 auto;
	}
</style>
