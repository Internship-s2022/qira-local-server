import mongoose, { InferSchemaType, model, Schema } from 'mongoose';

import { Currency } from 'src/interfaces';

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
        key: { type: String, required: false },
        url: { type: String, required: false },
      }),
      required: false,
    },
    technicalFile: {
      type: new Schema({
        key: { type: String, required: false },
        url: { type: String, required: false },
      }),
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
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
      default: true,
    },
    logicDelete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

export type IProduct = InferSchemaType<typeof productSchema>;

export default model('Product', productSchema);
