import mongoose from 'mongoose';

export default [
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
];
