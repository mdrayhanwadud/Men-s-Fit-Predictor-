const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import route files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Enables reading JSON in req.body

// ✅ Routes
app.use('/api/users', userRoutes);     // e.g., /api/users/register, /api/users/login
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// ✅ MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/menswear', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected successfully');
  
  // Start the server only after DB is connected
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ MongoDB connection failed:', err);
});
