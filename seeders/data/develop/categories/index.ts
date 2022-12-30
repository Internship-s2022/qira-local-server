import mongoose from 'mongoose';

// TODO: Fix ICategory type and change any -> ICategory
const categories: any[] = [
  {
    _id: new mongoose.Types.ObjectId('63617504bc1a382119d49e4b'),
    name: 'Herbicidas',
    image: {
      key: 'develop/categories-images/Herbicida.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/Herbicida.png',
    },
    url: 'herbicidas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617529bc1a382119d49e50'),
    name: 'Silobolsas',
    image: {
      key: 'develop/categories-images/silobolsas.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/silobolsas.png',
    },
    url: 'silobolsas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('6361753fbc1a382119d49e55'),
    name: 'Inoculantes',
    image: {
      key: 'develop/categories-images/inoculantes.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/inoculantes.png',
    },
    url: 'inoculantes',
    isActive: false,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617554bc1a382119d49e5a'),
    name: 'Semillas',
    image: {
      key: 'develop/categories-images/semillas.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/semillas.png',
    },
    url: 'semillas',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('63617567bc1a382119d49e5f'),
    name: 'Fertilizantes',
    image: {
      key: 'develop/categories-images/fertilizantes.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/fertilizantes.png',
    },
    url: 'fertilizantes',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('6361757fbc1a382119d49e64'),
    name: 'Coadyudantes',
    image: {
      key: 'develop/categories-images/coadyudantes.png',
      url: 'https://qira-local.s3.amazonaws.com/develop/categories-images/coadyudantes.png',
    },
    url: 'coadyudantes',
    isActive: false,
    logicDelete: false,
  },
];

export default categories;
