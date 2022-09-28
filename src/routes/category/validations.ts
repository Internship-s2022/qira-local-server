import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateCategory = (req: Request, res: Response, next: NextFunction) => {
  const categorySchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters',
        'string.max': 'Invalid name, it must not contain more than 50 characters',
        'string.pattern.base': 'Invalid name, it must contain only letters',
        'any.required': 'Category name is a required field',
      }),
    image: Joi.object({
      key: Joi.string().required(),
      url: Joi.string().required(),
    }).required(),
    isActive: Joi.boolean().required(),
    logicDelete: Joi.boolean().required(),
  });

  const validation = categorySchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'There has been an error in the validation',
      data: validation.error.details[0].message,
      error: true,
    });
  }
  return next();
};

const validateCategoryUpdate = (req: Request, res: Response, next: NextFunction) => {
  const categorySchema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .regex(/^([ \u00c0-\u01ffa-zA-Z'-])+$/)
      .messages({
        'string.min': 'Invalid name, it must contain at least 3 characters',
        'string.max': 'Invalid name, it must not contain more than 50 characters',
        'string.pattern.base': 'Invalid name, it must contain only letters',
      }),
    image: Joi.object({
      key: Joi.string(),
      url: Joi.string(),
    }),
    isActive: Joi.boolean(),
    logicDelete: Joi.boolean(),
  });

  const validation = categorySchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: 'There has been an error in the validation',
      data: validation.error.details[0].message,
      error: true,
    });
  }
  return next();
};

export default { validateCategory, validateCategoryUpdate };
