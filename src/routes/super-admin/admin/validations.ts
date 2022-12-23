import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
  const adminSchema = Joi.object({
    firstName: Joi.string()
      .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
      .min(3)
      .max(50)
      .required()
      .messages({
        'string.min': 'Invalid first name, it must contain at least 3 characters.',
        'string.max': 'Invalid first name, it must not contain more than 50 characters.',
        'any.required': 'First name is a required field.',
        'string.pattern.base': 'Invalid first name, it must contain only letters.',
      }),
    lastName: Joi.string()
      .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
      .min(3)
      .max(50)
      .required()
      .messages({
        'string.min': 'Invalid last name, it must contain at least 3 characters.',
        'string.max': 'Invalid last name, it must not contain more than 50 characters.',
        'any.required': 'Last name is a required field.',
        'string.pattern.base': 'Invalid last name, it must contain only letters.',
      }),
    email: Joi.string().email().min(7).required().messages({
      'string.min': 'Invalid Email, it must contain at least 7 characters.',
      'any.required': 'Email is a required field.',
      'string.email': 'Invalid Email must contain @ and .',
    }),
    password: Joi.string().required(),
  });
  const validation = adminSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'There has been an error in the validation.',
      data: validation.error.details[0].message,
      error: true,
    });
  }
  return next();
};
