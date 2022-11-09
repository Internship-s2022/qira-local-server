import request from 'supertest';

import app from 'src/app';
import categoryModel from 'src/models/category';
import categoriesSeed from 'src/seeders/develop/categories';

const url = '/admin/category';
const wrongID = '63617504bc1a382119d49e4c';
const logicDeletedID = '6365066b4777ae2267b697c7';
const inactiveId = '6361757fbc1a382119d49e64';
let categoryID: string;
const category = {
  name: 'test',
  image: {
    name: 'test',
    type: 'test',
    base64: 'test',
    isNew: true,
  },
  url: 'test',
};
const categoryUpdate = {
  name: 'testUpdate',
  image: {
    name: 'testupdate',
    type: 'testupdate',
    base64: 'testupdate',
    isNew: true,
  },
  url: 'testupdate',
};

beforeAll(async () => {
  await categoryModel.insertMany(categoriesSeed);
});

describe(`/GET ${url}`, () => {
  test('Response should return all categories & return status 200', async () => {
    const response = await request(app).get(`${url}`).send();
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Showing Categories.');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe(`/POST ${url}`, () => {
  test('Response should return a  status 201 & create a new Category when the body is correct', async () => {
    const response = await request(app).post(`${url}`).send(category);
    expect(response.status).toBe(201);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Category created successfully.');
    expect(response.body.data.name).toEqual(category.name);
    expect(response.body.data.url).toEqual(category.url);
    categoryID = response.body.data._id;
  });
  test('Response should return a status 400 and dont create a new CAtegory when the name is wrong', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({
        name: 'a',
        url: 'test',
        image: {
          name: 'test',
          type: 'test',
          base64: 'test',
          isNew: true,
        },
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('Invalid name, it must contain at least 3 characters.');
  });
  test('Response should return a status 400 and dont create a new Category when the url is empty', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({
        name: 'test',
        url: '',
        image: {
          name: 'test',
          type: 'test',
          base64: 'test',
          isNew: true,
        },
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('"url" is not allowed to be empty');
  });
});

describe(`/PATCH ${url}`, () => {
  test('Response should return a  status 200 & update the Category when the id and body are corrects', async () => {
    const response = await request(app).patch(`${url}/${categoryID}`).send(categoryUpdate);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Category updated successfully.');
    expect(response.body.data.name).toEqual(categoryUpdate.name);
    expect(response.body.data.url).toEqual(categoryUpdate.url);
  });
  test('Response should return a status 404 and dont update a new Category when the id doesnt exists', async () => {
    const response = await request(app).patch(`${url}/${wrongID}`).send(categoryUpdate);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find a category by the id of ${wrongID}.`);
  });
  test('Response should return a status 400 and dont update Category when the name is empty', async () => {
    const response = await request(app)
      .post(`${url}`)
      .send({
        name: '',
        url: 'test',
        image: {
          name: 'test',
          type: 'test',
          base64: 'test',
          isNew: true,
        },
      });
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual('"name" is not allowed to be empty');
  });
});

describe(`/GET ${url}/:id`, () => {
  test('Response should return a status code 200 & one product', async () => {
    const response = await request(app).get(`${url}/${categoryID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual(`Showing the category by the id of ${categoryID}.`);
    expect(response.body.data._id).toEqual(categoryID);
  });

  test('Response should return an status 404 when the id is wrong', async () => {
    const response = await request(app).get(`${url}/${wrongID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Could not find a category by the id of ${wrongID}.`);
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/inactivate/:id`, () => {
  test('Response should return a status 200 and inactivate the Category', async () => {
    const response = await request(app).patch(`${url}/inactivate/${categoryID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Category updated successfully.');
    expect(response.body.data.isActive).toBe(false);
  });

  test('Response should return error with already inactive id', async () => {
    const response = await request(app).patch(`${url}/inactivate/${inactiveId}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Id ${inactiveId} does not exist or is already inactive.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/activate/:id`, () => {
  test('Response should activate a Category & return status 200', async () => {
    const response = await request(app).patch(`${url}/activate/${categoryID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Category updated successfully.');
    expect(response.body.data.isActive).toBe(true);
  });

  test('Response should return error with already active id', async () => {
    const response = await request(app).patch(`${url}/activate/${categoryID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(`Id ${categoryID} does not exist or is already active.`);
    expect(response.body.data).toBe(undefined);
  });
});

describe(`/PATCH ${url}/delete/:id`, () => {
  test('Response should logic delete a category & return status 200', async () => {
    const response = await request(app).patch(`${url}/delete/${categoryID}`);
    expect(response.status).toBe(200);
    expect(response.body.error).toBe(false);
    expect(response.body.message).toEqual('Category deleted successfully.');
    expect(response.body.data.logicDelete).toBe(true);
  });

  test('Response should return error with already deleted id', async () => {
    const response = await request(app).patch(`${url}/delete/${logicDeletedID}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe(true);
    expect(response.body.message).toEqual(
      `Could not find a category by the id of ${logicDeletedID}.`,
    );
    expect(response.body.data).toBe(undefined);
  });
});
