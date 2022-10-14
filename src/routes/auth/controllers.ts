import { Response } from 'express';

import { RequestWithFirebase } from 'src/interfaces';
import Admin from 'src/models/admin';
import Client from 'src/models/client';

export const getUser = async (req: RequestWithFirebase, res: Response) => {
  try {
    const admin = await Admin.findOne({
      firebaseUid: req.firebaseUid,
      logicDelete: false,
    });
    if (admin) {
      return res.status(200).json({
        message: 'Showing Admin Data',
        data: admin,
        error: false,
      });
    }
    const client = await Client.findOne({
      firebaseUid: req.firebaseUid,
      logicDelete: false,
    });
    if (client) {
      return res.status(200).json({
        message: 'Showing Client Data',
        data: client,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'User not found',
      data: undefined,
      error: true,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};
