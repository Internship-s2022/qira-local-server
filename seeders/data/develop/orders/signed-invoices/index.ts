import { IOrder } from '../../../../../src/models/order';
import { base64Encode, getFileNames } from '../../../../utils';
import data from '..';

const fileNames = getFileNames<IOrder>(data, 'signedInvoice');

const files = fileNames.map((file) => ({
  name: file,
  type: 'application/pdf',
  isNew: true,
  base64: base64Encode(__dirname, `./${file}`, 'application'),
}));

export default files;
