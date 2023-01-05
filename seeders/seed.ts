import dotenv from 'dotenv';
dotenv.config({ path: './seeders/.env' });

import flatten from 'lodash/flatten';
import get from 'lodash/get';
import { DeleteResult, InsertManyResult } from 'mongodb';

import s3 from '../src/helper/s3';
import config from './config';
import allData from './data';
import { Data } from './types';
import {
  addCollection,
  listAndAddAllUsers,
  listAndRemoveAllUsers,
  padMessage,
  removeCollection,
} from './utils';

export const env = process.env.ENV as keyof typeof allData | undefined;

if (!env) {
  console.log('There is no env configuration');
  process.exit();
}

const { admins, firebaseUsers, categories, clients, products, orders }: Data = allData[env];

const seedDatabase = async (endProcess = true) => {
  console.log('\x1b[36m', padMessage('-----------------------', ' '));
  console.log('\x1b[36m', padMessage('| Board configuration |'));
  console.log('\x1b[36m', padMessage('-----------------------', ' '));
  console.log('\x1b[36m'.padStart(10), 'Seeding env:', `\x1b[37m${env}\n`);

  Object.entries(config).forEach((item) => {
    if (typeof item[1] === 'boolean') {
      console.log(
        '\x1b[36m%s\x1b[1m'.padStart(15),
        `- ${item[0]}`.padEnd(25) +
          `${item[1] === true ? ` \x1b[32m${item[1]} ` : ` \x1b[31m${item[1]} `}`,
        '\x1b[0m',
      );
    } else if (typeof item[1] === 'object') {
      const label = Object.entries(item[1])
        .filter((subItem) => typeof subItem[1] === 'boolean')
        .map((subItem) =>
          subItem[1] === true ? ` \x1b[32m${subItem[0]} ` : ` \x1b[31m${subItem[0]} `,
        );
      if (label.length) {
        console.log(
          '\x1b[36m%s\x1b[1m'.padStart(15),
          `- ${item[0]}`.padEnd(25) + `\x1b[37m${label}`,
          '\x1b[0m',
        );
      }
    }
  });

  const data = { admins, categories, clients, products, orders };

  const awsBucket = process.env.AWS_BUCKET?.split('/')[0] || '';
  const s3Instance = s3.newS3();

  try {
    if (config.remove) {
      console.log();
      console.log('\x1b[36m', padMessage('⚡️ Removing previous data'));

      // ------------ REMOVE FIREBASE USERS ----------- [start]
      const removeFirebaseUsersPromises: Promise<void>[] = [];
      if (config.firebaseUsers.remove) {
        removeFirebaseUsersPromises.push(listAndRemoveAllUsers());
      }
      // ------------ REMOVE FIREBASE USERS -------- [end]

      // ------------ REMOVE S3 FILES ----------- [start]
      const listFilesPromises: Promise<any>[] = [];
      Object.values(config).forEach((resource) => {
        if (typeof resource === 'object' && 's3' in resource) {
          if (resource.remove) {
            resource.s3.forEach((file) => {
              const filesBucket = file.bucket?.split(`${awsBucket}/`)[1] || '';
              listFilesPromises.push(s3.listFiles(awsBucket, filesBucket, s3Instance));
            });
          }
        }
      });
      const listFiles = await Promise.all(listFilesPromises);
      const filesToRemove = flatten(listFiles.map(({ Contents }) => Contents));

      const removeFilesPromises =
        filesToRemove.length &&
        s3.deleteFiles(
          awsBucket,
          filesToRemove.map((file) => ({ Key: get(file, 'Key', '') })),
        );
      // ------------ REMOVE S3 FILES -------- [end]

      // ------------ REMOVE MONGODB COLLECTIONS -- [start]
      const promises: Promise<DeleteResult>[] = [];
      Object.values(config).forEach((resource) => {
        if (typeof resource === 'object' && 'collection' in resource) {
          removeCollection(promises, resource);
        }
      });
      // ------------ REMOVE MONGODB COLLECTIONS -- [end]

      await Promise.all([
        Promise.all(removeFirebaseUsersPromises),
        removeFilesPromises,
        Promise.all(promises),
      ]);

      console.log();
    }

    if (config.create) {
      // ------------ CREATE FIREBASE USERS ----------- [start]
      if (config.firebaseUsers.create) {
        console.log('\n\x1b[36m', padMessage('⚡️ Adding new data on Firebase'));
        await listAndAddAllUsers(firebaseUsers);
      }
      // ------------ CREATE FIREBASE USERS ----------- [end]

      // ------------ UPLOAD S3 FILES ----------- [start]
      const uploadFilesPromises: Promise<any>[] = [];
      Object.values(config).forEach((resource) => {
        if (typeof resource === 'object' && 's3' in resource) {
          if (resource.create) {
            resource.s3.forEach((fileType) => {
              fileType.files.forEach((file) => {
                uploadFilesPromises.push(s3.uploadFile(file, fileType.bucket || '', s3Instance));
              });
            });
          }
        }
      });
      // ------------ UPLOAD S3 FILES -------- [end]

      // ------------ UPLOAD MONGODB COLLECTIONS -- [start]
      console.log('\n\x1b[36m', padMessage('⚡️ Adding new data on Mongo'));
      const promises: Promise<InsertManyResult>[] = [];

      Object.entries(config).forEach(([key, resource]) => {
        if (typeof resource === 'object' && 'collection' in resource) {
          addCollection(promises, resource, data[key as keyof Omit<Data, 'firebaseUsers'>]);
        }
      });

      // ------------ UPLOAD MONGODB COLLECTIONS -- [end]

      await Promise.all([...promises, ...uploadFilesPromises]);

      console.log('\x1b[0m');
    }
    if (endProcess) process.exit();
  } catch (err) {
    console.log('\x1b[0m 🛑', err);
    if (endProcess) process.exit();
  }
};

export default seedDatabase;
