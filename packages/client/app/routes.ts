import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from '@react-router/dev/routes';
// import { flatRoutes } from "@react-router/fs-routes";

export default [
	layout('routes/layout.tsx', [
		index('routes/index.tsx'),
		route('/login', 'routes/login/index.tsx'),
		...prefix('article', [route('/:id', 'routes/article/index.tsx')]),
		// route("*", "routes/404.tsx")
	]),
] satisfies RouteConfig;

// export default flatRoutes();
