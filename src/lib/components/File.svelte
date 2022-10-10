<script>
	export let fileName = '';
	export let fileType = '';

	const fileIcon = {
		csharp: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
		svelte:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png',
		js: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
	};
</script>

<p style="--file-icon: url({fileIcon[fileType]})">{fileName}.{fileType}</p>

<style>
	p {
		border: 1px solid #2a4555;
		margin-bottom: -20px;
		background-color: #030314;
		color: #fff;
		padding: 1rem;
		width: 12rem;
		text-transform: capitalize;
		border-radius: 5px 5px 0 0;
	}

	p::before {
		content: ' ';
		background: var(--file-icon) no-repeat;
		background-size: auto;
		height: 40px;
		display: inline-block;
		vertical-align: middle;
		background-size: contain;
		width: 40px;
		margin-right: 4%;
	}
</style>
