import { replaceTest } from '../../../utils';
import developOrders from '../../develop/orders';

const orders = developOrders.map((order) => ({
  ...order,
  payment: {
    key: replaceTest(order.payment.key),
    url: replaceTest(order.payment.url),
  },
  invoice: order.invoice && {
    key: replaceTest(order.invoice.key),
    url: replaceTest(order.invoice.url),
  },
  signedInvoice: order.signedInvoice && {
    key: replaceTest(order.signedInvoice.key),
    url: replaceTest(order.signedInvoice.url),
  },
}));

export default orders;
