import Joi from 'joi';

export const clientSchema = Joi.object({
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{10,13}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Invalid Phone Number, it must only contain numbers and between 9 and 12 numeric characters.(There is an extra "-" character between area code and phone).',
      'any.required': 'Phone Number is a required field.',
    }),
});
