const Product = require('../models/Product')

// GET /api/products
exports.getAll = async (req,res) => {
  const prods = await Product.find().populate('author','firstName lastName')
  res.json(prods)
}

// POST /api/products
exports.create = async (req,res) => {
  // req.file est injecté par multer
  if (!req.file) {
    return res.status(400).json({ message: 'Photo requise' })
  }
  const { name, description, category, price } = req.body
  const imageUrl = `/uploads/${req.file.filename}`
  const prod = await Product.create({
    name, description, category,
    price, imageUrl,
    author: req.user._id
  })
  res.status(201).json(prod)
}
