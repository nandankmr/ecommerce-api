import express from 'express';
import 'express-async-errors';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import routes from './routes';
import ErrorHandlerMiddleware from './middlewares/ErrorHandlerMiddleware';
import { CORS_WHITELIST, RATE_LIMIT } from '../config/config';

const app: express.Application = express();
const errorHandler: ErrorHandlerMiddleware = new ErrorHandlerMiddleware();
const corsOptions: CorsOptions = {
  origin: CORS_WHITELIST?.split(','),
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

// setting API request rate limit for all requests
app.use(
  rateLimit({
    windowMs: 60 * 1000 * Number(RATE_LIMIT.TIME ?? 1), // min 1 minute duration in milliseconds
    max: Number(RATE_LIMIT.COUNT ?? 100),
    message: `You exceeded ${RATE_LIMIT.COUNT ?? 100} requests in ${
      RATE_LIMIT.TIME ?? 1
    } Minute(s) limit!`,
    headers: true,
  })
);

app.use('/api', routes);
app.use(errorHandler.handleErrors);

app.set('trust proxy', '127.0.0.1');

export default app;
