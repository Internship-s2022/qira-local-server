import { InferSchemaType, model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: new Schema({
      base64: { type: String, required: true },
      name: { type: String, required: true },
      type: { type: String, required: true },
      isNew: { type: Boolean, required: true },
    }),
    required: true,
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
});

export type ICategory = InferSchemaType<typeof categorySchema>;

export default model('Category', categorySchema);
