const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

let cart = [];

router.post("/add", protect, (req, res) => {
  const item = { user: req.user.id, productId: req.body.productId };
  cart.push(item);
  res.json({ message: "Item added to cart", item });
});

module.exports = router;
