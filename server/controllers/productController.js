import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json({
    success: true,
    message: 'Products fetched successfully',
    data: products,
  });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json({
      success: true,
      message: 'Product fetched successfully',
      data: product,
    });
  } else {
    throw new ApiError(404, 'Product not found');
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Public (mock access)
export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, image, featured } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    image,
    featured: featured || false,
  });

  const createdProduct = await product.save();
  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: createdProduct,
  });
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public (mock access)
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, image, featured } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.image = image || product.image;
    if (featured !== undefined) {
      product.featured = featured;
    }

    const updatedProduct = await product.save();
    res.json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } else {
    throw new ApiError(404, 'Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public (mock access)
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: req.params.id });
    res.json({
      success: true,
      message: 'Product removed',
    });
  } else {
    throw new ApiError(404, 'Product not found');
  }
});
