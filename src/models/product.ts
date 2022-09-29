import { InferSchemaType, model, Schema } from 'mongoose';

import Category from './category';
import { Currency } from './types';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: new Schema({
        key: { type: String, required: true },
        url: { type: String, required: true },
      }),
      required: true,
    },
    technicalFile: {
      type: new Schema({
        key: { type: String, required: true },
        url: { type: String, required: true },
      }),
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: new Category({}),
      required: true,
    },
    currency: {
      type: String,
      enum: Object.values(Currency),
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: false,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    logicDelete: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export type IProduct = InferSchemaType<typeof productSchema>;

export default model('Product', productSchema);
