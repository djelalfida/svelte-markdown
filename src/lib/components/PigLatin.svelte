<script>
	const PIG_LATIN_SUFFIX = 'ay';

	function translateToPigLatin(message) {
		// Translate
		let translated = message
			.split(' ')
			.map((word) => {
				if (word.length < 2) return word;
				let translatedWord = addPigLatinSuffix(word);

				translatedWord = removePunctuation(translatedWord);

				return translatedWord + getPunctuation(word).join('');
			})
			.join(' ')
			.toLowerCase();

		translated = capitalizeFirstLetter(translated);

		return capitalizeAfterPunctuation(translated);
	}

	function addPigLatinSuffix(message) {
		return message.substring(1, message.length) + message.substring(1, -1) + PIG_LATIN_SUFFIX;
	}

	function removePunctuation(message) {
		return message.replace(/[^a-zA-Z0-9]/g, '');
	}

	function capitalizeAfterPunctuation(message) {
		const punctuations = ['!', '.', '?'];
		let splittedMessage = message.split(' ');
		for (let i = 0; i < splittedMessage.length; i++) {
			let currentWord = splittedMessage[i];

			if (
				punctuations.includes(currentWord[currentWord.length - 1]) &&
				i < splittedMessage.length - 1
			) {
				splittedMessage[i + 1] = capitalizeFirstLetter(splittedMessage[i + 1]);
			}
		}

		return splittedMessage.join(' ');
	}

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function getPunctuation(message) {
		const punctuation = message.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g);
		return punctuation ?? [''];
	}

	let pigLatin = '';
	$: translatedMessage = translateToPigLatin(pigLatin || ' ');
</script>

<div>
	<p>Try the PigLatin translator here!</p>
	<pre>{translatedMessage}</pre>
	<input type="text" bind:value={pigLatin} placeholder="You are amazing!" />
</div>

<style>
	input {
		width: 100%;
	}

	pre {
		background-color: rgb(0 0 0 / 20%);
		padding: 1rem;
		border-radius: 10px;

		margin: 1rem 0;

		white-space: pre-wrap;
		word-wrap: break-word;
		color: #0fe468;
	}

	div {
		border: 2px solid rgb(42 46 53);
		border-radius: 10px;

		padding: 2rem 1.8rem;
	}
</style>
