import firebaseAdmin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import fs from 'fs';
import _ from 'lodash';
import { DeleteResult, Document, InsertManyResult, OptionalUnlessRequiredId } from 'mongodb';
import { Collection } from 'mongoose';
import path from 'path';

import { FirebaseUser } from './types';

export const padMessage = (message: string, char = '-', startLength = 20, endLength = 45) => {
  return '|'.padEnd(startLength, char) + ` ${message} `.padEnd(endLength, char) + '|';
};

export const listAndRemoveAllUsers = async (nextPageToken?: string) => {
  try {
    const listUsersResult = await firebaseAdmin.auth().listUsers(1000, nextPageToken);
    const usersUids = listUsersResult.users.map((userRecord) => userRecord.uid);
    const usersRemoved = await firebaseAdmin.auth().deleteUsers(usersUids);
    usersRemoved.errors.forEach((err) => {
      console.log('Error while removing: ', err.error.toJSON());
    });
    if (listUsersResult.pageToken) {
      await listAndRemoveAllUsers(listUsersResult.pageToken);
    }
    console.log('\x1b[37m', padMessage('🚀 Firebase Users Removed'));
  } catch (error) {
    console.log('\x1b[31m', '🛑 Error listing users:', '\x1b[0m', error);
    throw error;
  }
};

const usersPerChunk = 20;

export const addUsers = async (users: FirebaseUser[], timeout: number, chunk: number) => {
  return new Promise((resolve: (value: UserRecord[]) => void, reject) =>
    setTimeout(async () => {
      try {
        const responses = await Promise.all(
          users.map(async (user, i) => {
            console.log(
              '\x1b[36m',
              padMessage(`User ${chunk * usersPerChunk + i + 1}: ${user.email}`, '-', 10, 55),
            );
            const userCreated = await firebaseAdmin.auth().createUser({ ...user });
            await firebaseAdmin.auth().setCustomUserClaims(userCreated.uid, {
              role: user.role,
            });
            return userCreated;
          }),
        );
        resolve(responses);
      } catch (error) {
        console.log('\x1b[31m', `🛑 Error adding chunk of users: ${chunk} \n`, '\x1b[0m', error);
        reject(error);
      }
    }, timeout),
  );
};

export const listAndAddAllUsers = async (firebaseUsers: FirebaseUser[]) => {
  try {
    let timeout = 0;
    let users: UserRecord[] = [];
    const chunkedFirebaseUsers = _.chunk(firebaseUsers, usersPerChunk);
    for (let i = 0; i < chunkedFirebaseUsers.length; i++) {
      timeout = timeout + 200;
      console.log('\x1b[37m', padMessage(`⚡️ Chunk of users ${i + 1}`, '-'));
      const newUsers = await addUsers(chunkedFirebaseUsers[i], timeout, i);
      users = [...users, ...newUsers];
    }
    console.log('\n\x1b[37m', padMessage('🚀 Firebase Users Added'));
    return users;
  } catch (error) {
    console.log('\x1b[31m', '🛑 Error adding users', '\x1b[0m', error);
    throw error;
  }
};

type ResourceConfig<TDoc extends Document> = {
  remove: boolean;
  create: boolean;
  collection: Collection<TDoc>;
  message: string;
};

export const removeCollection = <TDoc extends Document>(
  promises: Promise<DeleteResult>[],
  resource: ResourceConfig<TDoc>,
) => {
  if (resource.remove) {
    promises.push(resource.collection.deleteMany({}));
    console.log('\x1b[37m', padMessage(`🚀 ${resource.message} removed`));
  }
};

export const addCollection = <TDoc extends Document>(
  promises: Promise<InsertManyResult<TDoc>>[],
  resource: ResourceConfig<TDoc>,
  data: OptionalUnlessRequiredId<TDoc>[],
) => {
  if (resource.create) {
    promises.push(resource.collection.insertMany(data));
    console.log('\x1b[37m', padMessage(`🚀 ${resource.message} added`));
  }
};

export const base64Encode = (dir: string, file: string, type: string) => {
  const filePath = path.resolve(dir, file);
  const format = path.extname(filePath).replace('.', '');
  const body = fs.readFileSync(filePath);
  return `data:${type}/${format};base64,${body.toString('base64')}`;
};

export const replaceTest = (value: string) => {
  return value?.replace('develop/', 'test/');
};

export const replaceUat = (value: string) => {
  return value?.replace('develop/', 'uat/');
};

export const getFileNames = <T>(data: T[], field: keyof T) => {
  return data
    .map((item) => {
      const value = item[field] as { key?: string };
      return value.key?.split('/')[2] || '';
    })
    .filter((item) => item);
};
