import { Request } from 'express';

import { IProduct } from 'src/models/product';

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

export enum OrderState {
  APPROVE_PENDING = 'APPROVE_PENDING',
  DELIVERY_PENDING = 'DELIVERY_PENDING',
  DELIVERED = 'DELIVERED',
  REJECTED = 'REJECTED',
}

export interface Base64File {
  name: string;
  type: string;
  base64: string;
  isNew?: boolean;
}

export interface OrderProduct {
  product: IProduct;
  quantity: number;
}

export interface Amounts {
  products: number;
  taxes: number;
  total: number;
}

export interface Authorized {
  firstName: string;
  lastName: string;
  dni: number;
  phoneNumber: number;
}
