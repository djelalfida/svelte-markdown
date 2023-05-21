<script>
	import { description, name } from '$lib/config/config';
</script>

<section id="me">
	<h1>About me</h1>

	<img
		src="https://media.licdn.com/dms/image/D4E03AQE_4749eTvC-Q/profile-displayphoto-shrink_800_800/0/1668706960705?e=1690416000&v=beta&t=JGoXaeXW-8ESZaDBkjuJxGMCz8m37aqL33IUZU4jQhQ"
		alt="profile"
	/>

	<p>
		Hi, I'm <span>{name}</span>. {description}
	</p>

	<p>
		<span><a href="/files/CV.pdf" target="_blank" rel="noreferrer">My resume</a></span>
	</p>

	<img
		id="skenderbeu"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Variant_of_the_Skanderbeg_Helmet.svg/1200px-Variant_of_the_Skanderbeg_Helmet.svg.png"
		alt="skenderbeu"
	/>
</section>

<style>
	img {
		max-width: 20%;
		border-radius: 50%;
	}

	#skenderbeu {
		width: 5%;
	}

	#me {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	p {
		text-align: center;
		max-width: 50%;
		font-size: 1.8rem;
	}

	p span {
		position: relative;
		font-weight: bold;
	}

	p span::before {
		content: '';
		position: absolute;
		top: 60%;
		left: 0;
		width: 105%;
		height: 40%;
		background: linear-gradient(to right, #007fff, #00b4ff);
		z-index: -1;
	}

	@media (max-width: 768px) {
		img {
			max-width: 50%;
		}

		p {
			max-width: 100%;
		}
	}
</style>
