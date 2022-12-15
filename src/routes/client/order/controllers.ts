import { format } from 'date-fns';
import { Request, Response } from 'express';
import { startSession } from 'mongoose';

import { calculateAmounts, checkStock } from 'src/helper/orders';
import s3 from 'src/helper/s3';
import { RequestWithFirebase } from 'src/interfaces';
import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Client from 'src/models/client';
import Order, { OrderProduct } from 'src/models/order';
import Product from 'src/models/product';

export const getClientOrders = async (req: RequestWithFirebase, res: Response) => {
  const client = await Client.findOne({ firebaseUid: req.firebaseUid });
  const clientOrders = await Order.find({ client: client?._id, logicDelete: false });
  if (!client) {
    throw new CustomError(404, `Could not find a client by the firebaseUid of ${req.firebaseUid}.`);
  }
  return res.status(200).json({
    message: 'Showing client orders.',
    data: clientOrders,
    error: false,
  });
};

export const getOrderById = async (req: Request, res: Response) => {
  const order = await Order.findOne({ _id: req.params.id })
    .populate('client')
    .populate('products.product');
  if (!order) {
    throw new CustomError(404, `Could not find an order by the id of ${req.params.id}.`);
  }
  return res.status(200).json({
    message: `Showing the specified order by the id of ${req.params.id}.`,
    data: order,
    error: false,
  });
};

export const createOrder = async (req: Request, res: Response) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const client = await Client.findOne({ _id: req.body.client, logicDelete: false });
    if (!client) {
      throw new CustomError(404, `Could not find a client by the id of ${req.params.id}.`);
    }
    if (!checkStock(req.body.products)) {
      throw new CustomError(400, 'There is no stock left.');
    }
    if (!calculateAmounts(req.body.amounts, req.body.products, req.body.exchangeRate)) {
      throw new CustomError(400, 'There has been an error during price calculation.');
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
      orderDate: format(new Date(), 'MM/dd/yyyy'),
      payment: paymentFile,
    });

    const result = await newOrder.save({ session });
    if (result) {
      req.body.products.forEach(async (product: OrderProduct) => {
        const productUpdate = await Product.findOneAndUpdate(
          { _id: product.product._id, logicDelete: false },
          { stock: product.product.stock - product.quantity },
          { new: true },
        )
          .populate('category')
          .session(session);
        if (!productUpdate) {
          throw new CustomError(500, 'Could not update the product stock.');
        }
      });
    } else {
      throw new CustomError(500, 'Could not create the order.');
    }
    await session.commitTransaction();
    return res.status(201).json({
      message: 'Order created successfully.',
      data: result,
      error: false,
    });
  } catch (error: any) {
    await session.abortTransaction();
    throw new CustomError(error.status, error.message);
  } finally {
    session.endSession();
  }
};
