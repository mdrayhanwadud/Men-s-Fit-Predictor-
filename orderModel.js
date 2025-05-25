const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
  status: {
    type: String,
    default: 'Pending',
  },
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

module.exports = Order;
