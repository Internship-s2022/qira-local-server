import { Request, Response } from 'express';

import Product from 'src/models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({ logicDelete: false, isActive: true }).populate(
      'category',
    );

    return res.status(200).json({
      message: 'Showing active products.',
      data: allProducts,
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
