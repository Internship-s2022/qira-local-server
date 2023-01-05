import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateFunction =
  (schema: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(400).json({
        message: `There has been an error in the validation. ${validation.error.details[0].message}`,
        data: undefined,
        error: true,
      });
    }
    return next();
  };
