import 'express-async-errors';
import mongoose from 'mongoose';
import request from 'supertest';

import app from 'src/app';
import { Currency } from 'src/interfaces';
import categoryModel from 'src/models/category';
import productModel from 'src/models/product';
import categoriesSeed from 'src/seeders/develop/categories';
import productsSeeds from 'src/seeders/develop/products';

const url = '/admin/product';
let productID: string;
const wrongID = '628cf237305204bf7d672d7c';
const logicDeletedID = '636567c722ab6362ab13895f';
const testProduct = {
  name: 'Producto de test',
  description: 'This is a description',
  price: 6000,
  image: {
    name: 'f',
    type: 'f',
    base64: 'f',
    isNew: true,
  },
  technicalFile: {
    name: 'f',
    type: 'f',
    base64: 'f',
    isNew: true,
  },
  brand: 'Qira',
  category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
  currency: Currency.PESO,
  stock: 100,
  isNew: true,
};
const testProductUpdated = {
  name: 'Producto de prueba modificado',
  description: 'This is a description updated',
  price: 700,
  image: {
    name: 'f',
    type: 'f',
    base64: 'f',
    isNew: true,
  },
  technicalFile: {
    name: 'f',
    type: 'f',
    base64: 'f',
    isNew: true,
  },
  brand: 'Marca',
  category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
  currency: Currency.DOLLAR,
  stock: 500,
  isNew: true,
};

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
  await productModel.insertMany(productsSeeds);
});

describe('/GET /admin/product', () => {
  test('Response should return all products & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Products.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('/POST /admin/product', () => {
  test('Response should return the product created & return status 201', async () => {
    const response = await request(app).post(`${url}`).send(testProduct);
    expect(response.status).toBe(201);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Product created successfully.');
    expect(response.body.data.name).toEqual(testProduct.name);
    expect(response.body.data.description).toEqual(testProduct.description);
    expect(response.body.data.price).toBe(testProduct.price);
    expect(response.body.data.brand).toEqual(testProduct.brand);
    expect(response.body.data.category).toEqual(testProduct.category.toString());
    expect(response.body.data.currency).toBe(testProduct.currency);
    expect(response.body.data.stock).toBe(testProduct.stock);
    expect(response.body.data.isNew).toBe(testProduct.isNew);
    productID = response.body.data._id;
  });

  test('Should return error with joi validation & return status 400', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({
        name: 'Pr',
        description: 'This is a description',
        price: 6000,
        image: {
          name: 'f',
          type: 'f',
          base64: 'f',
          isNew: true,
        },
        technicalFile: {
          name: 'f',
          type: 'f',
          base64: 'f',
          isNew: true,
        },
        brand: 'Qira',
        category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
        currency: Currency.PESO,
        stock: 100,
        isNew: true,
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      'There has been an error in the validation. Invalid name, it must contain at least 3 characters.',
    );
  });
});

describe('/PATCH /admin/product/:id', () => {
  test('Response should return the product updated & return status 200', async () => {
    const response = await request(app).patch(`${url}/${productID}`).send(testProductUpdated);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Product updated successfully.');
    expect(response.body.data.name).toEqual(testProductUpdated.name);
    expect(response.body.data.description).toEqual(testProductUpdated.description);
    expect(response.body.data.price).toBe(testProductUpdated.price);
    expect(response.body.data.brand).toEqual(testProductUpdated.brand);
    expect(response.body.data.category._id).toEqual(testProductUpdated.category._id.toString());
    expect(response.body.data.currency).toBe(testProductUpdated.currency);
    expect(response.body.data.stock).toBe(testProductUpdated.stock);
    expect(response.body.data.isNew).toBe(testProductUpdated.isNew);
  });
  test('Should return error with joi validation & return status 400', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({
        name: 'Pr',
        description: 'This is a description',
        price: 6000,
        image: {
          name: 'f',
          type: 'f',
          base64: 'f',
          isNew: true,
        },
        technicalFile: {
          name: 'f',
          type: 'f',
          base64: 'f',
          isNew: true,
        },
        brand: 'Qira',
        category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
        currency: Currency.PESO,
        stock: 100,
        isNew: true,
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      'There has been an error in the validation. Invalid name, it must contain at least 3 characters.',
    );
  });
});

describe('/GET /admin/product/:id', () => {
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

describe('/PATCH /admin/product/inactivate/:id', () => {
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
      `Product with Id ${logicDeletedID} does not exist or is already inactive.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe('/PATCH /admin/product/activate/:id', () => {
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
      `Product with Id ${productID} does not exist or is already active.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe('/PATCH /admin/product/delete/:id', () => {
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
