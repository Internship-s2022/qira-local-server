import { Request, Response } from 'express';

import firebase from 'src/helper/firebase';
import { RequestWithFirebase, Role } from 'src/interfaces';
import Admin from 'src/models/admin';
import Client, { IClient } from 'src/models/client';

export const getUser = async (req: RequestWithFirebase, res: Response) => {
  const { token } = req.headers;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ message: 'Token is required' });
  }
  try {
    const response = await firebase.auth().verifyIdToken(token);
    if (!response.role) {
      return res.status(403).json({
        message: 'No credentials found',
        data: undefined,
        error: true,
      });
    }
    if (response.role === Role.ADMIN) {
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
    }
    if (response.role === Role.CLIENT) {
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

export const createClient = async (req: Request<any, any, IClient>, res: Response) => {
  try {
    const client = new Client(req.body);
    const result = await client.save();
    return res.status(201).json({
      message: 'Client created successfully.',
      data: result,
      error: false,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
      data: undefined,
      error: true,
    });
  }
};
