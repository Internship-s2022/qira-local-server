import mongoose from 'mongoose';

// TODO: Fix IOrder type and change any -> IOrder
const orders: any[] = [
  // Client 1
  {
    _id: '636534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '12E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '636534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '636534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  // // Client 2
  {
    _id: '236534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '22E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '236534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '236534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  // // Client 3
  {
    _id: '336534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '32E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '336534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '336534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  // // Client 4
  {
    _id: '436534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '42E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '436534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '436534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  // // Client 5
  {
    _id: '536534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '52E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '536534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '536534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  // // Client 6
  {
    _id: '736534E7',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
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
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'APPROVE_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
  {
    _id: '72E45T78',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERY_PENDING',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
  },
  {
    _id: '736534E8',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
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
    invoice: {
      key: 'develop/order-invoice/invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-invoice/invoice.pdf',
    },
    signedInvoice: {
      key: 'develop/order-signed-invoice/signed-invoice.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/order-signed-invoice/signed-invoice.pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'DELIVERED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
    payAuthDate: '10-13-2022',
    deliverDate: '10-16-2022',
  },
  {
    _id: '736534E9',
    products: [
      {
        product: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
        quantity: 1,
      },
    ],
    client: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
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
      url: 'https://qira-local.s3.amazonaws.com/develop/transfer-receipts/example-transfer..pdf',
    },
    amounts: {
      products: 2000,
      taxes: 420,
      total: 2420,
    },
    state: 'REJECTED',
    exchangeRate: 160,
    orderDate: '10-10-2022',
    estimatedDeliveryDate: '10-20-2022',
  },
];

export default orders;
