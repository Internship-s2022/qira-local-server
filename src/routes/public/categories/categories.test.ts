import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';

import categoriesSeed from '../../../../seeders/develop/categories';

const url = '/public/categories';

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
});

describe(`/GET ${url}`, () => {
  test('Response should return all categories & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing active categories.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});
