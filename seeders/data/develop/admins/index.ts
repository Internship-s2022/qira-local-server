import mongoose from 'mongoose';

const admins: any = [
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10aa01'),
    firebaseUid: '4GFNFYixDNQmHG3Ia0m5EpVCkAz2',
    firstName: 'Nicolo',
    lastName: 'Ribaudo',
    email: 'admin1@qira.com',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10ab02'),
    firebaseUid: 'IyhOppxNvqYXKClRfx3xRAXYCqu2',
    firstName: 'Raul',
    lastName: 'Gonzalez',
    email: 'admin2@qira.com',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10ac03'),
    firebaseUid: 'GV713ckcZqXiiijzwEt4OI3ibbG3',
    firstName: 'Lionel',
    lastName: 'Misa',
    email: 'admin3@qira.com',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10ad04'),
    firebaseUid: 'cMIQlyeZNZTD5N71psdLrQ8fV1n2',
    firstName: 'Leandro',
    lastName: 'Techos',
    email: 'admin4@qira.com',
    isActive: true,
    logicDelete: false,
  },
  {
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10ae05'),
    firebaseUid: 'sFNhTBgdpgSSeFpoI6p5Teo6Jbo2',
    firstName: 'Emiliano',
    lastName: 'Dibujo',
    email: 'admin5@qira.com',
    isActive: true,
    logicDelete: false,
  },
  {
    // ADMIN INACTIVE
    _id: new mongoose.Types.ObjectId('62891944b389642a7f10af06'),
    firebaseUid: 'LE9bKBs6kPbF2eF3v5fLyQ0wPzr2',
    firstName: 'Paulo',
    lastName: 'Tribala',
    email: 'admin6@qira.com',
    isActive: false,
    logicDelete: false,
  },
];

export default admins;
