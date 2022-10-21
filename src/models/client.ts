import { InferSchemaType, model, Schema } from 'mongoose';

import { IvaCondition } from 'src/interfaces';

const clientSchema = new Schema({
  businessName: {
    type: String,
    required: true,
  },
  cuit: {
    type: String,
    required: true,
  },
  ivaCondition: {
    type: String,
    enum: Object.values(IvaCondition),
    required: true,
  },
  address: {
    type: new Schema({
      province: { type: String, required: true },
      city: { type: String, required: true },
      zipCode: { type: String, required: true },
      street: { type: String, required: true },
    }),
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
    required: true,
  },
  logicDelete: {
    type: Boolean,
    default: false,
    required: true,
  },
  firebaseUid: {
    type: String,
    required: true,
  },
});

export type IClient = InferSchemaType<typeof clientSchema>;

export default model('Client', clientSchema);
