import 'express-async-errors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './app';

dotenv.config();

const port = process.env.PORT;
const URL = process.env.DATABASE_URL || '';

mongoose.connect(URL, (error) => {
  if (error) {
    console.log('Fail to connect', error);
  } else {
    app.listen(port, () => {
      console.log(`⚡️ Server is running at http://localhost:${port} ✅`);
    });
    console.log('Connected to database');
  }
});
