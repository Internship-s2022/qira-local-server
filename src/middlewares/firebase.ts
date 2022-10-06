import { NextFunction, Response } from 'express';

import { RequestWithFirebase } from 'src/interfaces';

import firebase from '../helper/firebase';

export const authMiddleware = (req: RequestWithFirebase, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  if (!token || typeof token !== 'string') {
    return res.status(400).json({ message: 'Authentication failed' });
  }
  return firebase
    .auth()
    .verifyIdToken(token)
    .then((response) => {
      req.firebaseUid = response.uid;
      next();
    })
    .catch((error) => {
      res.status(401).json({ message: error.toString() });
    });
};

export const createFirebaseUser =
  (role: string) => async (req: RequestWithFirebase, res: Response, next: NextFunction) => {
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
