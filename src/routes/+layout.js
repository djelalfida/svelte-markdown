// export const ssr = true;

export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
