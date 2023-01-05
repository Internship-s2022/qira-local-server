import { replaceUat } from '../../../utils';
import developOrders from '../../develop/orders';

const orders = developOrders.map((order) => ({
  ...order,
  payment: {
    key: replaceUat(order.payment.key),
    url: replaceUat(order.payment.url),
  },
  invoice: order.invoice && {
    key: replaceUat(order.invoice.key),
    url: replaceUat(order.invoice.url),
  },
  signedInvoice: order.signedInvoice && {
    key: replaceUat(order.signedInvoice.key),
    url: replaceUat(order.signedInvoice.url),
  },
}));

export default orders;
