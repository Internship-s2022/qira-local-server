import admins from './admins';
import categories from './categories';
import categoriesImages from './categories/images';
import clients from './clients';
import firebaseUsers from './firebaseUsers';
import orders from './orders';
import ordersInvoices from './orders/invoices';
import ordersSignedInvoices from './orders/signed-invoices';
import ordersTransferReceipts from './orders/transfer-receipts';
import products from './products';
import productsFiles from './products/files';
import productsImages from './products/images';

export const files = {
  categories: {
    images: categoriesImages,
  },
  orders: {
    transferReceipts: ordersTransferReceipts,
    invoices: ordersInvoices,
    signedInvoices: ordersSignedInvoices,
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
