import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: vercel({
			// if true, will deploy the app using edge functions
			// (https://vercel.com/docs/concepts/functions/edge-functions)
			// rather than serverless functions
			edge: false,

			// an array of dependencies that esbuild should treat
			// as external when bundling functions
			external: [],

			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
	},

	preprocess: [mdsvex(mdsvexConfig)],

	trailingSlash: 'always',

	vitePlugin: {
		experimental: {
			useVitePreprocess: true
		}
	}
};

export default config;
