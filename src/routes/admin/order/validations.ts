import Joi from 'joi';

export const invoiceSchema = Joi.object({
  invoice: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    base64: Joi.string().required(),
    isNew: Joi.boolean().required(),
  }).required(),
});

export const signedInvoiceSchema = Joi.object({
  signedInvoice: Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    base64: Joi.string().required(),
    isNew: Joi.boolean().required(),
  }).required(),
});
