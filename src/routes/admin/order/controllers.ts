import { Request, Response } from 'express';

import Order from 'src/models/order';

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const allOrders = await Order.find({ ...req.query });
    return res.status(200).json({
      message: 'Showing Orders.',
      data: allOrders,
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
    const order = await Order.findOne({ _id: req.params.id });
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
