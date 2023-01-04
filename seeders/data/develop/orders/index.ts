import mongoose from 'mongoose';

import { Currency } from 'src/interfaces';

// TODO: Fix IOrder type and change any -> IOrder
const orders: any = [
  {
    products: [
      {
        product: {
          _id: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
          name: 'Semillas Premium',
          description: 'Semillas marca Qira de la mejor calidad',
          price: 2000,
          image: {
            key: 'develop/products-images/Semillas.jpg',
            url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Semillas.jpg',
          },
          technicalFile: {
            key: 'develop/products-technical-file/Semillas.pdf',
            url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/Semillas.pdf',
          },
          brand: 'Qira',
          category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
          currency: Currency.DOLLAR,
          stock: 50,
          isNew: true,
          isActive: true,
          logicDelete: false,
        },
        quantity: 2,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca01'),
    authorized: [
      {
        firstName: 'Julian',
        lastName: 'Parker',
        dni: '42331778',
        phoneNumber: '3416133021',
      },
      {
        firstName: 'Lionel',
        lastName: 'Mesias',
        dni: '33456123',
        phoneNumber: '3416133037',
      },
    ],
    payment: {
      key: 'develop/transfer-receipts/example-transfer.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer.pdf',
    },
    amounts: {
      products: 640000,
      taxes: 134400,
      total: 774400,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    products: [
      {
        product: {
          _id: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
          name: 'Semillas Premium',
          description: 'Semillas marca Qira de la mejor calidad',
          price: 2000,
          image: {
            key: 'develop/products-images/Semillas.jpg',
            url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Semillas.jpg',
          },
          technicalFile: {
            key: 'randomKey',
            url: 'randomKey.jpg',
          },
          brand: 'Qira',
          category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
          currency: Currency.DOLLAR,
          stock: 50,
          isNew: true,
          isActive: true,
          logicDelete: false,
        },
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca01'),
    authorized: [
      {
        firstName: 'Emiliano',
        lastName: 'Dibujos',
        dni: '42331778',
        phoneNumber: '3416134937',
      },
      {
        firstName: 'Lionel',
        lastName: 'Escalones',
        dni: '42331778',
        phoneNumber: '3416133032',
      },
    ],
    payment: {
      key: 'develop/transfer-receipts/example-transfer.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer.pdf',
    },
    amounts: {
      products: 320000,
      taxes: 67200,
      total: 387200,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
];

export default orders;
