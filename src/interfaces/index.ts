import { Request } from 'express';

export interface RequestWithFirebase extends Request {
  firebaseUid?: string;
}

export enum IvaCondition {
  registeredResponsible = 'RESPONSABLE_INSCRIPTO',
  selfEmployment = 'MONOTRIBUTO',
  exempt = 'EXENTO',
  finalConsumer = 'CONSUMIDOR_FINAL',
}

export enum Currency {
  DOLLAR = 'DOLLAR',
  PESO = 'PESO',
}

export enum Role {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
}

export interface Base64File {
  name: string;
  type: string;
  base64: string;
  isNew?: boolean;
}
