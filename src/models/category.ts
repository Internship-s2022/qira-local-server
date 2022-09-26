import { InferSchemaType, model, Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: new Schema({
      key: { type: String, required: true },
      url: { type: String, required: true },
    }),
    required: true,
  },
});

export type ICategory = InferSchemaType<typeof categorySchema>;

export default model('Category', categorySchema);
