import type { Request } from 'express';

export type ExpressRequest<T> = Request<unknown, unknown, T, unknown>;
