import Joi from 'joi';

export const categorySchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .messages({
      'string.min': 'Invalid name, it must contain at least 3 characters.',
      'string.max': 'Invalid name, it must not contain more than 50 characters.',
      'string.pattern.base': 'Invalid name, it must contain only letters.',
      'any.required': 'Category name is a required field.',
    }),
  image: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    base64: Joi.string().required(),
    isNew: Joi.boolean().required(),
  }).required(),
  url: Joi.string()
    .regex(/^([a-z-]*)$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid url, it must contain only lower case and -.',
      'any.required': 'Url is a required field.',
    }),
});

export const updateCategorySchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .messages({
      'string.min': 'Invalid name, it must contain at least 3 characters.',
      'string.max': 'Invalid name, it must not contain more than 50 characters.',
      'string.pattern.base': 'Invalid name, it must contain only letters.',
    }),
  image: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    base64: Joi.string().required(),
    isNew: Joi.boolean().required(),
  }),
  url: Joi.string()
    .regex(/^([a-z-]*)$/)
    .messages({
      'string.pattern.base': 'Invalid url, it must contain only lower case and -.',
      'any.required': 'Url is a required field.',
    }),
});
