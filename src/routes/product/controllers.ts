import { Request, Response } from 'express';

import Product from 'src/models/product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({ logicDelete: false });

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
    const product = await Product.findOne({ _id: req.params.id, logicDelete: false });
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
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      technicalFile: req.body.technicalFile,
      brand: req.body.brand,
      category: req.body.category,
      currency: req.body.currency,
      stock: req.body.stock,
      isNew: req.body.isNew,
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
    const productUpdated = await Product.findOneAndUpdate(
      { _id: req.params.id, logicDelete: false },
      req.body,
      { new: true },
    );
    if (!productUpdated) {
      return res.status(404).json({
        message: `Could not find a product by the id of ${req.params.id}.`,
        data: undefined,
        error: true,
      });
    }
    return res
      .status(200)
      .json({ message: 'Product updated successfully.', data: productUpdated, error: false });
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
