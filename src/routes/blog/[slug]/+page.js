// export const prerender = true;
export const ssr = true;

export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const content = post.default;

	return {
		content,
		...post.metadata
	};
}
