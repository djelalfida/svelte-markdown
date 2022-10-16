<script>
	import Tag from '$lib/components/Tag.svelte';
	import { formatDate } from '$lib/utils/formDate';

	export let data;

	const gradient = data.gradient
		? `linear-gradient(to right, ${data.gradient[0]}, ${data.gradient[1]})`
		: 'linear-gradient(to right, #0fe468, #49c6ec)';
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />

	<meta name="keywords" content={data.tags.split(' ').join(',')} />

	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta property="og:image" content={data.cover} />
	<meta property="og:url" content={data.path} />

	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={data.cover} />
	<meta name="twitter:card" content="summary_large_image" />

	<link rel="canonical" href={data.path} />
</svelte:head>

<article>
	<h1 style="--gradient-colors: {gradient}" id="title">{data.title}</h1>
	<h2>Posted by: {data.author}</h2>
	<p>Published: {formatDate(data.date)}</p>

	<div class="tags">
		{#each data.tags.split(' ') as tag}
			<Tag tagName={tag} />
		{/each}
	</div>

	<section id="content">
		<svelte:component this={data.content} />
	</section>
</article>

<style>
	article {
		margin-top: 8%;
		width: 60%;
		margin-left: auto;
		margin-right: auto;
	}

	.tags {
		width: 80%;
	}

	#content {
		margin-top: 8%;
	}

	#title {
		background: var(--gradient-colors);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
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

	h1 {
		font-size: 4rem;
	}
</style>
