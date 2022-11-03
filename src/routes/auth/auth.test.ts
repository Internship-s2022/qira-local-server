import request from 'supertest';

import app from 'src/app';

describe('example test', () => {
  test('example test', async () => {
    const response = await request(app).get('/public/categories').send();
    expect(response.status).toBe(200);
  });
});
