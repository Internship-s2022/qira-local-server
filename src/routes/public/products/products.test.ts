import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import productModel from 'src/models/product';

import categoriesSeed from '../../../../seeders/data/develop/categories';
import productsSeeds from '../../../../seeders/data/develop/products';

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
  await productModel.insertMany(productsSeeds);
});

describe('/GET /public/products', () => {
  test('Response should return a status 200', async () => {
    const response = await request(app).get('/public/products').send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing active products.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});
