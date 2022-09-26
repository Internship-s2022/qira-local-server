import { Request, Response } from 'express';

import Category from 'src/models/category';

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await Category.find({ logicDelete: false });

    return res.status(200).json({
      message: 'Showing Categories.',
      data: allCategories,
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

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        message: `Could not found a category by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Showing the specified category by the id of ${req.params.id}.`,
      data: category,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: `Could not found a category by the id of ${req.params.id}.`,
      data: undefined,
      error: true,
    });
  }
};

export default {
  getAllCategories,
  getCategoryById,
};
