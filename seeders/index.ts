import dotenv from 'dotenv';
dotenv.config({ path: './seeders/.env' });

import firebaseAdmin from 'firebase-admin';
import mongoose from 'mongoose';

import seedDatabase from './seed';
import { padMessage } from './utils';

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
});

const MONGO_URL = process.env.DATABASE_URL || '';

(async () => {
  await mongoose.connect(MONGO_URL);
  console.log('\n\x1b[36m', padMessage('🚀 Database connected'), '\n');

  seedDatabase();
})();
