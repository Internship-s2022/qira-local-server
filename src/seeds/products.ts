import mongoose from 'mongoose';

import { Currency } from 'src/interfaces';

export default [
  {
    _id: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
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
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 50,
    isNew: true,
  },
  {
    _id: '636567c722ab6362ab13895f',
    name: 'Silos bolsa',
    description: 'This is a description',
    price: 6000,
    image: {
      key: 'randomKey',
      url: 'randomKey.jpg',
    },
    technicalFile: {
      key: 'randomKey',
      url: 'randomKey.jpg',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 100,
    isNew: true,
    isActive: false,
    logicDelete: true,
  },
  {
    name: 'Producto de prueba',
    description: 'This is a description',
    price: 6000,
    image: {
      key: 'randomKey',
      url: 'randomKey.jpg',
    },
    technicalFile: {
      key: 'randomKey',
      url: 'randomKey.jpg',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 100,
    isNew: true,
  },
  {
    name: 'Fertilizante x23',
    description: 'Descripcion',
    price: 123,
    image: {
      key: 'develop/products-images/producto.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/producto.jpeg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/PDF File example.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/PDF%20File%20example.pdf',
    },
    brand: 'Marca',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 123,
    isNew: true,
  },
  {
    name: 'BugKiller',
    description: 'Mata bugs',
    price: 2500,
    image: {
      key: 'develop/products-images/producto.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/producto.jpeg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/Certificado de Exclusion Retencion Percepcion Iva 09.2022.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/Certificado%20de%20Exclusion%20Retencion%20Percepcion%20Iva%2009.2022.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 13,
    isNew: true,
  },
  {
    name: 'Fertimax',
    description: 'Fertilizante especial',
    price: 430,
    image: {
      key: 'develop/products-images/WhatsApp Image 2022-11-01 at 18.07.35.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/WhatsApp%20Image%202022-11-01%20at%2018.07.35.jpeg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/PDF File example.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/PDF%20File%20example.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 100,
    isNew: true,
  },
  {
    name: 'Sulfoxaflor',
    description: 'Sulfato premium',
    price: 1500,
    image: {
      key: 'develop/products-images/Liquidex.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Liquidex.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/PDF File example.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/PDF%20File%20example.pdf',
    },
    brand: 'Sulfomax',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 100,
    isNew: true,
  },
  {
    name: 'Coadload',
    description: 'Ayudante de coad',
    price: 2000,
    image: {
      key: 'develop/products-images/agrinova-gallery-curacron.jpg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/agrinova-gallery-curacron.jpg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/Certificado de Exclusion Retencion Percepcion Iva 09.2022.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/Certificado%20de%20Exclusion%20Retencion%20Percepcion%20Iva%2009.2022.pdf',
    },
    brand: 'Qiron',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 123,
    isNew: true,
  },
  {
    name: 'Autoflorecientes',
    description: 'Auto',
    price: 421,
    image: {
      key: 'develop/products-images/Agricultex.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Agricultex.jpeg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/PDF File example.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/PDF%20File%20example.pdf',
    },
    brand: 'BSF',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 204,
    isNew: true,
  },
  {
    name: 'Nombre',
    description: 'Descripcion',
    price: 123,
    image: {
      key: 'develop/products-images/Agricultex.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Agricultex.jpeg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/PDF File example.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/PDF%20File%20example.pdf',
    },
    brand: 'Marca',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 123,
    isNew: true,
  },
];
