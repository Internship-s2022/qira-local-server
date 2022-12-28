import { Request, Response } from 'express';
import { startSession } from 'mongoose';

import s3 from 'src/helper/s3';
import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Order, { OrderState } from 'src/models/order';
import Product from 'src/models/product';
export const getAllOrders = async (req: Request, res: Response) => {
  const allOrders = await Order.find({ ...req.query }).populate('client');

  return res.status(200).json({
    message: 'Showing Orders.',
    data: allOrders,
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

export const getOrderToDeliver = async (req: Request, res: Response) => {
  const order = await Order.findOne({ _id: req.params.id })
    .populate('client')
    .populate('products.product');
  if (
    !order ||
    (order.state !== OrderState.DELIVERY_PENDING && order.state !== OrderState.DELIVERED)
  ) {
    throw new CustomError(404, `Could not find an order by the id of ${req.params.id}.`);
  }
  if (order.state === OrderState.DELIVERED) {
    throw new CustomError(404, `The order with the id ${req.params.id} is already delivered.`);
  }
  const validAuthorized = order.authorized.some((authorized) => {
    return authorized.dni === req.query.dni;
  });
  if (!validAuthorized) {
    throw new CustomError(404, `Could not find an authorized with the dni ${req.query.dni}.`);
  }
  return res.status(200).json({
    message: `Showing the specified order by the id of ${req.params.id}.`,
    data: order,
    error: false,
  });
};

export const approveOrder = async (req: Request, res: Response) => {
  const invoice = req.body.invoice;
  let invoiceFile;
  if (!process.env.IS_TEST) {
    const uploadInvoice = await s3.uploadFile(invoice, process.env.AWS_BUCKET_ORDER_INVOICE || '');
    invoiceFile = {
      key: uploadInvoice.Key,
      url: uploadInvoice.Location,
    };
  } else {
    invoiceFile = {
      key: 'test',
      url: 'test',
    };
  }
  const orderUpdate = await Order.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, state: OrderState.APPROVE_PENDING },
    { state: OrderState.DELIVERY_PENDING, invoice: invoiceFile, payAuthDate: Date.now() },
    { new: true },
  )
    .populate('client')
    .populate('products.product');
  if (!orderUpdate) {
    throw new CustomError(
      404,
      `Could not find an order by the id of ${req.params.id} or the change you are trying to make it is not allowed.`,
    );
  }
  return res.status(200).json({
    message: 'Order state updated successfully.',
    data: orderUpdate,
    error: false,
  });
};

export const deliverOrder = async (req: Request, res: Response) => {
  const signedInvoice = req.body.signedInvoice;
  let signedInvoiceFile;
  if (!process.env.IS_TEST) {
    const uploadSignedInvoice = await s3.uploadFile(
      signedInvoice,
      process.env.AWS_BUCKET_ORDER_SIGNED_INVOICE || '',
    );
    signedInvoiceFile = {
      key: uploadSignedInvoice.Key,
      url: uploadSignedInvoice.Location,
    };
  } else {
    signedInvoiceFile = {
      key: 'test',
      url: 'test',
    };
  }
  const orderUpdate = await Order.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, state: OrderState.DELIVERY_PENDING },
    { state: OrderState.DELIVERED, signedInvoice: signedInvoiceFile, deliverDate: Date.now() },
    { new: true },
  )
    .populate('client')
    .populate('products.product');
  if (!orderUpdate) {
    throw new CustomError(
      404,
      `Could not find an order by the id of ${req.params.id} or the change you are trying to make it is not allowed.`,
    );
  }
  return res.status(200).json({
    message: 'Order state updated successfully.',
    data: orderUpdate,
    error: false,
  });
};

export const rejectOrder = async (req: Request, res: Response) => {
  const session = await startSession();
  session.startTransaction();
  const order = await Order.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, state: OrderState.APPROVE_PENDING },
    { state: OrderState.REJECTED },
    { new: true },
  )
    .populate('client')
    .populate('products.product');
  if (!order) {
    throw new CustomError(404, `Could not find an order by the id of ${req.params.id}.`);
  }
  const promises = order.products.map(async (product) => {
    const completeProduct = await Product.findById(product.product);
    if (completeProduct) {
      return Product.findOneAndUpdate(
        { _id: product.product, logicDelete: false },
        { stock: completeProduct.stock + product.quantity },
        { new: true },
      ).session(session);
    } else {
      await session.abortTransaction();
      throw new CustomError(400, 'Something went wrong.');
    }
  });
  const productsChanged = await Promise.all(promises);
  const someUndefined = productsChanged.some((product) => !product);
  if (someUndefined) {
    await session.abortTransaction();
    throw new CustomError(500, 'Could not update the product stock.');
  }
  return res.status(200).json({
    message: `Order rejected successfully ${req.params.id}.`,
    data: order,
    error: false,
  });
};
