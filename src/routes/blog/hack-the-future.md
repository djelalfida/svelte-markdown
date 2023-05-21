---
title: Hack the Future 2022
author: Djelal Fida
date: 2022-11-15
cover: https://res.cloudinary.com/tesell/image/upload/c_scale,q_56,w_1279/v1672451642/blog/htf2022_byiyvr.webp
coverAlt: Hack the Future 2022
description: Hack the future 2022, a hackathon organized by the Cronos Group.
tags: hackathon antwerp node aws cloud lambda
gradient: ['#0071c5', '#00a1f1']
---

<script>
    import Image from '$lib/components/Image.svelte';
    import PigLatin from '$lib/components/PigLatin.svelte';
    import File from '$lib/components/File.svelte';
</script>

# 🚀 My first hackathon experience at Hack the Future 2022

> This is a recap of my first hackathon experience at Hack the Future 2022 where I was part of the team that won the first prize.

# 🔭 What is Hack the Future 2022?

Hack the Future is a yearly hackathon that is organized by the Cronos Group for all Belgian (IT) students which was held in the handelsbeurs in Antwerp.

# 🪪 My challenge by I8C

The challenge that I was assigned to was by `I8C` and was called "Tovenaars en Dreuzels."

> The world is about to perish. We need help, but no human help is sufficient, so magicians had to step in. Using their magic they can save our world (hopefully), but they need to use Earthly spells otherwise it will have no effect in our world! We have already acquired the Earthly spells for you, but the magicians need them in an Ancient language called PigLatin. It is your job to translate them and make sure they arrive at the correct destination before it is too late...

In this challenge, we had to translate the spells from English to PigLatin and send them to the correct destination.
If the spell was sent in another language than English, it would first be translated to English and then to PigLatin.

You may be wondering, what is PigLatin? Don't worry, I will explain it later in this blog post.

## 📈 The architecture

<Image imgUrl={"/images/covers/HTF-2022.drawio.png"} altText={"the infrastructure of our challenge."}/>

As you can see in the image above, the architecture looks challenging but it is actually quite simple. The SpellBus sends a message every 5 minutes to the PigLatinTranslator lambda function.

The PigLatinTranslator lambda function receives the message and translates the spell to PigLatin. If the spell is not in English, it will first be translated to English and then to PigLatin.

After the spell is translated, it will be sent to the correct destination. The destination can be either Teams or Email. The destination is determined by what's sent as destination in the body object of the message.

# ? What is PigLatin?

> For every word in a sentence, you take the first letter and append it to the end.
> Then you append "ay" to the newly created word.

> A word existing of only 1 letter (I) should not have ay appended, you can leave it as-is.

Examples:

- eat -> ateay
- banana -> ananabay
- cucumber -> ucumbercay

# 🤔 How did we solve the challenge?

My classmate `Thibaut Wittevrongel` and I were assigned to this challenge. The challange was divided in 5 levels. Each level had a different difficulty.

- Level 1: Manage to send a message to the magicians, even if it is not yet translated (Meaning a message has to go through your Lambda function, towards your EventBridge Rule).
- Level 2: Translate a sentence to PigLatin and send this to Teams and/or SendGrid.

  > Example sentence: "pig latin is used by strange pigs"

  > Example translation: "igpay atinlay isay useday ybay trangesay igspay"

- Level 3: Translate earthly spells to English before you translate them to PigLatin. With the power of `AWS Translate`, this should be a piece of cake.

  > The follwing code snippet shows how we got the source language of the spell using AWS Comprehend

  <File fileName="lambda" fileType="js" />

  ```javascript
  async function getSourceLanugage(message) {
  	// Check if the given message is in English or not using AWS Comprehend
  	const client = new ComprehendClient({ region: AWS_REGION });
  	const command = new DetectDominantLanguageCommand({ Text: message });
  	const data = await client.send(command);

  	const { LanguageCode: language } = data.Languages[0];

  	return language;
  }
  ```

  > Here is an example of a code snippet that translates a spell to English using AWS Translate

  <File fileName="lambda" fileType="js" />

  ```javascript
  async function translateToEnglish(message, sourceLanguage) {
  	// Translate the message to English using AWS Translate
  	const client = new TranslateClient({ region: AWS_REGION });
  	const command = new TranslateTextCommand({
  		Text: message,
  		SourceLanguageCode: sourceLanguage,
  		TargetLanguageCode: ENGLISH_LANGUAGE_CODE // en
  	});
  	const data = await client.send(command);

  	return data.TranslatedText;
  }
  ```

  > Example French: "tu es incroyable"

  > Translated to English: "you are amazing"

  > Translate to PigLatin: "ouyay areay amazingay"

- Level 4: Send the translated spells to the correct destination. The destination is determined by what's sent as destination in the body object of the message. This level will be gained when you successfully translate a Level 3 spell and put it on the SQS queue.

  > Example body object:

  <File fileName="json" fileType="json" />

  ```json
  {
  	"sendTo": "teams", // SendGrid or SQS could also be used
  	"message": "You are amazing" // this could also be in another language than English (e.g. French) and will be translated to English first
  }
  ```

- Level 5: Some of the most powerfull spells are powered by their punctuations and capitalizations.
  These can be a bit harder to translate, thus needing more logic in order to get the translation just right.

  > So we needed to fix the punctuation and capitalization after the translation. This was due to the fact that it also reverses the punctuation and capitalization. So we had to fix that using regex.

  <PigLatin />

# 📝 The code

The code can be found on my [GitHub](https://github.com/djelalfida/nodejs-htf).

# 🤯 The infrastructure

The following technologies were used to build the lambda functions and the infrastructure:

- AWS Lambda (Nodejs) - The lambda functions that were used to translate the spells and send them to the correct destination.
- SQS - The queue that was used to send the spells to the correct destination.
- AWS Translate - The service that was used to translate the spells to English if they were not in English.
- AWS Comprehend - The service that was used to detect the language of the spell and use AWS Translate if it was not in English.
- SendGrid - The service that was used to send the spells to the correct destination.
- Teams - The service that was used to send the spells to the correct destination.
- Nodejs - The language that was used to write the lambda functions.

# 🎉 204NoContent - The winning team

<Image imgUrl={"/images/covers/htf2022_win.jpg"} altText="Won the public and jury prize at Hack the Future 2022"/>

# 📝 Conclusion

We won the public and jury prize at Hack the Future 2022. We were the only team that managed to complete all the levels of the challenge from 1 to 5.

We had a lot of fun and learned a lot of new and cool things, definitely a day to remember. I would like to thank `I8C` for the challenge and `Hack the Future` for the amazing event. Would definitely recommend to participate in the next edition of `Hack the Future`.

Also had some interesting conversations with the people of `I8C` about job & internship opportunities. As I am someone who is quite interested in the infrastructure and devops side of things, I am definitely going to keep an eye on `I8C`.
