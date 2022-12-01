import { Response } from 'express';

import { RequestWithFirebase } from 'src/interfaces';
import Client from 'src/models/client';

export const updateClientInformation = async (req: RequestWithFirebase, res: Response) => {
  try {
    const user = await Client.findOne({ firebaseUid: req.firebaseUid });
    if (!user) {
      return res.status(400).json({
        message: 'Something went wrong',
        data: undefined,
        error: true,
      });
    }
    const userUpdated = await Client.findOneAndUpdate(
      { _id: user._id },
      { phoneNumber: req.body.phoneNumber },
      { new: true },
    );
    if (!userUpdated) {
      return res.status(400).json({
        message: 'Something went wrong',
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'User updated successfully.',
      data: userUpdated,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};
