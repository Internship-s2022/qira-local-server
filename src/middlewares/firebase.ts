import { NextFunction, Response } from 'express';

import { RequestWithFirebase, Role } from 'src/interfaces';

import firebase from '../helper/firebase';

export const authMiddleware =
  (role: Role) => async (req: RequestWithFirebase, res: Response, next: NextFunction) => {
    if (process.env.IS_TEST) {
      return next();
    }

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
      if (response.role !== role) {
        return res.status(403).json({
          message: 'Credentials not authorized to access this information',
          data: undefined,
          error: true,
        });
      }
      req.firebaseUid = response.uid;
      return next();
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
        data: undefined,
        error: true,
      });
    }
  };

export const createFirebaseUser =
  (role: Role) => async (req: RequestWithFirebase, res: Response, next: NextFunction) => {
    let firebaseUid;
    try {
      const newFirebaseUser = await firebase.auth().createUser({
        email: req.body.email,
        password: req.body.password,
      });
      firebaseUid = newFirebaseUser.uid;
      await firebase.auth().setCustomUserClaims(firebaseUid, { role });
      delete req.body.password;
      req.body.firebaseUid = firebaseUid;
      next();
    } catch (error: any) {
      if (firebaseUid) {
        await firebase.auth().deleteUser(firebaseUid);
      }
      return res.status(400).json({
        message: error.message,
        data: undefined,
        error: true,
      });
    }
  };
