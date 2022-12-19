import { Request, Response } from 'express';

import firebase from 'src/helper/firebase';
import { RequestWithFirebase, Role } from 'src/interfaces';
import Admin from 'src/models/admin';
import Client, { IClient } from 'src/models/client';

export const getUser = async (req: RequestWithFirebase, res: Response) => {
  const { token } = req.headers;
  if (!token || typeof token !== 'string') {
    throw new Error('Token is required.');
  }

  const response = await firebase.auth().verifyIdToken(token);
  if (!response.role) {
    throw new Error('No credentials found.');
  }
  if (response.role === Role.ADMIN) {
    const admin = await Admin.findOne({
      firebaseUid: response.uid,
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
      firebaseUid: response.uid,
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
  throw new Error('User not found.');
};

export const createClient = async (req: Request<any, any, IClient>, res: Response) => {
  const client = new Client(req.body);
  const result = await client.save();

  if (!result) {
    throw new Error('There has been an error creating the client.');
  }

  return res.status(201).json({
    message: 'Client created successfully.',
    data: result,
    error: false,
  });
};
