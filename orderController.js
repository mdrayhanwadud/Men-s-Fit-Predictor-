// /server/controllers/orderController.js
const Order = require('../models/orderModel');

exports.placeOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    const newOrder = new Order({
      user: userId,
      product: productId,
      quantity,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order.' });
  }
};
