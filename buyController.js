const User = require('../models/User');

exports.buy = async (req, res) => {
  const user = await User.findById(req.user.userId);
  user.cart = [];
  await user.save();
  res.json({ message: 'Purchase successful. Cart cleared.' });
};
