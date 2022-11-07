import { InferSchemaType, model, Schema } from 'mongoose';

import { OrderState } from 'src/interfaces';

const orderSchema = new Schema(
  {
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
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
      required: true,
    },
    state: {
      type: String,
      enum: Object.values(OrderState),
      required: true,
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
          type: Number,
          required: true,
        },
        phoneNumber: {
          type: Number,
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
      type: Date,
      required: true,
    },
    payAuthDate: {
      type: Date,
      required: false,
    },
    deliverDate: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true },
);

export type IOrder = InferSchemaType<typeof orderSchema>;

export default model('Order', orderSchema);
