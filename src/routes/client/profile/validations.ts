import Joi from 'joi';

export const clientSchema = Joi.object({
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{8,11}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Invalid Phone Number, it must only numbers and contain between 8 and 11 characters.',
      'any.required': 'Phone Number is a required field.',
    }),
});
