import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { authController } from './controllers/authController.js';
import { loginController } from './controllers/loginController.js';
import dotenv from 'dotenv';
import path from 'node:path';

const DEBUG_ENV_PATH = path.resolve(
  process.cwd(),
  '..',
  '..',
  'docker-compose',
  '.env.development',
);

console.log(DEBUG_ENV_PATH);

dotenv.config({
  path: DEBUG_ENV_PATH,
});

const app = new Hono().basePath('/api');

app.route('/', authController);
app.route('/', loginController);

const server = serve({
  fetch: app.fetch,
  port: 3001,
});

process.on('SIGINT', () => {
  server.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
