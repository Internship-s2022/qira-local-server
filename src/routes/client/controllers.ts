import { Response } from 'express';

import { RequestWithFirebase } from 'src/interfaces';
import Client from 'src/models/client';

export const getClientData = async (req: RequestWithFirebase, res: Response) => {
  try {
    const clientData = await Client.findOne({
      firebaseUid: req.firebaseUid,
      logicDelete: false,
    });
    return res.status(200).json({
      message: 'Showing Client Data',
      data: clientData,
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
