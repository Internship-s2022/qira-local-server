import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderSchema = Joi.object({
    products: Joi.array()
      .min(1)
      .items(
        Joi.object({
          product: Joi.object(),
          quantity: Joi.number().positive(),
        }),
      )
      .required()
      .messages({
        'array.base': 'Invalid format, it must be an array.',
        'any.required': 'Products is a required field.',
        'array.min': 'Invalid array, it must have at least 1 product.',
      }),
    client: Joi.string()
      .alphanum()
      .length(24)
      .required()
      .messages({ 'any.required': 'Products is a required field.' }),
    authorized: Joi.array()
      .items(
        Joi.object({
          firstName: Joi.string()
            .min(3)
            .max(50)
            .required()
            .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
            .messages({
              'string.min': 'Invalid name, it must contain at least 3 characters.',
              'string.max': 'Invalid name, it must not contain more than 50 characters.',
              'any.required': 'First Name is a required field.',
              'string.pattern.base': 'Invalid name, it must contain only letters.',
            }),
          lastName: Joi.string()
            .min(3)
            .max(50)
            .required()
            .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
            .messages({
              'string.min': 'Invalid last name, it must contain at least 3 characters.',
              'string.max': 'Invalid last name, it must not contain more than 50 characters.',
              'any.required': 'Last Name is a required field.',
              'string.pattern.base': 'Invalid last name, it must contain only letters.',
            }),
          dni: Joi.string()
            .regex(/^[0-9\-+]{7,8}$/)
            .required()
            .messages({
              'string.pattern.base': 'Invalid Dni, it must contain between 7 and 8 numbers.',
              'any.required': 'DNI is a required field.',
            }),
          phoneNumber: Joi.string()
            .regex(/^[0-9\-+]{8,11}$/)
            .required()
            .messages({
              'string.pattern.base':
                'Invalid Phone Number, it must only numbers and contain between 8 and 11 characters.',
              'any.required': 'Phone Number is a required field.',
            }),
        }),
      )
      .min(1)
      .max(2)
      .required()
      .messages({
        'array.base': 'Invalid format, it must be an array.',
        'any.required': 'Products is a required field.',
        'array.min': 'Invalid array, it must have at least 1 authorized.',
        'array.max': 'Invalid array, it must have at most 2 authorized.',
      }),
    invoice: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      base64: Joi.string().required(),
      isNew: Joi.boolean().required(),
    }),
    amounts: Joi.object({
      products: Joi.number().positive().precision(2).required().messages({
        'number.positive': 'Invalid products price, it must be positive.',
        'number.precision': 'Invalid products price, it allows maximum of 2 decimals numbers.',
        'any.required': 'Order products price is a required field.',
      }),
      taxes: Joi.number().positive().precision(2).required().messages({
        'number.positive': 'Invalid taxes price, it must be positive.',
        'number.precision': 'Invalid taxes price, it allows maximum of 2 decimals numbers.',
        'any.required': 'Order taxes price is a required field.',
      }),
      total: Joi.number().positive().precision(2).required().messages({
        'number.positive': 'Invalid total price, it must be positive.',
        'number.precision': 'Invalid total price, it allows maximum of 2 decimals numbers.',
        'any.required': 'Order total price is a required field.',
      }),
    })
      .required()
      .messages({
        'any.required': 'Amounts is a required field.',
      }),
    payment: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      base64: Joi.string().required(),
      isNew: Joi.boolean().required(),
    })
      .required()
      .messages({
        'any.required': 'Payment is a required field.',
      }),
    exchangeRate: Joi.number().positive().precision(2).required().messages({
      'number.positive': 'Invalid exchange rate, it must be positive.',
      'number.precision': 'Invalid exchange rate, it allows maximum of 2 decimals numbers.',
      'any.required': 'Exchange rate is a required field.',
    }),
    orderDate: Joi.date().required().messages({
      'any.required': 'Order date is a required field.',
    }),
    payAuthDate: Joi.date(),
    deliverDate: Joi.date(),
  });

  const validation = orderSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: `There has been an error in the validation. ${validation.error.details[0].message}`,
      data: undefined,
      error: true,
    });
  }
  return next();
};
