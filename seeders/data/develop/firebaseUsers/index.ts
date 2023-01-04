import { Role } from '../../../../src/interfaces';

// TODO: Add firebase users type
const firebaseAdmins = [
  {
    email: 'admin1@qira.com',
    password: 'test1234',
    uid: '4GFNFYixDNQmHG3Ia0m5EpVCkAz2',
    role: Role.ADMIN,
  },
  {
    email: 'admin2@qira.com',
    password: 'test1234',
    uid: 'IyhOppxNvqYXKClRfx3xRAXYCqu2',
    role: Role.ADMIN,
  },
  {
    email: 'admin3@qira.com',
    password: 'test1234',
    uid: 'GV713ckcZqXiiijzwEt4OI3ibbG3',
    role: Role.ADMIN,
  },
  {
    email: 'admin4@qira.com',
    password: 'test1234',
    uid: 'cMIQlyeZNZTD5N71psdLrQ8fV1n2',
    role: Role.ADMIN,
  },
  {
    email: 'admin5@qira.com',
    password: 'test1234',
    uid: 'sFNhTBgdpgSSeFpoI6p5Teo6Jbo2',
    role: Role.ADMIN,
  },
  {
    email: 'admin6@qira.com',
    password: 'test1234',
    uid: 'LE9bKBs6kPbF2eF3v5fLyQ0wPzr2',
    role: Role.ADMIN,
  },
];

const firebaseClients = [
  {
    email: 'qira@radiumrocket.com',
    password: 'test1234',
    uid: 'Zk5wn4nxJMdeOy2tt3dZVRutCF22',
    role: Role.CLIENT,
  },
  {
    email: 'mcdonalds@gmail.com',
    password: 'test1234',
    uid: 'zxwbzwhEhHWtcjPKtPJZadKaubR2',
    role: Role.CLIENT,
  },
  {
    email: 'juanvenado@gmail.com',
    password: 'test1234',
    uid: 'IzvWs2rVsyeq1LFFSwZCiUxBI593',
    role: Role.CLIENT,
  },
  {
    email: 'campoverde@gmail.com',
    password: 'test1234',
    uid: 'tBTcjSX0OSQuIctZ4aoV5wGQj5f1',
    role: Role.CLIENT,
  },
  {
    email: 'gina.cliente@gmail.com',
    password: 'test1234',
    uid: 'RYaNC1eVC8Yw2N1yfcPu5yDBxHA2',
    role: Role.CLIENT,
  },
  {
    email: 'santomonte@gmail.com',
    password: 'test1234',
    uid: 'qn8KW4DgFtbTtrCbmcn9zsBIDw73',
    role: Role.CLIENT,
  },
  {
    email: 'tecnoagro@hotmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrd2',
    role: Role.CLIENT,
  },
];

export default [...firebaseClients, ...firebaseAdmins];
