const express = require('express');
const router = express.Router();

router.post('/predict', (req, res) => {
    const { height, weight } = req.body;
    const bmi = weight / ((height / 100) ** 2);
    let fit = 'Regular';
    if (bmi < 18.5) fit = 'Slim';
    else if (bmi > 25) fit = 'Loose';
    res.json({ recommendedFit: fit });
});

module.exports = router;
