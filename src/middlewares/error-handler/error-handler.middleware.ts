import { NextFunction, Request, Response } from 'express';

import { CustomError } from './custom-error.model';

const handleError = (
  err: TypeError | CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let customError = new CustomError(500, `Something went wrong. ${err.message}`, true);

  if (err instanceof CustomError) {
    customError = err;
  }

  res.status((customError as CustomError).status).json({
    message: customError.message,
    data: undefined,
    error: true,
  });
};

export default handleError;
