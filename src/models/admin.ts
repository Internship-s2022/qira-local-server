import { InferSchemaType, model, Schema } from 'mongoose';

const adminSchema = new Schema({
  firebaseUid: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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

export type IAdmin = InferSchemaType<typeof adminSchema>;

export default model('Admin', adminSchema);
