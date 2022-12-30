import 'express-async-errors';
import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import clientModel from 'src/models/client';
import orderModel from 'src/models/order';
import productModel from 'src/models/product';

import categorySeeds from '../../../../seeders/develop/categories';
import clientSeeds from '../../../../seeders/develop/clients';
import orderSeeds from '../../../../seeders/develop/orders';
import productSeeds from '../../../../seeders/develop/products';

const url = '/client/orders';
const stockProduct = [
  {
    product: {
      _id: '633db2570b76198b1fb9e911',
      name: 'test',
      description: 'test',
      price: 6000,
      image: {
        key: 'test',
        url: 'test',
      },
      technicalFile: {
        key: 'randomKey',
        url: 'randomKey.jpg',
      },
      brand: 'test',
      category: '63617504bc1a382119d49e4b',
      currency: 'DOLLAR',
      stock: 50,
      isNew: true,
      isActive: true,
      logicDelete: false,
    },
    quantity: 100000,
  },
];
const testOrder = {
  products: [
    {
      product: {
        _id: '633db2570b76198b1fb9e911',
        name: 'test',
        description: 'test',
        price: 6000,
        image: {
          key: 'test',
          url: 'test',
        },
        technicalFile: {
          key: 'randomKey',
          url: 'randomKey.jpg',
        },
        brand: 'test',
        category: '63617504bc1a382119d49e4b',
        currency: 'DOLLAR',
        stock: 49,
        isNew: true,
        isActive: true,
        logicDelete: false,
      },
      quantity: 1,
    },
  ],
  client: '636d11d68a2997f1b06fd387',
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
    name: 'test',
    type: 'test',
    base64: 'test',
    isNew: true,
  },
  amounts: { products: 6000, taxes: 1260, total: 7260 },
  exchangeRate: 160,
  estimatedDeliveryDate: '10-10-2022',
};

beforeAll(async () => {
  await productModel.insertMany(productSeeds);
  await categoryModel.insertMany(categorySeeds);
  await clientModel.insertMany(clientSeeds);
  await orderModel.insertMany(orderSeeds);
});

describe('/GET /client/orders', () => {
  test('Response should return all orders & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing client orders.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('/POST /client/orders', () => {
  test('Response should return the new order and  status 201 when the body is correct', async () => {
    const response = await request(app).post(`${url}`).send(testOrder);
    expect(response.status).toBe(201);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Order created successfully.');
    expect(response.body.data.products.length).toBeGreaterThan(0);
    expect(response.body.data.client).toEqual(testOrder.client);
    expect(response.body.data.authorized.length).toBeGreaterThan(0);
  });
  test('Response should return error message and  status 404 when the product list is empty', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({ ...testOrder, products: [] });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      'There has been an error in the validation. Invalid array, it must have at least 1 product.',
    );
  });
  test('Response should return error message and  status 404 when the client id is wrong', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({ ...testOrder, client: '628cf237305204bf7d672d7c' });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      'Could not find a client by the id of 628cf237305204bf7d672d7c.',
    );
  });
  test('Response should return error message and  status 400 when the total amounts is wrong', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({ ...testOrder, amounts: { products: 12, taxes: 12, total: 123 } });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('There has been an error during price calculation.');
  });
  test('Response should return error message and  status 400 when there is no stock', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({ ...testOrder, products: stockProduct });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('There is no stock left.');
  });
});
