import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const validateInvoiceOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderSchema = Joi.object({
    invoice: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      base64: Joi.string().required(),
      isNew: Joi.boolean().required(),
    }),
  });

  const validation = orderSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: validation.error.details[0].message,
      data: undefined,
      error: true,
    });
  }
  return next();
};

export const validateSignedInvoiceOrder = (req: Request, res: Response, next: NextFunction) => {
  const orderSchema = Joi.object({
    signedInvoice: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      base64: Joi.string().required(),
      isNew: Joi.boolean().required(),
    }),
  });

  const validation = orderSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({
      message: validation.error.details[0].message,
      data: undefined,
      error: true,
    });
  }
  return next();
};
