<script>
	function toggle() {
		const theme = document.documentElement.getAttribute('data-theme') == 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/project">Projects</a></li>
		<li class="dark">
			<a on:click|preventDefault={toggle} href="#">
				<img src="./images/dark-mode.svg" alt="" />
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

	nav a {
		color: var(--white-color);
		margin-right: 1rem;
		font-size: 1.8rem;
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
