import { Request } from 'express';

export interface RequestWithFirebase extends Request {
  firebaseUid?: string;
}
