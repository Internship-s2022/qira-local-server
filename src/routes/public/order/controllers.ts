import { Request, Response } from 'express';

import s3 from 'src/helper/s3';
import { Currency } from 'src/interfaces';
import Client from 'src/models/client';
import Order, { Amounts, OrderProduct } from 'src/models/order';
import Product from 'src/models/product';

const checkStock = (orderProducts: OrderProduct[]): boolean => {
  let hasStock = true;
  orderProducts.forEach((product) => {
    if (product.product.stock < product.quantity) {
      hasStock = false;
    }
  });
  return hasStock;
};

const calculateAmounts = async (
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

export const createOrder = async (req: Request, res: Response) => {
  try {
    const client = await Client.findOne({ _id: req.body.client, logicDelete: false });
    if (!client) {
      return res.status(404).json({
        message: `Could not find a client by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    if (!checkStock(req.body.products)) {
      return res.status(400).json({
        message: 'An error has ocurred: there is no stock left.',
        data: undefined,
        error: true,
      });
    }
    if (!calculateAmounts(req.body.amounts, req.body.products, req.body.exchangeRate)) {
      return res.status(400).json({
        message: 'An error has ocurred: there has been an error during price calculation.',
        data: undefined,
        error: true,
      });
    }

    const payment = req.body.payment;
    const uploadPayment = await s3.uploadFile(
      payment,
      process.env.AWS_BUCKET_TRANSFER_RECEIPTS || '',
    );
    const paymentFile = {
      key: uploadPayment.Key,
      url: uploadPayment.Location,
    };

    const newOrder = new Order({
      ...req.body,
      payment: paymentFile,
    });

    const result = await newOrder.save();
    if (result) {
      req.body.products.forEach(async (product: OrderProduct) => {
        const productUpdate = await Product.findOneAndUpdate(
          { _id: product.product._id, logicDelete: false },
          { ...product.product, stock: product.product.stock - product.quantity },
          { new: true },
        ).populate('category');
        if (!productUpdate) {
          return res.status(400).json({
            message: 'Something went wrong.',
            data: undefined,
            error: true,
          });
        }
      });
    } else {
      return res.status(400).json({
        message: 'Something went wrong.',
        data: undefined,
        error: true,
      });
    }
    return res.status(201).json({
      message: 'Order created successfully.',
      data: result,
      error: false,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};
