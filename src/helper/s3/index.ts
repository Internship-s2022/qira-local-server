import AWS from 'aws-sdk';

import { Base64File } from 'src/interfaces';

const newS3 = () =>
  new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

const uploadFile = async (file: Base64File, bucket: string, instance?: AWS.S3) => {
  const s3 = instance || newS3();
  const buf = Buffer.from(file.base64.split(',')[1], 'base64');
  const params = {
    Bucket: bucket,
    ACL: 'public-read',
    Key: file.name,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: file.type,
  };
  return s3.upload(params).promise();
};

const deleteFile = async (key: string, bucket: string, instance?: AWS.S3) => {
  const s3 = instance || newS3();
  return s3.deleteObject({ Key: key, Bucket: bucket }).promise();
};

const deleteFiles = async (bucket: string, objects: { Key: string }[], instance?: AWS.S3) => {
  const s3 = instance || newS3();
  return s3.deleteObjects({ Bucket: bucket, Delete: { Objects: objects } }).promise();
};

const listFiles = async (bucket: string, path: string, instance?: AWS.S3) => {
  const s3 = instance || newS3();
  return s3.listObjects({ Bucket: bucket, Prefix: path }).promise();
};

const replaceFile = async (newFile: Base64File, oldFileKey: string, bucket: string) => {
  const s3 = newS3();
  await deleteFile(oldFileKey, bucket, s3);
  return uploadFile(newFile, bucket, s3);
};

export default {
  newS3,
  uploadFile,
  deleteFile,
  deleteFiles,
  listFiles,
  replaceFile,
};
