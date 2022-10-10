<script>
	import { formatDate } from '$lib/utils/formDate';

	export let data;
</script>

<article>
	<h1>{data.title}</h1>
	<h2>Posted by: {data.author}</h2>
	<p>Published: {formatDate(data.date)}</p>
	<svelte:component this={data.content} />
</article>

<style>
	article {
		margin-top: 8%;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
	}
	h1 {
		font-size: 2.5rem;
		margin-bottom: 0;
		line-height: 1;
	}

	h2,
	p {
		color: rgb(178, 178, 178);
		font-weight: normal;
		font-size: 1.2rem;
	}
</style>
