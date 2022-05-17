const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: String, required: true, trim: true },
  description: { type: Number, required: true },
  code: { type: String, required: true, trim: true }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;