<script>
	export let tagName = '';
</script>

<p class={tagName}>#{tagName}</p>

<style>
	p {
		margin-right: 0.5rem;
		display: inline-block;
		border-radius: 0.375rem;
		border-style: none;
		background-color: rgb(0 0 0 / var(--tw-bg-opacity));
		--tw-bg-opacity: 0.3;
		padding: 0.25rem 0.5rem 0.375rem;
		font-size: 0.75rem;
		line-height: 1rem;
		--tw-text-opacity: 1;
		color: rgb(178 190 205 / var(--tw-text-opacity));
	}

	.javascript {
		background: #f0db4f;
		color: #000;
	}

	.svelte {
		background: #ff3e00;
		color: #fff;
	}

	.csharp {
		background: #239120;
		color: #fff;
	}

	.typescript {
		background: #007acc;
		color: #fff;
	}

	.html {
		background: #e34c26;
		color: #fff;
	}

	.css {
		background: #563d7c;
		color: #fff;
	}

	.python {
		background: #3572a5;
		color: #fff;
	}

	.php {
		background: #777bb4;
		color: #fff;
	}

	.laravel {
		background: #ff2d20;
		color: #fff;
	}

	.vue {
		background: #42b883;
		color: #fff;
	}

	.react {
		background: #61dafb;
		color: #000;
	}

	.node {
		background: #339933;
		color: #fff;
	}

	.ruby {
		background: #cc342d;
		color: #fff;
	}

	.docker {
		background: #2496ed;
		color: #fff;
	}

	.md {
		background: #000;
		color: #fff;
	}
</style>
