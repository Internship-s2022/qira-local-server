import 'express-async-errors';
import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import clientModel from 'src/models/client';
import orderModel, { IOrder } from 'src/models/order';
import productModel from 'src/models/product';

import categorySeeds from '../../../../seeders/data/develop/categories';
import clientSeeds from '../../../../seeders/data/develop/clients';
import orderSeeds from '../../../../seeders/data/develop/orders';
import productSeeds from '../../../../seeders/data/develop/products';

const url = '/admin/orders';
let orderId: string;
let pendingOrder: IOrder;
const wrongID = '628cf237305204bf7d672d7c';

beforeAll(async () => {
  await productModel.insertMany(productSeeds);
  await categoryModel.insertMany(categorySeeds);
  await clientModel.insertMany(clientSeeds);
  await orderModel.insertMany(orderSeeds);
});

describe('/GET /admin/orders', () => {
  test('Response should return all orders & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    orderId = response.body.data[0]._id;
    pendingOrder = response.body.data[1];
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Orders.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('/GET /admin/orders/:id', () => {
  test('Response should return an order & return status 200', async () => {
    const response = await request(app).get(`${url}/${orderId}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(`Showing the specified order by the id of ${orderId}.`);
  });
  test('Response should return an error message & return status 404 when the id is wrong', async () => {
    const response = await request(app).get(`${url}/${wrongID}`).send();
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find an order by the id of ${wrongID}.`);
  });
});

describe('/PATCH /admin/orders/approve/:id', () => {
  test('Response should approve an order & return status 200', async () => {
    const response = await request(app)
      .patch(`${url}/approve/${orderId}`)
      .send({ invoice: { name: 'a', type: 'a', base64: 'a', isNew: true } });
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Order state updated successfully.');
    expect(response.body.data.state).toBe('DELIVERY_PENDING');
  });
  test('Response should return an error message & return status 404 when the id is wrong', async () => {
    const response = await request(app)
      .patch(`${url}/approve/${wrongID}`)
      .send({ invoice: { name: 'a', type: 'a', base64: 'a', isNew: true } });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Could not find an order by the id of ${wrongID} or the change you are trying to make it is not allowed.`,
    );
  });
  test('Response should return an error message & return status 400 when invoice is not found', async () => {
    const response = await request(app).patch(`${url}/approve/${wrongID}`).send();
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      'There has been an error in the validation. "invoice" is required',
    );
  });
});

describe('/GET /admin/orders/deliver/:id', () => {
  test('Response should return an order to deliver & return status 200', async () => {
    const response = await request(app).get(`${url}/${orderId}?dni=42331778`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(`Showing the specified order by the id of ${orderId}.`);
  });
  test('Response should return an error message & return status 404 when the id is wrong', async () => {
    const response = await request(app).get(`${url}/${wrongID}?dni=42331778`).send();
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find an order by the id of ${wrongID}.`);
  });
  test('Response should return an error message & return status 404 when the dni is wrong', async () => {
    const response = await request(app).get(`${url}/deliver/${orderId}?dni=40331`).send();
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('Could not find an authorized with the dni 40331.');
  });
});

describe('/PATCH /admin/orders/deliver/:id', () => {
  test('Response should deliver an order & return status 200', async () => {
    const response = await request(app)
      .patch(`${url}/deliver/${orderId}`)
      .send({ signedInvoice: { name: 'a', type: 'a', base64: 'a', isNew: true } });
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Order state updated successfully.');
    expect(response.body.data.state).toBe('DELIVERED');
  });
  test('Response should return a message error & return status 404 when the id is wrong', async () => {
    const response = await request(app)
      .patch(`${url}/deliver/${wrongID}`)
      .send({ signedInvoice: { name: 'a', type: 'a', base64: 'a', isNew: true } });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Could not find an order by the id of ${wrongID} or the change you are trying to make it is not allowed.`,
    );
  });
});

describe('/PATCH /admin/orders/reject/:id', () => {
  test('Response should reject an order & return status 200', async () => {
    const response = await request(app).patch(`${url}/reject/${pendingOrder._id}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(`Order rejected successfully ${pendingOrder._id}.`);
    expect(response.body.data.state).toBe('REJECTED');
  });
  test('Response should return an error message & return status 404 when the id is wrong', async () => {
    const response = await request(app).patch(`${url}/reject/${wrongID}`).send();
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find an order by the id of ${wrongID}.`);
  });
});
