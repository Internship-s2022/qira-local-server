import { Request, Response } from 'express';

import s3 from 'src/helper/s3';
import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Category from 'src/models/category';

export const getAllCategories = async (req: Request, res: Response) => {
  const allCategories = await Category.find({ logicDelete: false });

  return res.status(200).json({
    message: 'Showing Categories.',
    data: allCategories,
    error: false,
  });
};

export const getCategoryById = async (req: Request, res: Response) => {
  const category = await Category.findOne({ _id: req.params.id, logicDelete: false });
  if (!category) {
    throw new CustomError(404, `Could not find a category by the id of ${req.params.id}.`);
  }
  return res.status(200).json({
    message: `Showing the category by the id of ${req.params.id}.`,
    data: category,
    error: false,
  });
};

export const createCategory = async (req: Request, res: Response) => {
  const categories = await Category.find({
    logicDelete: false,
    name: req.body.name,
    url: req.body.url,
  });
  if (categories[0]) {
    throw new CustomError(500, 'The category already exists.');
  }
  let imageFile;
  if (!process.env.IS_TEST) {
    const image = req.body.image;
    const uploadImage = await s3.uploadFile(image, process.env.AWS_BUCKET_CATEGORIES_IMAGES || '');
    imageFile = {
      key: uploadImage.Key,
      url: uploadImage.Location,
    };
  } else {
    imageFile = {
      key: 'test',
      url: 'test',
    };
  }
  const category = new Category({
    name: req.body.name,
    image: imageFile,
    url: req.body.url,
  });
  const result = await category.save();
  if (!result) {
    throw new CustomError(500, 'There has been an error creating the category.');
  }
  return res.status(201).json({
    message: 'Category created successfully.',
    data: result,
    error: false,
  });
};

export const updateCategory = async (req: Request, res: Response) => {
  const newValues = { ...req.body };
  const category = await Category.findOne({ _id: req.params.id, logicDelete: false });
  if (!category) {
    throw new CustomError(404, `Could not find a category by the id of ${req.params.id}.`);
  }
  if (!process.env.IS_TEST) {
    if (newValues.image?.isNew) {
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
  } else {
    newValues.image = {
      key: 'test',
      url: 'test',
    };
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
};

export const deleteCategory = async (req: Request, res: Response) => {
  const categoryDelete = await Category.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false },
    { logicDelete: true },
    { new: true },
  );
  if (!categoryDelete) {
    throw new CustomError(404, `Could not find a category by the id of ${req.params.id}.`);
  }
  return res.status(200).json({
    message: 'Category deleted successfully.',
    data: categoryDelete,
    error: false,
  });
};

export const activeCategory = async (req: Request, res: Response) => {
  const categoryChange = await Category.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: false },
    { isActive: true },
    { new: true },
  );
  if (!categoryChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist or is already active.`);
  }
  return res.status(200).json({
    message: 'Category updated successfully.',
    data: categoryChange,
    error: false,
  });
};

export const inactiveCategory = async (req: Request, res: Response) => {
  const categoryChange = await Category.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: true },
    { isActive: false },
    { new: true },
  );
  if (!categoryChange) {
    throw new CustomError(404, `Id ${req.params.id} does not exist or is already inactive.`);
  }
  return res.status(200).json({
    message: 'Category updated successfully.',
    data: categoryChange,
    error: false,
  });
};
