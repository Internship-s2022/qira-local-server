import { InferSchemaType, model, Schema } from 'mongoose';

const settingsSchema = new Schema({
  exchangeRate: {
    type: new Schema({
      value: { type: String, required: true },
      date: { type: String, required: true },
    }),
    required: true,
  },
});

export type ISettings = InferSchemaType<typeof settingsSchema>;

export default model('Settings', settingsSchema);
