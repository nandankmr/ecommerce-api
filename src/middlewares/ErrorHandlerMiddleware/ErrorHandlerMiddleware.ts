import { Request, Response, NextFunction } from 'express';
import { MiddlewareError } from './types';

export default class ErrorHandlerMiddleware {
  handleErrors(
    err: MiddlewareError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    const status = err.code ?? err.status ?? 500;
    const message = err.message ?? 'Internal Server Error';

    if (status === 500) {
      console.error(err);
    }

    if (typeof next === 'function') {
      next();
    }

    req.user?.transaction?.rollback();
    res.status(Number(status));
    res.json({ code: status, message, errorCode: err.errorCode });
  }
}
