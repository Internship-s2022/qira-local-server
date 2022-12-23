import { InferSchemaType, model, Schema } from 'mongoose';

const superAdminSchema = new Schema({
  firebaseUid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export type ISuperAdmin = InferSchemaType<typeof superAdminSchema>;

export default model('SuperAdmin', superAdminSchema);
