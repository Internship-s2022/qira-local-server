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

export enum SubCodes {
  CATEGORY_WITH_PRODUCTS = 1,
  INCORRECT_ORDER_STATE = 2,
  DELIVERED_ORDER = 3,
  INCORRECT_DNI = 4,
  CLIENT_NOT_FOUND = 5,
  NO_STOCK = 6,
  INCORRECT_PRICES = 7,
  CANNOT_UPDATE_STOCK = 8,
}

export interface Base64File {
  name: string;
  type: string;
  base64: string;
  isNew?: boolean;
}
