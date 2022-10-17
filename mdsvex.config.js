import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import toc from '@jsdevtools/rehype-toc';
import rehypeSlug from 'rehype-slug';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeSlug]
});

export default config;
