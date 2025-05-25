const express = require('express');
const router = express.Router();
const { buy } = require('../controllers/buyController');
const auth = require('../middleware/auth');

router.post('/', auth, buy);

module.exports = router;
