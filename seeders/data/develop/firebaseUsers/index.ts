import { Role } from '../../../../src/interfaces';
import { FirebaseUser } from '../../../types';

const firebaseAdmins: FirebaseUser[] = [
  {
    email: 'baltazar.cortina@qira.com',
    password: 'Admin1234',
    uid: '4GFNFYixDNQmHG3Ia0m5EpVCkAz2',
    role: Role.ADMIN,
  },
  {
    email: 'ariana.maldonado@qira.com',
    password: 'Admin1234',
    uid: 'IyhOppxNvqYXKClRfx3xRAXYCqu2',
    role: Role.ADMIN,
  },
  {
    email: 'gina.s.pietra@qira.com',
    password: 'Admin1234',
    uid: 'GV713ckcZqXiiijzwEt4OI3ibbG3',
    role: Role.ADMIN,
  },
  {
    email: 'ivan.gobbi@qira.com',
    password: 'Admin1234',
    uid: 'cMIQlyeZNZTD5N71psdLrQ8fV1n2',
    role: Role.ADMIN,
  },
  {
    email: 'francisco.gutierrez@qira.com',
    password: 'Admin1234',
    uid: 'LE9bKBs6kPbF2eF3v5fLyQ0wPzr2',
    role: Role.ADMIN,
  },
  {
    email: 'sabrina.taselli@qira.com',
    password: 'Admin1234',
    uid: 'sFNhTBgdpgSSeFpoI6p5Teo6Jbo2',
    role: Role.ADMIN,
  },
];

const firebaseClients: FirebaseUser[] = [
  // ENABLED
  {
    email: 'anabel.laurence@gmail.com',
    password: 'test1234',
    uid: 'Zk5wn4nxJMdeOy2tt3dZVRutCF22',
    role: Role.CLIENT,
  },
  {
    email: 'leandro.techos@gmail.com',
    password: 'test1234',
    uid: 'zxwbzwhEhHWtcjPKtPJZadKaubR2',
    role: Role.CLIENT,
  },
  {
    email: 'cesia.maldonado@gmail.com',
    password: 'test1234',
    uid: 'IzvWs2rVsyeq1LFFSwZCiUxBI593',
    role: Role.CLIENT,
  },
  {
    email: 'jose.blois@gmail.com',
    password: 'test1234',
    uid: 'tBTcjSX0OSQuIctZ4aoV5wGQj5f1',
    role: Role.CLIENT,
  },
  {
    email: 'esteban.frare@gmail.com',
    password: 'test1234',
    uid: 'RYaNC1eVC8Yw2N1yfcPu5yDBxHA2',
    role: Role.CLIENT,
  },
  {
    email: 'samuel.trillo@gmail.com',
    password: 'test1234',
    uid: 'qn8KW4DgFtbTtrCbmcn9zsBIDw73',
    role: Role.CLIENT,
  },
  //DISAPPROVED
  {
    email: 'karen.soto@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrd2',
    role: Role.CLIENT,
  },
  {
    email: 'luciano.alarcon@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrd2',
    role: Role.CLIENT,
  },
  {
    email: 'juancruz.moreira@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrp1',
    role: Role.CLIENT,
  },
  {
    email: 'axel.galindo@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrl2',
    role: Role.CLIENT,
  },
  {
    email: 'paula.rinaldi@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrm2',
    role: Role.CLIENT,
  },
  {
    email: 'nicolas.lobos@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrn2',
    role: Role.CLIENT,
  },

  //DISABLED
  {
    email: 'franco.marini@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrv2',
    role: Role.CLIENT,
  },
  {
    email: 'iara.criscenti@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrv2',
    role: Role.CLIENT,
  },
  {
    email: 'agus.chazarreta@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrwz1',
    role: Role.CLIENT,
  },
  {
    email: 'julian.demeglio@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrwc2',
    role: Role.CLIENT,
  },
  {
    email: 'facundo.cosetino@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zrei',
    role: Role.CLIENT,
  },
  {
    email: 'iara.criscenti@gmail.com',
    password: 'test1234',
    uid: 'fmhF69Km2dNL2pXCysrDELR7zre2',
    role: Role.CLIENT,
  },
];

export default [...firebaseClients, ...firebaseAdmins];
