export const prerender = true;
export const trailingSlash = 'always';

export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
