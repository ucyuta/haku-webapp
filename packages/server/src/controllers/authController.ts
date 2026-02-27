import { Hono } from 'hono';

export const authController = new Hono().basePath('/auth');

authController.get('/', (c) => {
  return c.text('HelloWorld');
});

authController.get('/callback/discord', (c) => {
  const _param = c.req.param();

  return c.text('success login');
});
