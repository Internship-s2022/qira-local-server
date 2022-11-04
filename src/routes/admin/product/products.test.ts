import mongoose from 'mongoose';
import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import productModel from 'src/models/product';
import categoriesSeed from 'src/seeds/categories';
import productsSeeds from 'src/seeds/products';

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
  await productModel.insertMany(productsSeeds);
});

describe('/GET /admin/product', () => {
  test('Response should return a status 200', async () => {
    const response = await request(app).get('/admin/product').send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Products.');
    expect(response.body.data.length).toBeGreaterThan(0);
    console.log(response.body.data);
  });
});
