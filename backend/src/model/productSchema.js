const mongoose = require('../config/mongoConnection');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock_quantity: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
