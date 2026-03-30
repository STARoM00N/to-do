// src/lib/api.ts
import { treaty } from '@elysiajs/eden';
import type { App } from '@to-do-api';

export const api = treaty<App>(import.meta.env.VITE_API_URL as string);
