<script>
	import { onMount } from 'svelte';

	function toggle() {
		isDark = !isDark;
		const theme = getTheme() == 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	}

	function getTheme() {
		return document.documentElement.getAttribute('data-theme');
	}

	let isDark = true;
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/project">Projects</a></li>
		<li class="dark">
			<a on:click|preventDefault={toggle} href="#">
				{#if isDark}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="h-5 w-5 text-gray-800 dark:text-yellow-100"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="0"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				{/if}
			</a>
		</li>
	</ul>
</nav>

<style>
	nav ul {
		color: var(--white-color);
		margin: 2rem 0;
		display: flex;
		padding: 0;
	}

	nav ul li {
		display: block;
	}

	nav ul li a {
		color: var(--white-color);
		margin-right: 1rem;
		font-size: 1.8rem;
		display: block;
	}

	nav ul li a svg {
		width: 25px;
		height: 25px;
	}

	.dark {
		background-color: rgb(42 46 53);
		padding: 0.2rem 0.8rem;
		border-radius: 10px;
		margin-left: auto;
	}

	.dark img {
		fill: white;
		width: 1.5rem;
	}

	.dark a {
		margin: 0;
	}
</style>
