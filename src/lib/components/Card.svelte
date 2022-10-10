<script>
	import { formatDate } from '$lib/utils/formDate';

	export let url = '';
	export let image = '';
	export let title = '';
	export let published = '';
</script>

<h2><a data-sveltekit-prefetch href={url}>{title}</a></h2>
<p>Published {formatDate(published)}</p>
<img src={image} alt={title} />

<style>
	div {
		border: 1px solid #ccc;
		color: #fff;
		padding: 1rem;
		border-radius: 5px;
		margin-bottom: 2%;
	}

	h2 a {
		color: #fff;
	}

	img {
		max-width: 50%;
		border-radius: 5px;
	}
</style>
