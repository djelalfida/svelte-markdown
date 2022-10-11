<script>
	import { formatDate } from '$lib/utils/formDate';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Tag from '$lib/components/Tag.svelte';

	export let url = '';
	export let image = '';
	export let title = '';
	export let published = '';
	export let tags = '';
	export let description = '';
	export let animations = {};
</script>

<li
	in:fly={{
		y: animations.y,
		x: animations.x,
		delay: animations.delay,
		easing: backOut
	}}
	class="list-none p-0"
>
	<article class="card">
		<a href={url} class="no-underline">
			<img class="w-full m-0 mb-1 rounded-t-xl" src={image} alt={title} />

			<section class="content">
				<h5>{title}</h5>
				<p class="text-gray3 min-h-[100px]">
					{description}
				</p>

				<div class="tags">
					{#each tags.split(' ') as tag}
						<Tag tagName={tag} />
					{/each}
				</div>
			</section>
		</a>
	</article>
</li>

<style>
	.card {
		background-color: rgb(42 46 53);
		border-radius: 15px;

		box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
	}

	.card:hover {
		transform: scale(1.04);
	}

	.content {
		padding: 0 2rem 0.8rem;
		display: flex;
		flex-direction: column;
	}

	article {
		height: 100%;
		max-width: 24rem;
	}

	article img {
		max-width: 100%;
	}

	article p {
		color: rgb(178 190 205);
	}

	h5 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 1.2rem;
		margin-bottom: 2%;
	}

	img {
		max-width: 50%;
		border-radius: 5px 5px 0 0;
	}
</style>
