import mongoose from 'mongoose';

import { Currency } from 'src/interfaces';

// TODO: Fix IProduct type and change any -> IProduct
const products: any[] = [
  {
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
  {
    _id: new mongoose.Types.ObjectId('636567c722ab6362ab13895f'),
    name: 'Silo bolsas white',
    description: 'Silobolsa calidad premium de 9 pies de diámetro por 75 metros de largo.',
    price: 6000,
    image: {
      key: 'develop/products-images/silobolsa.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/silobolsa.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/silobolsas.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/silobolsas.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617529bc1a382119d49e50'),
    currency: Currency.PESO,
    stock: 100,
    isNew: true,
    isActive: false,
    logicDelete: true,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2570b76198b1fb9e911'),
    name: 'Maíz GROBO BT',
    description: 'Excelente calidad de tallo y caña. Estable ante condiciones de estrés.',
    price: 5000,
    image: {
      key: 'develop/products-images/maiz.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/maiz.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/Semillas.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/Semillas.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    currency: Currency.PESO,
    stock: 100,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db28c0b76198b1fb9e915'),
    name: 'Fertilizante x23',
    description: 'Fosfato monoamónico.',
    price: 1234,
    image: {
      key: 'develop/products-images/runner-fusion.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/runner-fusion.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizantes.pdf',
    },
    brand: 'Fertimax',
    category: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    currency: Currency.PESO,
    stock: 123,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2bd0b76198b1fb9e919'),
    name: 'BugKiller',
    description: 'Mata bugs',
    price: 2500,
    image: {
      key: 'develop/products-images/juno-fusion.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/juno-fusion.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizantes.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 13,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635985d6c69ae7cc9690cd10'),
    name: 'Fertimax',
    description: 'Fertilizante especial',
    price: 430,
    image: {
      key: 'develop/products-images/juno-fusion.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/juno-fusion.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizantes.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    currency: Currency.DOLLAR,
    stock: 100,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635c3b1a1dbbdc223be4d84e'),
    name: 'Sulfoxaflor',
    description: 'Sulfato premium',
    price: 1500,
    image: {
      key: 'develop/products-images/toke-plus.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/toke-plus.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizantes.pdf',
    },
    brand: 'Sulfomax',
    category: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    currency: Currency.DOLLAR,
    stock: 100,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fcea269c6117027039343'),
    name: 'Coadload',
    description:
      'En su formulación, además de Sulfato de Amonio, Toke Plus, contiene un humectante, un dispersante y una nueva molécula que incrementa el ingreso de activo al interior de las plantas.',
    price: 2000,
    image: {
      key: 'develop/products-images/silver-fusion.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/silver-fusion.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/coadyuvantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/coadyuvantes.pdf',
    },
    brand: 'Qiron',
    category: new mongoose.Types.ObjectId('6361757fbc1a382119d49e64'),
    currency: Currency.DOLLAR,
    stock: 123,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fd06415bdf89bec285c01'),
    name: 'Autoflorecientes',
    description: 'Alto potencial de rendimiento. Alta prolificidad. Adaptación a silaje.',
    price: 421,
    image: {
      key: 'develop/products-images/Semillas.jpg',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/Semillas.jpg',
    },
    technicalFile: {
      key: 'develop/products-technical-file/Semillas.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/Semillas.pdf',
    },
    brand: 'BSF',
    category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    currency: Currency.DOLLAR,
    stock: 204,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fd10e15bdf89bec285c07'),
    name: 'Defender',
    description:
      'Es un herbicida pre emergente para el control de gramíneas y conyza de forma residual.',
    price: 123,
    image: {
      key: 'develop/products-images/smartfoil.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/smartfoil.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/good-practices-fertilizantes.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/good-practices-fertilizantes.pdf',
    },
    brand: 'Herbimax',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 123,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
];

export default products;
