import { replaceTest } from '../../../utils';
import developProducts from '../../develop/products';

const products = developProducts.map((product) => ({
  ...product,
  image: {
    key: replaceTest(product.image.key),
    url: replaceTest(product.image.url),
  },
  technicalFile: product.technicalFile && {
    key: replaceTest(product.technicalFile.key),
    url: replaceTest(product.technicalFile.url),
  },
}));

export default products;
