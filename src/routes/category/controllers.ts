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

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category({
      name: req.body.name,
      image: req.body.image,
      isActive: req.body.isActive,
      logicDelete: req.body.logicDelete,
    });
    const result = await category.save();
    return res.status(201).json({
      message: 'Category created successfully',
      data: result,
      error: false,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
      data: undefined,
      error: true,
    });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const categoryUpdate = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!categoryUpdate) {
      return res.status(404).json({
        message: `Could not found a category by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Category updated successfully',
      data: categoryUpdate,
      error: false,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: 'There was an error with the request',
      data: undefined,
      error: true,
    });
  }
};

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryDelete = await Category.findByIdAndRemove(req.params.id);

    if (!categoryDelete) {
      return res.status(404).json({
        message: `Could not found a category by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Category deleted successfully',
      data: categoryDelete,
      error: false,
    });
  } catch (error) {
    return res.json({
      message: 'There was an error with the request',
      data: undefined,
      error: true,
    });
  }
};

export default {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
