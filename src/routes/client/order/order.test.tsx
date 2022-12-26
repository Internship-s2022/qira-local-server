import 'express-async-errors';
import mongoose from 'mongoose';
import clients from 'seeders/develop/clients';
import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import clientModel from 'src/models/client';
import productModel from 'src/models/product';
import categorySeeds from 'src/seeders/develop/categories';
import clientSeeds from 'src/seeders/develop/clients';
import productSeeds from 'src/seeders/develop/products';

const url = '/admin/orders';
let orderId: string;
const wrongID = '628cf237305204bf7d672d7c';
// const logicDeletedID = '636567c722ab6362ab13895f';
const testOrder = {
  products: [
    {
      product: {
        _id: new mongoose.Types.ObjectId('633db2570b76198b1fb9e911'),
        name: 'test',
        description: 'test',
        price: 2000,
        image: {
          key: 'test',
          url: 'test',
        },
        technicalFile: {
          key: 'test',
          url: 'test',
        },
        brand: 'test',
        category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
        currency: 'DOLLAR',
        stock: 49,
        isNew: true,
        isActive: true,
        logicDelete: false,
      },
      quantity: 1,
    },
  ],
  client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
  authorized: [
    {
      firstName: 'test',
      lastName: 'test',
      dni: '42331778',
      phoneNumber: '3416133037',
    },
    {
      firstName: 'test',
      lastName: 'test',
      dni: '42331778',
      phoneNumber: '3416133037',
    },
  ],
  payment: {
    key: 'test',
    url: 'test',
  },
  amounts: {
    products: 320123,
    taxes: 67225.83,
    total: 387348.83,
  },
  exchangeRate: 160,
  orderDate: '2022-10-31T13:33:22.372Z',
};

beforeAll(async () => {
  await productModel.insertMany(productSeeds);
  await categoryModel.insertMany(categorySeeds);
  await clientModel.insertMany(clientSeeds);
});

describe('/GET /admin/orders', () => {
  test('Response should return all orders & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    console.log('response: ', response);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    // expect(response.body.message).toEqual('Showing Products.');
    // expect(response.body.data.length).toBeGreaterThan(0);
  });
});
