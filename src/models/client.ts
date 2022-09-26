import { InferSchemaType, model, Schema } from 'mongoose';

import { IvaCondition } from './types';

const clientSchema = new Schema({
  businessName: {
    type: String,
    required: true,
  },
  cuit: {
    type: Number,
    required: true,
  },
  ivaCondition: {
    type: String,
    default: IvaCondition.RESPONSABLE_INSCRIPTO,
    enum: Object.values(IvaCondition),
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
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
});

export type IAdmin = InferSchemaType<typeof clientSchema>;

export default model('Client', clientSchema);
