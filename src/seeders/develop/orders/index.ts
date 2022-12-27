import mongoose from 'mongoose';

export default [
  {
    products: [
      {
        product: {
          _id: new mongoose.Types.ObjectId('633db2570b76198b1fb9e911'),
          name: 'Semillas',
          description: 'This is a description',
          price: 2000,
          image: {
            key: 'develop/products-images/Agricultex.jpeg',
            url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Agricultex.jpeg',
          },
          technicalFile: {
            key: 'randomKey',
            url: 'randomKey.jpg',
          },
          brand: 'Qira',
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
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
    authorized: [
      {
        firstName: 'Fran',
        lastName: 'Gutierrez',
        dni: '42331778',
        phoneNumber: '3416133037',
      },
      {
        firstName: 'Fran',
        lastName: 'Gutierrez',
        dni: '42331778',
        phoneNumber: '3416133037',
      },
    ],
    payment: {
      key: 'test',
      url: 'test',
    },
    amounts: {
      products: 32012300,
      taxes: 6722583,
      total: 38734883,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '2022-10-31T13:33:22.372Z',
    estimatedDeliveryDate: '10-10-2022',
  },
  {
    products: [
      {
        product: {
          _id: new mongoose.Types.ObjectId('633db2570b76198b1fb9e911'),
          name: 'Semillas',
          description: 'This is a description',
          price: 2000,
          image: {
            key: 'develop/products-images/Agricultex.jpeg',
            url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Agricultex.jpeg',
          },
          technicalFile: {
            key: 'randomKey',
            url: 'randomKey.jpg',
          },
          brand: 'Qira',
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
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
    authorized: [
      {
        firstName: 'Fran',
        lastName: 'Gutierrez',
        dni: '42331778',
        phoneNumber: '3416133037',
      },
      {
        firstName: 'Fran',
        lastName: 'Gutierrez',
        dni: '42331778',
        phoneNumber: '3416133037',
      },
    ],
    payment: {
      key: 'test',
      url: 'test',
    },
    amounts: {
      products: 32012300,
      taxes: 6722583,
      total: 38734883,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '2022-10-31T13:33:22.372Z',
    estimatedDeliveryDate: '10-10-2022',
  },
];
