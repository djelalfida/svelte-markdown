<script>
	import { formatDate } from '$lib/utils/formDate';

	export let url = '';
	export let image = '';
	export let title = '';
	export let published = '';
</script>

<div>
	<h2><a href={url}>{title}</a></h2>
	<p>Published {formatDate(published)}</p>
	<img src={image} alt={title} />
</div>

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

	h2 a:hover {
		color: #f00;
	}

	img {
		max-width: 50%;
		border-radius: 5px;
	}
</style>
