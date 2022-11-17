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
  let sameAmounts = true;
  const recalculatedAmounts: Amounts = {
    products: 0,
    taxes: 0,
    total: 0,
  };
  const products = await Product.find({ logicDelete: false, isActive: true });
  orderProducts.forEach((cartProduct) => {
    const product = products.find((product) => cartProduct.product._id === product._id.toString());
    if (product) {
      let productPrice = product.price * cartProduct.quantity;
      if (product.currency === Currency.DOLLAR) {
        productPrice = productPrice * exchangeRate;
      }
      recalculatedAmounts.products = recalculatedAmounts.products + productPrice;
    } else {
      sameAmounts = false;
      return sameAmounts;
    }
  });
  recalculatedAmounts.taxes = recalculatedAmounts.products * 0.21;
  recalculatedAmounts.total = recalculatedAmounts.products + recalculatedAmounts.taxes;
  if (
    amounts.products !== recalculatedAmounts.products ||
    amounts.taxes !== recalculatedAmounts.taxes ||
    amounts.total !== recalculatedAmounts.total
  ) {
    sameAmounts = false;
  }
  return sameAmounts;
};
