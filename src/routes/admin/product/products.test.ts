import mongoose from 'mongoose';
import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import productModel from 'src/models/product';
import categoriesSeed from 'src/seeds/categories';
import productsSeeds from 'src/seeds/products';

const url = '/admin/product';
const productID = '636534e7b1c86f2d04240078';
const wrongID = '628cf237305204bf7d672d7c';
const logicDeletedID = '636567c722ab6362ab13895f';

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
  await productModel.insertMany(productsSeeds);
});

describe(`/GET ${url}`, () => {
  test('Response should return all products & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Products.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe(`/GET ${url}/:id`, () => {
  test('Response should return one product & return status 200', async () => {
    const response = await request(app).get(`${url}/${productID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(`Showing the product by the id of ${productID}.`);
    expect(response.body.data._id).toEqual(productID);
  });

  test('Response should return error with a wrong id', async () => {
    const response = await request(app).get(`${url}/${wrongID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find a product by the id of ${wrongID}.`);
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/inactivate/:id`, () => {
  test('Response should inactivate a product & return status 200', async () => {
    const response = await request(app).patch(`${url}/inactivate/${productID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Product updated successfully.');
    expect(response.body.data.isActive).toBe(false);
  });

  test('Response should return error with already inactive id', async () => {
    const response = await request(app).patch(`${url}/inactivate/${logicDeletedID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Products with Id ${logicDeletedID} does not exist or is already inactive.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/activate/:id`, () => {
  test('Response should activate a product & return status 200', async () => {
    const response = await request(app).patch(`${url}/activate/${productID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Product updated successfully.');
    expect(response.body.data.isActive).toBe(true);
  });

  test('Response should return error with already active id', async () => {
    const response = await request(app).patch(`${url}/activate/${productID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Products with Id ${productID} does not exist or is already active.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/delete/:id`, () => {
  test('Response should logic delete a product & return status 200', async () => {
    const response = await request(app).patch(`${url}/delete/${productID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Product deleted successfully.');
    expect(response.body.data.logicDelete).toBe(true);
  });

  test('Response should return error with already deleted id', async () => {
    const response = await request(app).patch(`${url}/delete/${logicDeletedID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Could not find a product by the id of ${logicDeletedID}.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});
