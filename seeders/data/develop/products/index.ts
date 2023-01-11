import mongoose from 'mongoose';

import { Currency } from 'src/interfaces';

// TODO: Fix IProduct type and change any -> IProduct
const products: any[] = [
  {
    _id: new mongoose.Types.ObjectId('636534e7b1c86f2d04240078'),
    name: 'Maiz',
    description: 'Semillas marca Qira de la mejor calidad',
    price: 2000,
    image: {
      key: 'develop/products-images/semillas-maiz.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/semillas-maiz.png',
    },
    brand: 'Grobo',
    category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    currency: Currency.DOLLAR,
    stock: 20,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('636567c722ab6362ab13895f'),
    name: 'Soja',
    description: 'Semillas de calidad premium.',
    price: 6000,
    image: {
      key: 'develop/products-images/semillas-soja.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/semillas-soja.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/semillas-soja.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/semillas-soja.pdf',
    },
    brand: 'Don Mario',
    category: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    currency: Currency.PESO,
    stock: 30,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2570b76198b1fb9e911'),
    name: 'Juno',
    description: 'Excelente calidad.',
    price: 5000,
    image: {
      key: 'develop/products-images/fungicidas-juno.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/fungicidas-juno.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fungicidas-juno.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fungicidas-juno.pdf',
    },
    brand: 'Fusion',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e5c'),
    currency: Currency.PESO,
    stock: 25,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db28c0b76198b1fb9e915'),
    name: 'Morata',
    description: 'Fosfato monoamónico.',
    price: 1234,
    image: {
      key: 'develop/products-images/fungicidas-morata.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/fungicidas-morata.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fungicidas-morata.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fungicidas-morata.pdf',
    },
    brand: 'Ace',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e5c'),
    currency: Currency.PESO,
    stock: 50,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2bd0b76198b1fb9e919'),
    name: 'Runner',
    description: 'Excelente calidad',
    price: 2500,
    image: {
      key: 'develop/products-images/insecticida-runner.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/insecticida-runner.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/insecticida-runer.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/insecticida-runer.pdf',
    },
    brand: 'Fusion',
    category: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    currency: Currency.DOLLAR,
    stock: 45,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635985d6c69ae7cc9690cd10'),
    name: 'Silver',
    description: 'Insecticida especial',
    price: 430,
    image: {
      key: 'develop/products-images/insecticida-silver.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/insecticida-silver.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/insecticida-silver.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/insecticida-silver.pdf',
    },
    brand: 'Fusion',
    category: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    currency: Currency.DOLLAR,
    stock: 95,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635c3b1a1dbbdc223be4d84e'),
    name: 'Urea Granulada',
    description: 'Urea granulada premium, excelente calidad',
    price: 1500,
    image: {
      key: 'develop/products-images/fertilizante-urea.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/fertilizante-urea.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizantes-urea.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizantes-urea.pdf',
    },
    brand: 'A granel',
    category: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    currency: Currency.DOLLAR,
    stock: 130,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fcea269c6117027039343'),
    name: 'Smartfoil',
    description:
      'En su formulación, además de Sulfato de Amonio, Toke Plus, contiene un humectante, un dispersante y una nueva molécula que incrementa el ingreso de activo al interior de las plantas.',
    price: 2000,
    image: {
      key: 'develop/products-images/fertilizante-smartfoil.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/fertilizante-smartfoil.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/fertilizante-smartfoil.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/fertilizante-smartfoil.pdf',
    },
    brand: 'Qira',
    category: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    currency: Currency.DOLLAR,
    stock: 130,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fd06415bdf89bec285c01'),
    name: 'Ranger',
    description: 'Alto potencial de rendimiento. Alta prolificidad. Adaptación a silaje.',
    price: 421,
    image: {
      key: 'develop/products-images/herbicida-ranger.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/herbicida-ranger.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/herbicida-ranger.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/herbicida-ranger.pdf',
    },
    brand: 'Fusion',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.DOLLAR,
    stock: 20,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('635fd10e15bdf89bec285c07'),
    name: 'Durango',
    description:
      'Es un herbicida pre emergente para el control de gramíneas y conyza de forma residual.',
    price: 123,
    image: {
      key: 'develop/products-images/herbicida-durango.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/herbicida-durango.png',
    },
    technicalFile: {
      key: 'develop/products-technical-file/herbicidas-durango.pdf',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-technical-file/herbicidas-durango.pdf',
    },
    brand: 'Fusion',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    currency: Currency.PESO,
    stock: 83,
    isNew: true,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2bd0b76198b1fb9e585'),
    name: 'Ración totalmente mezclada vaca',
    description: 'Excelente calidad',
    price: 2500,
    image: {
      key: 'develop/products-images/nutricionAnimal-RacionTotalmenteMezcladaVaca.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/nutricionAnimal-RacionTotalmenteMezcladaVaca.png',
    },
    brand: 'ALZ agro',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e3f'),
    currency: Currency.DOLLAR,
    stock: 50,
    isNew: false,
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('633db2bd0b76198b1fb9e939'),
    name: 'Ración totalmente mezclada recría',
    description: 'Excelente calidad',
    price: 430,
    image: {
      key: 'develop/products-images/nutricionAnimal-RacionTotalmenteMezcladaRecria.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/products-images/nutricionAnimal-RacionTotalmenteMezcladaRecria.png',
    },
    brand: 'ALZ agro',
    category: new mongoose.Types.ObjectId('63617504bc1a382119d49e3f'),
    currency: Currency.DOLLAR,
    stock: 50,
    isNew: false,
    isActive: true,
    logicDelete: false,
  },
];

export default products;
