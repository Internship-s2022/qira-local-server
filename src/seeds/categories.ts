import mongoose from 'mongoose';

export default [
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
];
