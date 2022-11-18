import request from 'supertest';

import app from 'src/app';
import clientModel from 'src/models/client';

import clientsSeeds from '../../../../seeders/develop/clients';

beforeAll(async () => {
  await clientModel.insertMany(clientsSeeds);
});

const validClientId = '62891944b389642a7f13ca01';
const invalidClientId = '99891944b389642a7f13ca99';
const inactiveClientId = '62891944b389642a7f13ca04';
const deletedClientId = '62891944b389642a7f13ca05';

describe('/GET /admin/client', () => {
  test('Response should return all clients and status 200', async () => {
    const response = await request(app).get('/admin/client').send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Clients.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('/GET /admin/client/:id', () => {
  test('Response should return only one client and status 200', async () => {
    const response = await request(app).get(`/admin/client/${validClientId}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(
      `Showing the specified client by the id of ${validClientId}.`,
    );
  });

  test('Invalid Id, response should return error and status 404', async () => {
    const response = await request(app).get(`/admin/client/${invalidClientId}`).send();
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Could not find a client by the id of ${invalidClientId}.`,
    );
  });
});

describe('/PATCH /admin/client/:id', () => {
  test('Response should update a client and return status 200', async () => {
    const response = await request(app).patch(`/admin/client/${validClientId}`).send({
      businessName: 'Changed Name',
      cuit: '20269589950',
      ivaCondition: 'CONSUMIDOR_FINAL',
      phoneNumber: '3416123457',
      email: 'changedemail@radiumrocket.com',
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Client updated successfully.');
    expect(response.body.data.businessName).toBe('Changed Name');
    expect(response.body.data.cuit).toBe('20269589950');
    expect(response.body.data.ivaCondition).toBe('CONSUMIDOR_FINAL');
    expect(response.body.data.phoneNumber).toBe('3416123457');
    expect(response.body.data.email).toBe('changedemail@radiumrocket.com');
  });

  test('Invalid Id, response should return error and status 404', async () => {
    const response = await request(app).patch(`/admin/client/${invalidClientId}`).send({
      businessName: 'Not Gonna Change',
    });
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Id ${invalidClientId} does not exist.`);
  });

  test('Error in validation, response should return error and status 400', async () => {
    const response = await request(app).patch(`/admin/client/${validClientId}`).send({
      cuit: 'cuiterroneo',
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('There has been an error in the validation.');
    expect(response.body.data).toEqual(
      'Invalid cuit, it must contain only numbers and must be 11 characters.',
    );
  });

  test('Error in validation, response should return error and status 400', async () => {
    const response = await request(app).patch(`/admin/client/${validClientId}`).send({
      email: 'incorrectemail.com',
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('There has been an error in the validation.');
    expect(response.body.data).toEqual('Invalid Email must contain @ and .');
  });

  test('Error in validation, response should return error and status 400', async () => {
    const response = await request(app).patch(`/admin/client/${validClientId}`).send({
      businessName: '',
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('There has been an error in the validation.');
    expect(response.body.data).toEqual('"businessName" is not allowed to be empty');
  });
});

describe('/PATCH /admin/client/inactivate/:id', () => {
  test('Response should inactivate a client and return status 200', async () => {
    const response = await request(app).patch(`/admin/client/inactivate/${validClientId}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Client updated successfully.');
    expect(response.body.data.isActive).toBe(false);
  });

  test('Response should return error with already inactive id', async () => {
    const response = await request(app).patch(`/admin/client/inactivate/${inactiveClientId}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Id ${inactiveClientId} does not exist or is already inactive.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe('/PATCH /admin/client/activate/:id', () => {
  test('Response should activate a client and return status 200', async () => {
    const response = await request(app).patch(`/admin/client/activate/${validClientId}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Client updated successfully.');
    expect(response.body.data.isActive).toBe(true);
  });

  test('Response should return error with already active id', async () => {
    const response = await request(app).patch(`/admin/client/activate/${validClientId}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Id ${validClientId} does not exist or is already active.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe('/PATCH /admin/client/delete/:id', () => {
  test('Response should logic delete a client and return status 200', async () => {
    const response = await request(app).patch(`/admin/client/delete/${validClientId}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Client deleted successfully.');
    expect(response.body.data.logicDelete).toBe(true);
  });

  test('Response should return error with already deleted id', async () => {
    const response = await request(app).patch(`/admin/client/delete/${deletedClientId}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Id ${deletedClientId} does not exist.`);
    expect(response.body.data).toBe(undefined);
  });
});
