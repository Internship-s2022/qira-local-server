import { Request, Response } from 'express';

import s3 from 'src/helper/s3';
import Category from 'src/models/category';

export const getAllCategories = async (req: Request, res: Response) => {
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

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findOne({ _id: req.params.id, logicDelete: false });
    if (!category) {
      return res.status(404).json({
        message: `Could not find a category by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Showing the category by the id of ${req.params.id}.`,
      data: category,
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

export const createCategory = async (req: Request, res: Response) => {
  try {
    const image = req.body.image;
    const uploadImage = await s3.uploadFile(image, process.env.AWS_BUCKET_CATEGORIES_IMAGES || '');
    const imageFile = {
      key: uploadImage.Key,
      url: uploadImage.Location,
    };

    const category = new Category({
      name: req.body.name,
      image: imageFile,
      url: req.body.url,
    });
    const result = await category.save();
    return res.status(201).json({
      message: 'Category created successfully.',
      data: result,
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

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const newValues = { ...req.body };

    if (newValues.image?.isNew) {
      const category = await Category.findOne({ _id: req.params.id, logicDelete: false });
      if (!category) {
        return res.status(404).json({
          message: `Could not find a category by the id of ${req.params.id}.`,
          data: undefined,
          error: true,
        });
      }
      const uploadImage = await s3.replaceFile(
        newValues.image,
        category.image.key,
        process.env.AWS_BUCKET_CATEGORIES_IMAGES || '',
      );
      const imageFile = {
        key: uploadImage.Key,
        url: uploadImage.Location,
      };
      newValues.image = imageFile;
    } else {
      delete newValues.image;
    }

    const categoryUpdate = await Category.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      newValues,
      { new: true },
    );
    return res.status(200).json({
      message: 'Category updated successfully.',
      data: categoryUpdate,
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

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const categoryDelete = await Category.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      { logicDelete: true },
      { new: true },
    );
    if (!categoryDelete) {
      return res.status(404).json({
        message: `Could not find a category by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Category deleted successfully.',
      data: categoryDelete,
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

export const activeCategory = async (req: Request, res: Response) => {
  try {
    const categoryChange = await Category.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: false },
      { isActive: true },
      { new: true },
    );
    if (!categoryChange) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist or is already active.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Category updated successfully.',
      data: categoryChange,
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

export const inactiveCategory = async (req: Request, res: Response) => {
  try {
    const categoryChange = await Category.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: true },
      { isActive: false },
      { new: true },
    );
    if (!categoryChange) {
      return res.status(404).json({
        message: `Id ${req.params.id} does not exist or is already inactive.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Category updated successfully.',
      data: categoryChange,
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
