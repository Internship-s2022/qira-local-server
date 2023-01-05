import { replaceUat } from '../../../utils';
import developOrders from '../../develop/orders';

const orders = developOrders.map((order) => ({
  ...order,
  payment: {
    key: replaceUat(order.payment.key),
    url: replaceUat(order.payment.url),
  },
}));

export default orders;
