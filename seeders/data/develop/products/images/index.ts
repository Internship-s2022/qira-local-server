import { IProduct } from '../../../../../src/models/product';
import { base64Encode, getFileNames } from '../../../../utils';
import data from '..';

const fileNames = getFileNames<IProduct>(data, 'image');

const files = fileNames.map((file) => ({
  name: file,
  type: 'image/png',
  isNew: true,
  base64: base64Encode(__dirname, `./${file}`, 'image'),
}));

export default files;
