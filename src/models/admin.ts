import mongoose from 'mongoose';

const { Schema } = mongoose;

const adminSchema = new Schema({
  firebaseUid: { type: String, required: true },
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
  },
  logicDelete: {
    type: Boolean,
    required: true,
  },
});

export default adminSchema;
