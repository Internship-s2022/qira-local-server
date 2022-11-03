import { Request, Response } from 'express';

import s3 from 'src/helper/s3';
import Product from 'src/models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({ logicDelete: false }).populate('category');

    return res.status(200).json({
      message: 'Showing Products.',
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

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, logicDelete: false }).populate(
      'category',
    );
    if (!product) {
      return res.status(404).json({
        message: `Could not find a product by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: `Showing the product by the id of ${req.params.id}.`,
      data: product,
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

export const createProduct = async (req: Request, res: Response) => {
  try {
    const image = req.body.image;
    const file = req.body.technicalFile;
    const uploadImage = await s3.uploadFile(image, process.env.AWS_BUCKET_PRODUCTS_IMAGES || '');
    const imageFile = {
      key: uploadImage.Key,
      url: uploadImage.Location,
    };
    let technicalFile;

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

    const product = new Product({
      ...req.body,
      image: imageFile,
      technicalFile,
    });

    const result = await product.save();
    return res.status(201).json({
      message: 'Product created successfully.',
      data: result,
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    let uploadImage;
    let uploadFile;

    const newValues = { ...req.body };
    const product = await Product.findOne({ _id: req.params.id, logicDelete: false });

    if (!product) {
      return res.status(404).json({
        message: `Could not find a product by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }

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

    const productUpdate = await Product.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      newValues,
      { new: true },
    );
    return res.status(200).json({
      message: 'Product updated successfully.',
      data: productUpdate,
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

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productDeleted = await Product.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      { logicDelete: true },
      { new: true },
    );
    if (!productDeleted) {
      return res.status(404).json({
        message: `Could not find a product by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Product deleted successfully.',
      data: productDeleted,
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

export const activeProduct = async (req: Request, res: Response) => {
  try {
    const productChanged = await Product.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: false },
      { isActive: true },
      { new: true },
    );
    if (!productChanged) {
      return res.status(404).json({
        message: `Products with Id ${req.params.id} does not exist or is already active.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Product updated successfully.',
      data: productChanged,
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

export const inactiveProduct = async (req: Request, res: Response) => {
  try {
    const productChanged = await Product.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false, isActive: true },
      { isActive: false },
      { new: true },
    );
    if (!productChanged) {
      return res.status(404).json({
        message: `Products with Id ${req.params.id} does not exist or is already inactive.`,
        data: undefined,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Product updated successfully.',
      data: productChanged,
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
