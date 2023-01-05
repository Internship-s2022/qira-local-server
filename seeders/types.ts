import { Role } from '../src/interfaces';
// import { IAdmin } from '../src/models/admin';
// import { ICategory } from '../src/models/category';
// import { IClient } from '../src/models/client';
// import { IOrder } from '../src/models/order';
// import { IProduct } from '../src/models/product';

export interface FirebaseUser {
  uid: string;
  email: string;
  password: string;
  role: Role;
}

export interface Data {
  admins: any[];
  categories: any[];
  clients: any[];
  firebaseUsers: FirebaseUser[];
  orders: any[];
  products: any[];
}
// TODO: Replace any with correct types
// export interface Data {
//   admins: IAdmin[];
//   categories: ICategory[];
//   clients: IClient[];
//   firebaseUsers: FirebaseUser[];
//   orders: IOrder[];
//   products: IProduct[];
// }
