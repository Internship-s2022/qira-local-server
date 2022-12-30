import { Role } from '../../../../src/interfaces';
import { FirebaseUser } from '../../../types';

const firebaseUsers: FirebaseUser[] = [
  {
    email: 'test@seeders.com',
    password: 'test1234',
    uid: 'Xtgz5H34blVOketypcQ94pPdg962',
    role: Role.CLIENT,
  },
];

export default firebaseUsers;
