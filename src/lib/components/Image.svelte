<script>
	export let imgUrl = '';
	export let altText = '';
	export let size = 'large';
</script>

<figure>
	<img class={size} src={imgUrl} alt={altText} />
	<figcaption>{altText}</figcaption>
</figure>

<style>
	figure {
		margin: 4% auto;
	}

	figcaption {
		font-size: 0.8rem;
		color: #666;
		text-transform: capitalize;
	}

	img {
		border-radius: 0.375rem;
	}

	.max-size {
		width: 100% !important;
		object-fit: cover;
	}

	.large {
		max-width: 100%;
	}

	.medium {
		width: 75%;
	}

	.small {
		width: 50%;
	}
</style>
