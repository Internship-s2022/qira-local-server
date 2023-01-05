import { IProduct } from '../../../../../src/models/product';
import { base64Encode, getFileNames } from '../../../../utils';
import data from '..';

const fileNames = getFileNames<IProduct>(data, 'technicalFile');

const files = fileNames.map((file) => ({
  name: file,
  type: 'application/pdf',
  isNew: true,
  base64: base64Encode(__dirname, `./${file}`, 'application'),
}));

export default files;
