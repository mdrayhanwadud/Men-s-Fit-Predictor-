// /server/controllers/userController.js

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // ✅ Check for all required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // ✅ Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    // ✅ Create token
    const token = jwt.sign({ id: newUser._id }, 'your_jwt_secret', { expiresIn: '7d' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

module.exports = { registerUser };
