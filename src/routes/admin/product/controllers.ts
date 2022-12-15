import { Request, Response } from 'express';

import s3 from 'src/helper/s3';
import { CustomError } from 'src/middlewares/error-handler/custom-error.model';
import Product from 'src/models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await Product.find({ logicDelete: false }).populate('category');

  return res.status(200).json({
    message: 'Showing Products.',
    data: allProducts,
    error: false,
  });
};

export const getProductById = async (req: Request, res: Response) => {
  const product = await Product.findOne({ _id: req.params.id, logicDelete: false }).populate(
    'category',
  );
  if (!product) {
    throw new CustomError(404, `Could not find a product by the id of ${req.params.id}.`, true);
  }
  return res.status(200).json({
    message: `Showing the product by the id of ${req.params.id}.`,
    data: product,
    error: false,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  const products = await Product.find({
    logicDelete: false,
    name: req.body.name,
    brand: req.body.brand,
  });
  if (products[0]) {
    throw new CustomError(500, 'The product already exists.');
  }
  let imageFile;
  let technicalFile;
  if (!process.env.IS_TEST) {
    const image = req.body.image;
    const file = req.body.technicalFile;
    const uploadImage = await s3.uploadFile(image, process.env.AWS_BUCKET_PRODUCTS_IMAGES || '');
    imageFile = {
      key: uploadImage.Key,
      url: uploadImage.Location,
    };

    if (file?.base64) {
      const uploadFile = await s3.uploadFile(
        file,
        process.env.AWS_BUCKET_PRODUCTS_TECHNICAL_FILE || '',
      );
      technicalFile = {
        key: uploadFile.Key,
        url: uploadFile.Location,
      };
    }
  } else {
    imageFile = { key: 'test', url: 'test' };
    technicalFile = { key: 'test', url: 'test' };
  }

  const product = new Product({
    ...req.body,
    image: imageFile,
    technicalFile,
  });

  const result = await product.save();
  if (!result) {
    throw new CustomError(500, 'There has been an error creating the product.', true);
  }
  return res.status(201).json({
    message: 'Product created successfully.',
    data: result,
    error: false,
  });
};

export const updateProduct = async (req: Request, res: Response) => {
  let uploadImage;
  let uploadFile;

  const newValues = { ...req.body };
  const product = await Product.findOne({ _id: req.params.id, logicDelete: false }).populate(
    'category',
  );

  if (!product) {
    throw new CustomError(404, `Could not find a product by the id of ${req.params.id}.`, true);
  }
  if (!process.env.IS_TEST) {
    if (newValues.image?.isNew) {
      uploadImage = await s3.replaceFile(
        newValues.image,
        product.image.key,
        process.env.AWS_BUCKET_PRODUCTS_IMAGES || '',
      );
      const imageFile = {
        key: uploadImage.Key,
        url: uploadImage.Location,
      };
      newValues.image = imageFile;
    } else {
      delete newValues.image;
    }

    if (newValues.technicalFile?.isNew) {
      if (product.technicalFile?.key) {
        uploadFile = await s3.replaceFile(
          newValues.technicalFile,
          product.technicalFile.key,
          process.env.AWS_BUCKET_PRODUCTS_TECHNICAL_FILE || '',
        );
      } else {
        uploadFile = await s3.uploadFile(
          newValues.technicalFile,
          process.env.AWS_BUCKET_PRODUCTS_TECHNICAL_FILE || '',
        );
      }
      const pdfFile = {
        key: uploadFile.Key,
        url: uploadFile.Location,
      };
      newValues.technicalFile = pdfFile;
    } else {
      delete newValues.technicalFile;
    }
  } else {
    newValues.image = { key: 'test', url: 'test' };
    newValues.technicalFile = { key: 'test', url: 'test' };
  }

  const productUpdate = await Product.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false },
    newValues,
    { new: true },
  ).populate('category');
  return res.status(200).json({
    message: 'Product updated successfully.',
    data: productUpdate,
    error: false,
  });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const productDeleted = await Product.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false },
    { logicDelete: true },
    { new: true },
  );
  if (!productDeleted) {
    throw new CustomError(404, `Could not find a product by the id of ${req.params.id}.`, true);
  }
  return res.status(200).json({
    message: 'Product deleted successfully.',
    data: productDeleted,
    error: false,
  });
};

export const activeProduct = async (req: Request, res: Response) => {
  const productChanged = await Product.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: false },
    { isActive: true },
    { new: true },
  ).populate('category');
  if (!productChanged) {
    throw new CustomError(
      404,
      `Product with Id ${req.params.id} does not exist or is already active.`,
    );
  }
  return res.status(200).json({
    message: 'Product updated successfully.',
    data: productChanged,
    error: false,
  });
};

export const inactiveProduct = async (req: Request, res: Response) => {
  const productChanged = await Product.findOneAndUpdate(
    { _id: req.params.id, logicDelete: false, isActive: true },
    { isActive: false },
    { new: true },
  ).populate('category');
  if (!productChanged) {
    throw new CustomError(
      404,
      `Product with Id ${req.params.id} does not exist or is already inactive.`,
    );
  }
  return res.status(200).json({
    message: 'Product updated successfully.',
    data: productChanged,
    error: false,
  });
};
