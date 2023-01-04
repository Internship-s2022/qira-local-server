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
    _id: new mongoose.Types.ObjectId('63617529bc1a382119d49e50'),
    name: 'Silobolsas',
    image: {
      key: 'develop/categories-images/Silobolsas.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Silobolsas.jpeg',
    },
    url: 'silobolsas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    name: 'Inoculantes',
    image: {
      key: 'develop/categories-images/Inoculantes.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Inoculantes.jpeg',
    },
    url: 'inoculantes',
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
    _id: new mongoose.Types.ObjectId('6361757fbc1a382119d49e64'),
    name: 'Coadyuvantes',
    image: {
      key: 'develop/categories-images/Coadyuvantes.jpeg',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Coadyuvantes.jpeg',
    },
    url: 'coadyudantes',
    isActive: false,
    logicDelete: false,
  },
];

export default categories;
