import React from 'react';
import './ProductList.css';

const sampleProducts = [
  { name: "Slim Fit Shirt", category: "shirt", size: "M", price: 29.99, image: "/images/shirt1.jpg" },
  { name: "Classic Blue Jeans", category: "jeans", size: "32", price: 49.99, image: "/images/jeans1.jpg" },
  { name: "Casual T-Shirt", category: "tshirt", size: "L", price: 19.99, image: "/images/tshirt1.jpg" },
  { name: "Formal Blazer", category: "blazer", size: "40", price: 89.99, image: "/images/blazer1.jpg" },
  { name: "Regular Fit Trouser", category: "trouser", size: "34", price: 39.99, image: "/images/trouser1.jpg" },
  { name: "Baggy Jeans", category: "baggy", size: "36", price: 44.99, image: "/images/baggy1.jpg" },
  { name: "Oxford Shirt", category: "shirt", size: "M", price: 35.99, image: "/images/shirt2.jpg" },
  { name: "Skinny Jeans", category: "jeans", size: "30", price: 54.99, image: "/images/jeans2.jpg" },
  { name: "Graphic T-Shirt", category: "tshirt", size: "XL", price: 22.99, image: "/images/tshirt2.jpg" },
  { name: "Party Blazer", category: "blazer", size: "42", price: 99.99, image: "/images/blazer2.jpg" },
  { name: "Slim Trousers", category: "trouser", size: "32", price: 42.99, image: "/images/trouser2.jpg" },
  { name: "Loose Fit Baggy Jeans", category: "baggy", size: "38", price: 47.99, image: "/images/baggy2.jpg" },
  { name: "Striped Shirt", category: "shirt", size: "L", price: 31.99, image: "/images/shirt3.jpg" },
  { name: "Black Denim Jeans", category: "jeans", size: "32", price: 59.99, image: "/images/jeans3.jpg" },
  { name: "Sleeveless T-Shirt", category: "tshirt", size: "M", price: 15.99, image: "/images/tshirt3.jpg" }
];

function ProductList({ setShowLogin }) {
  const token = localStorage.getItem('token');

  const handleBuy = async (productId) => {
    if (!token) {
      setShowLogin(true);
      return;
    }
    alert('Buy successful! (Mock)');
  };

  const handleAddToCart = async (productId) => {
    if (!token) {
      setShowLogin(true);
      return;
    }
    alert('Added to cart! (Mock)');
  };

  return (
    <div className="product-list">
      {sampleProducts.map((product, idx) => (
        <div key={idx} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Size: {product.size}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product._id)}>Add to Cart</button>
          <button onClick={() => handleBuy(product._id)}>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
