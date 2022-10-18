<script>
	import { description, name } from '$lib/config/config';
</script>

<section id="me">
	<h1>About me</h1>

	<img src="photo.jpg" alt="profile" />

	<p>My name is <strong>{name}</strong>. {description}</p>
</section>

<style>
	img {
		max-width: 20%;
		border-radius: 50%;
	}

	#me {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
