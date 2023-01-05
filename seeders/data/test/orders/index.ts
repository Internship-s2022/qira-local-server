import { replaceTest } from '../../../utils';
import developOrders from '../../develop/orders';

const orders = developOrders.map((order) => ({
  ...order,
  payment: {
    key: replaceTest(order.payment.key),
    url: replaceTest(order.payment.url),
  },
}));

export default orders;
