import { Hono } from 'hono';

const login = new Hono().basePath('/login');

login.get('/', (c) => {
	const discordUrl =
		'https://discord.com/oauth2/authorize?client_id=1432581614059131020&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify';
	const state = 'randommojidaooooon';
	return c.redirect(`${discordUrl}&state=${state}`);
});
