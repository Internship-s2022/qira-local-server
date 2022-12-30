import mongoose from 'mongoose';

// TODO: Fix IClient type and change any -> IClient
const clients: any = [
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca01'),
    businessName: 'Radium Rocket',
    cuit: '20269589949',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Rosario',
      zipCode: '2000',
      street: 'Cordoba 1764',
    },
    phoneNumber: '3416123456',
    email: 'qira@radiumrocket.com',
    password: 'changedpass123',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg962',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca02'),
    businessName: 'Arcos dorados',
    cuit: '20269581234',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Santa Fe',
      zipCode: '3000',
      street: 'Siempre Viva 123',
    },
    phoneNumber: '3416112344',
    email: 'mcdonalds@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg123',
    approved: true,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca03'),
    businessName: 'John Deere',
    cuit: '20269584321',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Buenos Aires',
      city: 'La Plata',
      zipCode: '1500',
      street: 'Constitución 2510',
    },
    phoneNumber: '3416101289',
    email: 'juanvenado@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg456',
    approved: true,
  },
  {
    // CLIENT INACTIVE
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca04'),
    businessName: 'ADECOAGRO',
    cuit: '20269584456',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Chaco',
      city: 'Resistencia',
      zipCode: '4000',
      street: 'Superi 1210',
    },
    phoneNumber: '3416763467',
    email: 'campoverde@gmail.com',
    isActive: false,
    logicDelete: false,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg789',
    approved: true,
  },
  {
    // CLIENT WITH LOGIC DELETE TRUE
    _id: new mongoose.Types.ObjectId('62891944b389642a7f13ca05'),
    businessName: 'Monsanto',
    cuit: '20543762535',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Cordoba',
      city: 'Rio Cuarto',
      zipCode: '1000',
      street: 'Avellaneda 564',
    },
    phoneNumber: '3416576842',
    email: 'santomonte@gmail.com',
    isActive: false,
    logicDelete: true,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg159',
    approved: true,
  },
  {
    _id: '636d11d68a2997f1b06fd387',
    businessName: 'Empresa Agro',
    cuit: '27401205727',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Rosario',
      zipCode: '2000',
      street: 'catamarca 1214',
      _id: new mongoose.Types.ObjectId('639776644382729f3d6113ff'),
    },
    phoneNumber: '011-1234564',
    email: 'gina.cliente@gmail.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'xw4SFudaMlQ8IMaeNJtKlACxppe2',
    approved: true,
  },
  {
    _id: '633db2570b76198b1fb9e911',
    businessName: 'Test seeder',
    cuit: '27401205723',
    ivaCondition: 'RESPONSABLE_INSCRIPTO',
    address: {
      province: 'Santa Fe',
      city: 'Rosario',
      zipCode: '2000',
      street: 'catamarca 1214',
      _id: new mongoose.Types.ObjectId('639776644382729f3d6113ff'),
    },
    phoneNumber: '011-1234564',
    email: 'test@seeders.com',
    isActive: true,
    logicDelete: false,
    firebaseUid: 'Xtgz5H34blVOketypcQ94pPdg962',
    approved: true,
  },
];

export default clients;