import { replaceUat } from '../../../utils';
import developProducts from '../../develop/products';

const products = developProducts.map((product) => ({
  ...product,
  image: {
    key: replaceUat(product.image.key),
    url: replaceUat(product.image.url),
  },
  technicalFile: product.technicalFile && {
    key: replaceUat(product.technicalFile.key),
    url: replaceUat(product.technicalFile.url),
  },
}));

export default products;
