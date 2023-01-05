import { Response } from 'express';

import firebase from 'src/helper/firebase';
import { RequestWithFirebase } from 'src/interfaces';
import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Client from 'src/models/client';

export const updateClientInformation = async (req: RequestWithFirebase, res: Response) => {
  const user = await Client.findOne({ firebaseUid: req.firebaseUid });
  if (!user) {
    throw new CustomError(400, 'Something went wrong.');
  }
  const userUpdated = await Client.findOneAndUpdate(
    { _id: user._id },
    { phoneNumber: req.body.phoneNumber },
    { new: true },
  );
  if (!userUpdated) {
    throw new CustomError(400, 'Something went wrong.');
  }
  return res.status(200).json({
    message: 'User updated successfully.',
    data: userUpdated,
    error: false,
  });
};
export const updatePassword = async (req: RequestWithFirebase, res: Response) => {
  const result = await firebase
    .auth()
    .updateUser(req.firebaseUid || '', { password: req.body.password });
  if (!result) {
    throw new CustomError(400, 'Something went wrong.');
  }
  return res.status(200).json({
    message: 'Password updated successfully.',
    data: result,
    error: false,
  });
};
