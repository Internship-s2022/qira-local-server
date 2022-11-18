import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const testMongoServer = new MongoMemoryServer();
let mongo: MongoMemoryServer;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await testMongoServer.stop();
  await mongo.stop();
});
