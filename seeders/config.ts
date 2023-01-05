import dotenv from 'dotenv';
dotenv.config({ path: './seeders/.env' });

import Admin from '../src/models/admin';
import Category from '../src/models/category';
import Client from '../src/models/client';
import Order from '../src/models/order';
import Product from '../src/models/product';
import { files } from './data';

export const env = process.env.ENV as keyof typeof files | undefined;

const { categories, products, orders } = files[env || 'develop'];

const config = {
  // -- GLOBAL --
  remove: true,
  create: true,
  // -- FIREBASE --
  firebaseUsers: {
    remove: true,
    create: true,
  },
  // -- MONGO --
  admins: {
    remove: true,
    create: true,
  },
  categories: {
    remove: true,
    create: true,
  },
  clients: {
    remove: true,
    create: true,
  },
  orders: {
    remove: true,
    create: true,
  },
  products: {
    remove: true,
    create: true,
  },
};

export default {
  ...config,
  admins: {
    ...config.admins,
    collection: Admin.collection,
    message: 'Admins',
  },
  categories: {
    ...config.categories,
    collection: Category.collection,
    s3: [
      {
        bucket: process.env.AWS_BUCKET_CATEGORIES_IMAGES,
        files: categories.images,
      },
    ],
    message: 'Categories',
  },
  clients: {
    ...config.clients,
    collection: Client.collection,
    message: 'Clients',
  },
  orders: {
    ...config.orders,
    collection: Order.collection,
    s3: [
      {
        bucket: process.env.AWS_BUCKET_TRANSFER_RECEIPTS,
        files: orders.transferReceipts,
      },
      {
        bucket: process.env.AWS_BUCKET_ORDER_INVOICE,
        files: orders.invoices,
      },
      {
        bucket: process.env.AWS_BUCKET_ORDER_SIGNED_INVOICE,
        files: orders.signedInvoices,
      },
    ],
    message: 'Orders',
  },
  products: {
    ...config.products,
    collection: Product.collection,
    s3: [
      {
        bucket: process.env.AWS_BUCKET_PRODUCTS_IMAGES,
        files: products.images,
      },
      {
        bucket: process.env.AWS_BUCKET_PRODUCTS_TECHNICAL_FILE,
        files: products.files,
      },
    ],
    message: 'Products',
  },
};
