import { InferSchemaType, model, Schema } from 'mongoose';
import { customAlphabet } from 'nanoid';

import { IProduct } from './product';

export enum OrderState {
  APPROVE_PENDING = 'APPROVE_PENDING',
  DELIVERY_PENDING = 'DELIVERY_PENDING',
  DELIVERED = 'DELIVERED',
  REJECTED = 'REJECTED',
}

interface Product extends IProduct {
  _id: string;
}

export interface OrderProduct {
  product: Product;
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

const customNanoId = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 8);

const orderSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => customNanoId(),
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    client: {
      type: Schema.Types.ObjectId,
      ref: 'Client',
    },
    state: {
      type: String,
      enum: Object.values(OrderState),
      required: true,
      default: OrderState.APPROVE_PENDING,
    },
    authorized: [
      {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        dni: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
      },
    ],
    invoice: {
      type: new Schema({
        key: { type: String, required: true },
        url: { type: String, required: true },
      }),
      required: false,
    },
    signedInvoice: {
      type: new Schema({
        key: { type: String, required: true },
        url: { type: String, required: true },
      }),
      required: false,
    },
    amounts: {
      products: {
        type: Number,
        required: true,
      },
      taxes: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
    },
    payment: {
      type: new Schema({
        key: { type: String, required: true },
        url: { type: String, required: true },
      }),
      required: false,
    },
    exchangeRate: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    payAuthDate: {
      type: String,
      required: false,
    },
    deliverDate: {
      type: String,
      required: false,
    },
    estimatedDeliveryDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export type IOrder = InferSchemaType<typeof orderSchema>;

export default model('Order', orderSchema);
