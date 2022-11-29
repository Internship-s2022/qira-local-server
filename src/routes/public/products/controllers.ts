import { Request, Response } from 'express';

import Product from 'src/models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await Product.find({ logicDelete: false, isActive: true }).populate(
    'category',
  );

  return res.status(200).json({
    message: 'Showing active products.',
    data: allProducts,
    error: false,
  });
};
