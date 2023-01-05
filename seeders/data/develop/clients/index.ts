import mongoose from 'mongoose';

// TODO: Fix IClient type and change any -> IClient
const clients: any = [
  // ENABLED
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca01'),
    businessName: 'Percepta (security)',
    cuit: '20269589949',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Rosario',
      zipCode: '2000',
      street: 'Cordoba 1764',
    },
    phoneNumber: '341-6123456',
    email: 'anabel.laurence@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'Zk5wn4nxJMdeOy2tt3dZVRutCF22',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
    businessName: 'Exela Movers',
    cuit: '20269581234',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Santa Fe',
      zipCode: '3000',
      street: 'Siempre Viva 123',
    },
    phoneNumber: '341-6112344',
    email: 'leandro.techos@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'zxwbzwhEhHWtcjPKtPJZadKaubR2',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
    businessName: ' Ibotta, Inc.',
    cuit: '20269584321',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Buenos Aires',
      city: 'La Plata',
      zipCode: '1500',
      street: 'Constitución 2510',
    },
    phoneNumber: '341-6101289',
    email: 'cesia.maldonado@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'IzvWs2rVsyeq1LFFSwZCiUxBI593',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
    businessName: 'Wanderu',
    cuit: '20269584456',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Chaco',
      city: 'Resistencia',
      zipCode: '4000',
      street: 'Superi 1210',
    },
    phoneNumber: '341-6763467',
    email: 'jose.blois@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'tBTcjSX0OSQuIctZ4aoV5wGQj5f1',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('636d11d68a2997f1b06fd387'),
    businessName: 'Intrepid Travel',
    cuit: '27401205727',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Rosario',
      zipCode: '2000',
      street: 'catamarca 1214',
    },
    phoneNumber: '011-1234564',
    email: 'esteban.frare@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'RYaNC1eVC8Yw2N1yfcPu5yDBxHA2',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
    businessName: 'Defendify',
    cuit: '20543762535',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '341-6576842',
    email: 'samuel.trillo@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'qn8KW4DgFtbTtrCbmcn9zsBIDw73',
    approved: true,
  },

  {
    //DISAPPROVED
    _id: '633db2570b76198b1fb9e910',
    businessName: 'Twisters Gymnastics Academy',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'karen.soto@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrp1',
    approved: false,
  },
  {
    _id: '633db2570b76198b1fb9e911',
    businessName: 'Aims Community College',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'luciano.alarcon@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrd2',
    approved: false,
  },
  {
    _id: '633db2570b76198b1fb9e912',
    businessName: 'Kaboom Fireworks',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'juancruz.moreira@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrp1',
    approved: false,
  },
  {
    _id: '633db2570b76198b1fb9e913',
    businessName: 'Compass Mortgage',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'axel.galindo@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrl2',
    approved: false,
  },
  {
    _id: '633db2570b76198b1fb9e914',
    businessName: 'Marathon Physical Therapy',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'paula.rinaldi@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrm2',
    approved: false,
  },
  {
    _id: '633db2570b76198b1fb9e915',
    businessName: 'Semicolon Bookstore',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'nicolas.lobos@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrn2',
    approved: false,
  },
  //DISABLED
  {
    _id: '633db2570b76198b1fb9e916',
    businessName: '9Yards Media',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'franco.marini@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrv2',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e917',
    businessName: 'When Pigs Fly',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'iara.criscenti@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrw3',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e918',
    businessName: 'Light As a Feather',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'agus.chazarreta@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrwz1',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e919',
    businessName: 'More Than Words',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'julian.demeglio@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zrwc2',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e921',
    businessName: 'Top It Off',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'facundo.cosetino@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zre1',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e922',
    businessName: 'Bent Out Shape Jewelry',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '011-1234564',
    email: 'guido.cerioni@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'fmhF69Km2dNL2pXCysrDELR7zre2',
    approved: true,
  },
];

export default clients;
