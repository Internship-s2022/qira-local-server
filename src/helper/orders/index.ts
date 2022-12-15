import Dinero from 'dinero.js';

import { Currency } from 'src/interfaces';
import { Amounts, OrderProduct } from 'src/models/order';
import Product from 'src/models/product';

export const checkStock = (orderProducts: OrderProduct[]): boolean => {
  let hasStock = true;
  orderProducts.forEach((product) => {
    if (product.product.stock < product.quantity) {
      hasStock = false;
    }
  });
  return hasStock;
};

export const calculateAmounts = async (
  amounts: Amounts,
  orderProducts: OrderProduct[],
  exchangeRate: number,
) => {
  const recalculatedAmounts: Amounts = {
    products: 0,
    taxes: 0,
    total: 0,
  };
  const products = await Product.find({ logicDelete: false, isActive: true });
  orderProducts.forEach((cartProduct) => {
    const product = products.find((product) => cartProduct.product._id === product._id.toString());
    if (product) {
      let productPrice = Dinero({ amount: product.price }).multiply(cartProduct.quantity);
      if (product.currency === Currency.DOLLAR) {
        productPrice = Dinero({ amount: productPrice.getAmount() }).multiply(exchangeRate);
      }
      recalculatedAmounts.products = Dinero({ amount: recalculatedAmounts.products })
        .add(productPrice)
        .getAmount();
    } else {
      return false;
    }
  });
  recalculatedAmounts.taxes = Dinero({ amount: recalculatedAmounts.products })
    .multiply(0.21)
    .getAmount();
  recalculatedAmounts.total = Dinero({ amount: recalculatedAmounts.products })
    .add(Dinero({ amount: recalculatedAmounts.taxes }))
    .getAmount();
  if (
    amounts.products !== recalculatedAmounts.products ||
    amounts.taxes !== recalculatedAmounts.taxes ||
    amounts.total !== recalculatedAmounts.total
  ) {
    return false;
  }
  return true;
};
