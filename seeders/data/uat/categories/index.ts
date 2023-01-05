import { replaceUat } from '../../../utils';
import developCategories from '../../develop/categories';

const categories = developCategories.map((category) => ({
  ...category,
  image: {
    key: replaceUat(category.image.key),
    url: replaceUat(category.image.url),
  },
}));

export default categories;
