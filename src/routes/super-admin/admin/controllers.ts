import { Request, Response } from 'express';

import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Admin, { IAdmin } from 'src/models/admin';

export const createAdmin = async (req: Request<any, any, IAdmin>, res: Response) => {
  const admin = new Admin(req.body);
  const result = await admin.save();

  if (!result) {
    throw new CustomError(500, 'There has been an error creating the admin.');
  }

  return res.status(201).json({
    message: 'Admin created successfully.',
    data: result,
    error: false,
  });
};
