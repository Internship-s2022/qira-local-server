import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { Currency } from 'src/models/types';

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const productSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .regex(/^[a-zA-Z0-9 ]*$/)
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters.',
        'string.max': 'Invalid name, it must not contain more than 50 characters.',
        'string.pattern.base': 'Invalid name, it must contain only letters or numbers.',
        'any.required': 'Product name is a required field.',
      }),
    description: Joi.string()
      .min(3)
      .regex(/^[a-zA-Z0-9 ]*$/)
      .messages({
        'string.min': 'Invalid description, it must contain at least 3 characters.',
        'string.pattern.base': 'Invalid description, it must contain only letters or numbers.',
      }),
    price: Joi.number().positive().precision(2).required().messages({
      'number.positive': 'Invalid price, it must be positive.',
      'number.precision': 'Invalid price, it allows maximum of 2 decimals numbers.',
      'any.required': 'Product price is a required field.',
    }),
    image: Joi.object({
      key: Joi.string(),
      url: Joi.string(),
    }),
    technicalFile: Joi.object({
      key: Joi.string(),
      url: Joi.string(),
    }),
    brand: Joi.string()
      .min(2)
      .regex(/^[a-zA-Z0-9 ]*$/)
      .required()
      .messages({
        'string.min': 'Invalid brand, it must contain at least 2 characters.',
        'string.pattern.base': 'Invalid brand, it must contain only letters or numbers.',
        'any.required': 'Product brand is a required field.',
      }),
    category: Joi.string().alphanum().length(24).required(),
    currency: Joi.string().valid(Currency.DOLLAR, Currency.PESO).required().messages({
      'string.valid': 'Only accept DOLLAR or PESO.',
      'any.required': 'Type of currency is a required false.',
    }),
    stock: Joi.number().positive().allow(0).required().messages({
      'number.positive': 'Invalid stock, it must be positive.',
      'any.required': 'Product stock is a required field.',
    }),
    isNew: Joi.boolean(),
  });

  const validation = productSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: `There has been an error in the validation. ${validation.error.details[0].message}`,
      data: undefined,
      error: true,
    });
  }
  return next();
};

export const validateProductUpdate = (req: Request, res: Response, next: NextFunction) => {
  const productSchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .regex(/^[a-zA-Z0-9 ]*$/)
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters.',
        'string.max': 'Invalid name, it must not contain more than 50 characters.',
        'string.pattern.base': 'Invalid name, it must contain only letters or numbers.',
        'any.required': 'Product name is a required field.',
      }),
    description: Joi.string()
      .min(3)
      .regex(/^[a-zA-Z0-9 ]*$/)
      .messages({
        'string.min': 'Invalid description, it must contain at least 3 characters.',
        'string.pattern.base': 'Invalid description, it must contain only letters or numbers.',
      }),
    price: Joi.number().positive().precision(2).messages({
      'number.positive': 'Invalid price, it must be positive.',
      'number.precision': 'Invalid price, it allows maximum of 2 decimals numbers.',
      'any.required': 'Product price is a required field.',
    }),
    image: Joi.object({
      key: Joi.string(),
      url: Joi.string(),
    }),
    technicalFile: Joi.object({
      key: Joi.string(),
      url: Joi.string(),
    }),
    brand: Joi.string()
      .min(2)
      .regex(/^[a-zA-Z0-9 ]*$/)
      .messages({
        'string.min': 'Invalid brand, it must contain at least 2 characters.',
        'string.pattern.base': 'Invalid brand, it must contain only letters or numbers.',
        'any.required': 'Product brand is a required field.',
      }),
    category: Joi.string().alphanum().length(24),
    currency: Joi.string().valid(Currency.DOLLAR, Currency.PESO).messages({
      'string.valid': 'Only accept DOLLAR or PESO.',
      'any.required': 'Type of currency is a required false.',
    }),
    stock: Joi.number().positive().allow(0).messages({
      'number.positive': 'Invalid stock, it must be positive.',
      'any.required': 'Product stock is a required field.',
    }),
    isNew: Joi.boolean(),
  });

  const validation = productSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: `There has been an error in the validation. ${validation.error.details[0].message}`,
      data: undefined,
      error: true,
    });
  }
  return next();
};
