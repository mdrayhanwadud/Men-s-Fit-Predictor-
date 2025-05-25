// /server/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/orderController');
const authenticate = require('../middleware/authMiddleware');

router.post('/buy', authenticate, placeOrder);

module.exports = router;
