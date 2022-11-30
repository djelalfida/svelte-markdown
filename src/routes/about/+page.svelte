<script>
	import { description, name } from '$lib/config/config';
</script>

<section id="me">
	<h1>About me</h1>

	<img
		src="https://media-exp1.licdn.com/dms/image/D4E03AQE_4749eTvC-Q/profile-displayphoto-shrink_800_800/0/1668706960705?e=1675296000&v=beta&t=xbkuavVdGc4vmIWb9qGhQ3OHAMxuEuQfTUwQRg4xsw0"
		alt="profile"
	/>

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
