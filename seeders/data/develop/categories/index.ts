import mongoose from 'mongoose';

// TODO: Fix ICategory type and change any -> ICategory
const categories: any[] = [
  {
    _id: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    name: 'Herbicidas',
    image: {
      key: 'develop/categories-images/Herbicidas.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Herbicidas.jpeg',
    },
    url: 'herbicidas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    name: 'Insecticida',
    image: {
      key: 'develop/categories-images/Insecticidas.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Insecticidas.jpeg',
    },
    url: 'insecticida',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    name: 'Semillas',
    image: {
      key: 'develop/categories-images/Semillas.jpg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Semillas.jpg',
    },
    url: 'semillas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    name: 'Fertilizantes',
    image: {
      key: 'develop/categories-images/Fertilizantes.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Fertilizantes.jpeg',
    },
    url: 'fertilizantes',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617504bc1a382119d49e5c'),
    name: 'Fungicidas',
    image: {
      key: 'develop/categories-images/Fungicidas.jpg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Fungicidas.jpg',
    },
    url: 'fungicidas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617504bc1a382119d49e6p'),
    name: 'Nutricion Animal',
    image: {
      key: 'develop/categories-images/Nutricion-animal.jpg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Nutricion-animal.jpg',
    },
    url: 'nutricion-animal',
    isActive: true,
    logicDelete: false,
  },
];

export default categories;
