/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	let posts = await response.json();

	// const tag = url.searchParams.get('tag') || null;

	// if (tag) {
	// 	posts = posts.filter((post) => post.meta.tags.includes(tag));
	// }

	return {
		posts
	};
};
