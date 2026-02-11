import { Hono } from 'hono';

export const auth = new Hono().basePath('/auth');

auth.get('/', (c) => {
	return c.text('HelloWorld');
});

auth.get('/callback/discord', (c) => {
	const _param = c.req.param();

	return c.text('');
});
