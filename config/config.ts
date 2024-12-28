// Database configuration
export const DATABASE_URL = process.env.DATABASE_URL;

export const PORT = process.env.PORT ?? 3000;
export const APP_BASE_URL = process.env.APP_BASE_URL ?? '';

// CORS IP / Domain White listed list
if (typeof process.env.CORS_WHITELIST !== 'string') {
  console.warn('CORS whitelist is missing!');
}
export const CORS_WHITELIST = process.env.CORS_WHITELIST ?? '';

// API Rate Limiting config
if (
  typeof process.env.RATE_LIMIT_TIME !== 'string' ||
  typeof process.env.RATE_LIMIT_REQ_COUNT !== 'string'
) {
  console.warn(
    'Request rate limit configuration is missing!'
  );
}
export const RATE_LIMIT = {
  TIME: process.env.RATE_LIMIT_TIME,
  COUNT: process.env.RATE_LIMIT_REQ_COUNT,
};
