import { Hono } from 'hono';

export const loginController = new Hono().basePath('/login');

loginController.get('/', (c) => {
  const state = 'test';
  return c.redirect(`${process.env.AUTH_URL}&state=${state}`);
});
