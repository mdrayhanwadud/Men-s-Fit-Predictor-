const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  size: String,
});

module.exports = mongoose.model('Product', productSchema);
