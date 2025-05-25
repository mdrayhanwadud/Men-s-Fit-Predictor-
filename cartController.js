const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const cartItem = new Cart({ userId: req.user._id, productId });
    await cartItem.save();
    res.status(201).json({ message: 'Added to cart' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const items = await Cart.find({ userId: req.user._id }).populate('productId');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
