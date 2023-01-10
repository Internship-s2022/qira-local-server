import Joi from 'joi';

import { IvaCondition } from 'src/interfaces';

export const clientSchema = Joi.object({
  businessName: Joi.string()
    .regex(/^([0-9]*)(\s?[A-zÀ-úñ]+)(\s[0-9A-zÀ-úñ]+)*\s?$/)
    .min(3)
    .max(50)
    .trim()
    .required()
    .messages({
      'string.min': 'Invalid name, it must contain at least 3 characters.',
      'string.max': 'Invalid name, it must not contain more than 50 characters.',
      'any.required': 'Business Name is a required field.',
      'string.pattern.base': 'Invalid business name, it must contain only letters and numbers.',
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
      IvaCondition.registeredResponsible,
      IvaCondition.selfEmployment,
      IvaCondition.exempt,
      IvaCondition.finalConsumer,
    )
    .required()
    .messages({
      'any.required': 'Iva condition is a required field.',
      'string.valid': 'Only accept CONSUMIDOR_FINAL, EXENTO, RESPONSABLE_INSCRIPTO, MONOTRIBUTO.',
    }),
  address: Joi.object({
    province: Joi.string()
      .regex(/^([A-zÀ-úñ]+\s)*[A-zÀ-úñ]+$/)
      .min(3)
      .required()
      .messages({
        'string.min': 'Invalid Province, it must contain at least 3 characters.',
        'any.required': 'Province is a required field.',
        'string.pattern.base': 'Invalid Province, it must contain only letters.',
      }),
    city: Joi.string()
      .regex(/^([0-9A-zÀ-úñ]+\s)?([0-9A-zÀ-úñ]+\s*)*$/)
      .min(3)
      .required()
      .messages({
        'string.min': 'Invalid City, it must contain at least 3 characters.',
        'any.required': 'City is a required field.',
        'string.pattern.base': 'Invalid City, it must contain only letters or numbers.',
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
      .regex(/^([0-9]*)(\s?[A-zÀ-úñ]+)(\s[0-9A-zÀ-úñ]+)*\s?$/)
      .min(3)
      .required()
      .messages({
        'string.min': 'Invalid Street, it must contain at least 3 characters.',
        'string.pattern.base': 'Invalid Street, it must contain letters and numbers.',
        'any.required': 'Street is a required field.',
      }),
  }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{10,13}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Invalid Phone Number, it must only contain numbers and between 9 and 12 numeric characters.(There is an extra "-" character between area code and phone).',
      'any.required': 'Phone Number is a required field.',
    }),
  email: Joi.string().email().min(7).required().messages({
    'string.min': 'Invalid Email, it must contain at least 7 characters.',
    'any.required': 'Email is a required field.',
    'string.email': 'Invalid Email must contain @ and .',
  }),
  password: Joi.string().required(),
});

export const updateClientSchema = Joi.object({
  businessName: Joi.string()
    .regex(/^([0-9]*)(\s?[A-zÀ-ú]+)(\s[0-9A-zÀ-ú]+)*\s?$/)
    .min(3)
    .max(50)
    .trim()
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
      IvaCondition.registeredResponsible,
      IvaCondition.selfEmployment,
      IvaCondition.exempt,
      IvaCondition.finalConsumer,
    )
    .optional()
    .messages({
      'any.required': 'Iva condition is a required field.',
      'string.valid': 'Only accept CONSUMIDOR_FINAL, EXENTO, RESPONSABLE_INSCRIPTO, MONOTRIBUTO.',
    }),
  address: Joi.object({
    province: Joi.string()
      .regex(/^([A-zÀ-úñ]+\s)*[A-zÀ-úñ]+$/)
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
      .regex(/^([0-9]*)(\s?[A-zÀ-ú]+)(\s[0-9A-zÀ-ú]+)*\s?$/)
      .min(3)
      .optional()
      .messages({
        'string.min': 'Invalid Street, it must contain at least 3 characters.',
        'string.pattern.base': 'Invalid Street, it must contain letters and numbers.',
      }),
  }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{10,13}$/)
    .optional()
    .messages({
      'string.pattern.base':
        'Invalid Phone Number, it must only contain numbers and between 9 and 12 numeric characters.(There is an extra "-" character between area code and phone).',
    }),
  email: Joi.string().email().min(7).optional().messages({
    'string.min': 'Invalid Email, it must contain at least 7 characters.',
    'string.email': 'Invalid Email must contain @ and .',
  }),
});

export const updateClientPasswordSchema = Joi.object({
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
