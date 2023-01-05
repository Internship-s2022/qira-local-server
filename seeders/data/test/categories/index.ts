import { replaceTest } from '../../../utils';
import developCategories from '../../develop/categories';

const categories = developCategories.map((category) => ({
  ...category,
  image: {
    key: replaceTest(category.image.key),
    url: replaceTest(category.image.url),
  },
}));

export default categories;
