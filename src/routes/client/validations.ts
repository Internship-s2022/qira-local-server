import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { IvaCondition } from 'src/models/types';

export const validateClient = (req: Request, res: Response, next: NextFunction) => {
  const clientSchema = Joi.object({
    businessName: Joi.string()
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .min(3)
      .max(50)
      .required()
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters.',
        'string.max': 'Invalid name, it must not contain more than 50 characters.',
        'any.required': 'Business Name is a required field.',
        'string.pattern.base': 'Invalid business name, it must contain only letters.',
      }),
    cuit: Joi.string()
      .regex(/^[0-9\-+]{11}$/)
      .required()
      .messages({
        'any.required': 'Cuit is a required field.',
        'string.pattern.base':
          'Invalid cuit, it must contain only numbers and must be 11 characters.',
      }),
    ivaCondition: Joi.string()
      .valid(
        IvaCondition.REGISTERED_RESPONSIBLE,
        IvaCondition.SELF_EMPLOYMENT,
        IvaCondition.EXEMPT,
        IvaCondition.FINAL_CONSUMER,
      )
      .required()
      .messages({
        'any.required': 'Iva condition is a required field.',
        'string.valid': 'Only accept CONSUMIDOR_FINAL, EXENTO, RESPONSABLE_INSCRIPTO, MONOTRIBUTO.',
      }),
    address: Joi.object({
      province: Joi.string()
        .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
        .min(3)
        .required()
        .messages({
          'string.min': 'Invalid Province, it must contain at least 3 characters.',
          'any.required': 'Province is a required field.',
          'string.pattern.base': 'Invalid Province, it must contain only letters.',
        }),
      city: Joi.string().min(3).required().messages({
        'string.min': 'Invalid City, it must contain at least 3 characters.',
        'any.required': 'City is a required field.',
      }),
      zipCode: Joi.string()
        .regex(/^[0-9\-+]{4}$/)
        .required()
        .messages({
          'string.pattern.base':
            'Invalid Zip Code, it must contain only numbers and must be 4 characters.',
          'any.required': 'Zip code is a required field.',
        }),
      street: Joi.string()
        .regex(/[a-zA-Z0-9]+\s[a-zA-Z0-9]/)
        .min(3)
        .required()
        .messages({
          'string.min': 'Invalid Street, it must contain at least 3 characters.',
          'string.pattern.base': 'Invalid Street, it must contain letters and numbers.',
          'any.required': 'Street is a required field.',
        }),
    }),
    phoneNumber: Joi.string()
      .regex(/^[0-9\-+]{9,10}$/)
      .required()
      .messages({
        'string.pattern.base':
          'Invalid Phone Number, it must only numbers and contain 9 or 10 characters.',
        'any.required': 'Phone Number is a required field.',
      }),
    email: Joi.string().email().min(7).required().messages({
      'string.min': 'Invalid Email, it must contain at least 7 characters.',
      'any.required': 'Email is a required field.',
      'string.email': 'Invalid Email must contain @ and .',
    }),
    isActive: Joi.boolean().optional(),
    logicDelete: Joi.boolean().optional(),
  });
  const validation = clientSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'There has been an error in the validation.',
      data: validation.error.details[0].message,
      error: true,
    });
  }
  return next();
};

export const validateClientUpdate = (req: Request, res: Response, next: NextFunction) => {
  const clientSchema = Joi.object({
    businessName: Joi.string()
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .min(3)
      .max(50)
      .optional()
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters.',
        'string.max': 'Invalid name, it must not contain more than 50 characters.',
        'any.required': 'Business Name is a required field.',
        'string.pattern.base': 'Invalid business name, it must contain only letters.',
      }),
    cuit: Joi.string()
      .regex(/^[0-9\-+]{11}$/)
      .optional()
      .messages({
        'any.required': 'Cuit is a required field.',
        'string.pattern.base':
          'Invalid cuit, it must contain only numbers and must be 11 characters.',
      }),
    ivaCondition: Joi.string()
      .valid(
        IvaCondition.REGISTERED_RESPONSIBLE,
        IvaCondition.SELF_EMPLOYMENT,
        IvaCondition.EXEMPT,
        IvaCondition.FINAL_CONSUMER,
      )
      .optional()
      .messages({
        'any.required': 'Iva condition is a required field.',
        'string.valid': 'Only accept CONSUMIDOR_FINAL, EXENTO, RESPONSABLE_INSCRIPTO, MONOTRIBUTO.',
      }),
    address: Joi.object({
      province: Joi.string()
        .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
        .min(3)
        .optional()
        .messages({
          'string.min': 'Invalid Province, it must contain at least 3 characters.',
          'any.required': 'Province is a required field.',
          'string.pattern.base': 'Invalid Province, it must contain only letters.',
        }),
      city: Joi.string().min(3).optional().messages({
        'string.min': 'Invalid City, it must contain at least 3 characters.',
        'any.required': 'City is a required field.',
      }),
      zipCode: Joi.string()
        .regex(/^[0-9\-+]{4}$/)
        .optional()
        .messages({
          'string.pattern.base':
            'Invalid Zip Code, it must contain only numbers and must be 4 characters.',
        }),
      street: Joi.string()
        .regex(/[a-zA-Z0-9]+\s[a-zA-Z0-9]/)
        .min(3)
        .optional()
        .messages({
          'string.min': 'Invalid Street, it must contain at least 3 characters.',
          'string.pattern.base': 'Invalid Street, it must contain letters and numbers.',
        }),
    }),
    phoneNumber: Joi.string()
      .regex(/^[0-9\-+]{9,10}$/)
      .optional()
      .messages({
        'string.pattern.base':
          'Invalid Phone Number, it must only numbers and contain 9 or 10 characters.',
      }),
    email: Joi.string().email().min(7).optional().messages({
      'string.min': 'Invalid Email, it must contain at least 7 characters.',
      'string.email': 'Invalid Email must contain @ and .',
    }),
    isActive: Joi.boolean().optional(),
    logicDelete: Joi.boolean().optional(),
  });
  const validation = clientSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'There has been an error in the validation.',
      data: validation.error.details[0].message,
      error: true,
    });
  }
  return next();
};
