// Database configuration
export const DATABASE_URL = process.env.DATABASE_URL;

export const PORT = process.env.PORT ?? 3000;

// CORS IP / Domain White listed list
if (typeof process.env.CORS_WHITELIST !== 'string') {
  console.warn('CORS whitelist is missing!');
}
export const CORS_WHITELIST = process.env.CORS_WHITELIST ?? '';

export const RATE_LIMIT = {
  TIME: 1,
  COUNT: 100,
};
