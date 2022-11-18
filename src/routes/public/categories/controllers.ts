import { Request, Response } from 'express';

import Category from 'src/models/category';

export const getAllCategories = async (req: Request, res: Response) => {
  const allCategories = await Category.find({ logicDelete: false, isActive: true });

  if (allCategories.length < 1) {
    throw new Error('There are no active categories.');
  }

  return res.status(200).json({
    message: 'Showing active categories.',
    data: allCategories,
    error: false,
  });
};
