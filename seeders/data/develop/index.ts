import admins from './admins';
import categories from './categories';
import categoriesImages from './categories/images';
import clients from './clients';
import firebaseUsers from './firebaseUsers';
import orders from './orders';
import ordersFiles from './orders/files';
import products from './products';
import productsFiles from './products/files';
import productsImages from './products/images';

export const files = {
  categories: {
    images: categoriesImages,
  },
  orders: {
    files: ordersFiles,
  },
  products: {
    images: productsImages,
    files: productsFiles,
  },
};

export default {
  admins,
  categories,
  clients,
  firebaseUsers,
  orders,
  products,
};
