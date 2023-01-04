import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateUpdateClientInformation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const clientSchema = Joi.object({
    phoneNumber: Joi.string()
      .regex(/^[0-9\-+]{8,11}$/)
      .required()
      .messages({
        'string.pattern.base':
          'Invalid Phone Number, it must only numbers and contain between 8 and 11 characters.',
        'any.required': 'Phone Number is a required field.',
      }),
  });

  const validation = clientSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: `There has been an error in the validation. ${validation.error.details[0].message}`,
      data: undefined,
      error: true,
    });
  }
  return next();
};
export const validateUpdatePassword = (req: Request, res: Response, next: NextFunction) => {
  const clientSchema = Joi.object({
    password: Joi.string()
      .required()
      .min(8)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .messages({
        'string.empty': 'Password is a required field.',
        'string.min': 'Invalid password, it must contain only numbers and must be 8 characters.',
        'string.pattern.base': 'Invalid password, it must contain letters and numbers.',
      }),
  });

  const validation = clientSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: `There has been an error in the validation. ${validation.error.details[0].message}`,
      data: undefined,
      error: true,
    });
  }
  return next();
};
