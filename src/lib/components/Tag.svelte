<script>
	export let tagName = '';
</script>

<a href="/?tag={tagName}">
	<p class="tag {tagName}">#{tagName}</p>
</a>

<style>
	p {
		margin-right: 0.5rem;
		display: inline-block;
		border-radius: 0.375rem;
		border-style: none;
		background-color: rgb(28, 32, 36);
		--tw-bg-opacity: 0.3;
		padding: 0.25rem 0.5rem 0.375rem;
		font-size: 0.75rem;
		line-height: 1rem;
		--tw-text-opacity: 1;
		color: rgb(178 190 205 / var(--tw-text-opacity));
		font-weight: 600;
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

		/* box-shadow: 0 0 10px #ff2d20, 0 0 40px #e8271c, 0 0 80px #ff2d20; */
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

	.vite {
		background: linear-gradient(90deg, #646cff, #7f5af0);
		color: #fff;
	}

	.github {
		background: #181717;
		color: #fff;
	}

	.gitlab {
		background: #fc6d26;
		color: #fff;
	}

	.conference {
		background: #ff5722;
		color: #fff;
	}

	.tag:hover {
		transform: translateY(-5px);
	}

	.linux {
		background: linear-gradient(90deg, #f7df1e, #fbc830);
		color: #000;
	}

	.deploy {
		background: #0080ff;
		color: #fff;
	}

	.microsoft {
		background: #f65314;
		color: #fff;
	}

	.azure {
		background: linear-gradient(90deg, #007fff, #00b4ff);
		color: #fff;
	}

	.powerplatform {
		background: linear-gradient(90deg, #ff8c00, #ffbb00);
		color: #fff;
	}

	.powershell {
		background: #012456;
		color: #fff;
	}

	.powerautomate {
		background: #0066ff;
		color: #fff;
	}

	.event {
		background: #a4c8ff;
		color: #000;
	}

	.dell {
		background: linear-gradient(90deg, #007dc1, #00b4f0);
		color: #fff;
	}

	.intel {
		background: linear-gradient(90deg, #0071c5, #00a1f1);
		color: #fff;
	}

	.brussels {
		background: linear-gradient(90deg, #ff0000, #ff6a00);
		color: #fff;
	}
</style>
