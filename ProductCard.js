import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-img"/>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <p>Available Sizes: {product.sizes.join(', ')}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;
