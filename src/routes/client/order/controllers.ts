import { Request, Response } from 'express';

import { calculateAmounts, checkStock } from 'src/helper/orders';
import s3 from 'src/helper/s3';
import { RequestWithFirebase } from 'src/interfaces';
import Client from 'src/models/client';
import Order, { OrderProduct } from 'src/models/order';
import Product from 'src/models/product';

export const getClientOrders = async (req: RequestWithFirebase, res: Response) => {
  try {
    const client = await Client.findOne({ firebaseUid: req.firebaseUid });
    const clientOrders = await Order.find({ client: client?._id, logicDelete: false });
    if (!client) {
      return res.status(404).json({
        message: `Could not find a client by the firebaseUid of ${req.firebaseUid}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Showing client orders.',
      data: clientOrders,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findOne({ _id: req.params.id })
      .populate('client')
      .populate('products.product');
    if (!order) {
      return res.status(404).json({
        message: `Could not find an order by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Showing the specified order by the id of ${req.params.id}.`,
      data: order,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Something went wrong: ${error.message}`,
      data: undefined,
      error: true,
    });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const client = await Client.findOne({ _id: req.body.client, logicDelete: false });
  if (!client) {
    throw new Error(`Could not find a client by the id of ${req.params.id}.`);
  }
  if (!checkStock(req.body.products)) {
    throw new Error('There is no stock left.');
  }
  if (!calculateAmounts(req.body.amounts, req.body.products, req.body.exchangeRate)) {
    throw new Error('There has been an error during price calculation.');
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
        { stock: product.product.stock - product.quantity },
        { new: true },
      ).populate('category');
      if (!productUpdate) {
        throw new Error('Could not update the product stock.');
      }
    });
  } else {
    throw new Error('Could not create the order.');
  }
  return res.status(201).json({
    message: 'Order created successfully.',
    data: result,
    error: false,
  });
};
