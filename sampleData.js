const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/db');

connectDB();

const products = [
  { name: 'Formal Shirt', category: 'Shirt', price: 1200, image: 'shirt1.jpg' },
  { name: 'Casual Shirt', category: 'Shirt', price: 1100, image: 'shirt2.jpg' },
  { name: 'Slim T-Shirt', category: 'T-Shirt', price: 800, image: 'tshirt1.jpg' },
  { name: 'Oversized T-Shirt', category: 'T-Shirt', price: 850, image: 'tshirt2.jpg' },
  { name: 'Regular Jeans', category: 'Jeans', price: 1300, image: 'jeans1.jpg' },
  { name: 'Ripped Jeans', category: 'Jeans', price: 1350, image: 'jeans2.jpg' },
  { name: 'Baggy Jeans Blue', category: 'Baggy Jeans', price: 1450, image: 'baggy1.jpg' },
  { name: 'Baggy Jeans Black', category: 'Baggy Jeans', price: 1480, image: 'baggy2.jpg' },
  { name: 'Classic Blazer', category: 'Blazer', price: 3200, image: 'blazer1.jpg' },
  { name: 'Slim Fit Blazer', category: 'Blazer', price: 3400, image: 'blazer2.jpg' },
  { name: 'Formal Trousers', category: 'Trousers', price: 1100, image: 'trouser1.jpg' },
  { name: 'Casual Trousers', category: 'Trousers', price: 1050, image: 'trouser2.jpg' },
];

const insertData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Sample data inserted!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

insertData();
