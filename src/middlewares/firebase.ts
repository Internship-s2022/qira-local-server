import { NextFunction, Response } from 'express';

import { RequestWithFirebase, Role } from 'src/interfaces';

import firebase from '../helper/firebase';
import { CustomError } from './error-handler/custom-error.model';

export const authMiddleware =
  (role: Role) => async (req: RequestWithFirebase, res: Response, next: NextFunction) => {
    if (process.env.IS_TEST) {
      return next();
    }
    const { token } = req.headers;
    if (!token || typeof token !== 'string') {
      throw new CustomError(400, 'Token is required.');
    }
    const response = await firebase.auth().verifyIdToken(token);
    if (!response.role) {
      throw new CustomError(403, 'No credentials found.');
    }
    if (response.role !== role) {
      throw new CustomError(403, 'Credentials not authorized to access this information.');
    }
    req.firebaseUid = response.uid;
    return next();
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
      throw new CustomError(400, 'Something went wrong.');
    }
  };
