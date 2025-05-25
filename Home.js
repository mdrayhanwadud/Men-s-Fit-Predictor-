import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  // Shirts
  {
    category: 'Shirts',
    name: 'Classic White Shirt',
    description: 'Perfect for formal occasions.',
    price: 35.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://i.imgur.com/Z7k4tQm.png',
  },
  {
    category: 'Shirts',
    name: 'Blue Oxford Shirt',
    description: 'Perfect for semi-formal wear.',
    price: 38.99,
    sizes: ['M', 'L', 'XL'],
    image: 'https://i.imgur.com/MPYxr4F.png',
  },
  {
    category: 'Shirts',
    name: 'Checked Casual Shirt',
    description: 'Ideal for casual meetups.',
    price: 29.99,
    sizes: ['S', 'M', 'L'],
    image: 'https://i.imgur.com/ozQ3YXP.png',
  },
  {
    category: 'Shirts',
    name: 'Linen Shirt',
    description: 'Light and breathable.',
    price: 34.99,
    sizes: ['M', 'L'],
    image: 'https://i.imgur.com/9WhA1vT.png',
  },
  {
    category: 'Shirts',
    name: 'Black Formal Shirt',
    description: 'Sleek and stylish.',
    price: 39.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://i.imgur.com/vHAbhV4.png',
  },

  // T-Shirts
  {
    category: 'T-Shirts',
    name: 'Basic White Tee',
    description: 'Soft cotton t-shirt.',
    price: 19.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://i.imgur.com/bLP9sUL.png',
  },
  {
    category: 'T-Shirts',
    name: 'Graphic Tee',
    description: 'Trendy design printed.',
    price: 24.99,
    sizes: ['M', 'L'],
    image: 'https://i.imgur.com/wtKOfJz.png',
  },
  {
    category: 'T-Shirts',
    name: 'Navy Blue Tee',
    description: 'Minimalist design.',
    price: 21.99,
    sizes: ['S', 'M', 'L'],
    image: 'https://i.imgur.com/EIAnZqF.png',
  },
  {
    category: 'T-Shirts',
    name: 'Oversized Tee',
    description: 'Modern fit and feel.',
    price: 27.99,
    sizes: ['L', 'XL'],
    image: 'https://i.imgur.com/FUNM1eW.png',
  },
  {
    category: 'T-Shirts',
    name: 'Striped T-Shirt',
    description: 'Classic stripes for any day.',
    price: 23.49,
    sizes: ['S', 'M', 'L'],
    image: 'https://i.imgur.com/OHP4drz.png',
  },

  // Jeans
  {
    category: 'Jeans',
    name: 'Dark Blue Jeans',
    description: 'Classic slim fit.',
    price: 49.99,
    sizes: ['30', '32', '34'],
    image: 'https://i.imgur.com/sZyHMAh.png',
  },
  {
    category: 'Jeans',
    name: 'Washed Grey Jeans',
    description: 'Vintage faded look.',
    price: 54.99,
    sizes: ['30', '32', '34', '36'],
    image: 'https://i.imgur.com/M2nlHQv.png',
  },
  {
    category: 'Jeans',
    name: 'Black Denim',
    description: 'Perfect for all occasions.',
    price: 52.49,
    sizes: ['28', '30', '32', '34'],
    image: 'https://i.imgur.com/AVIfYhn.png',
  },
  {
    category: 'Jeans',
    name: 'Light Blue Jeans',
    description: 'Casual and comfortable.',
    price: 47.99,
    sizes: ['30', '32', '36'],
    image: 'https://i.imgur.com/D6USu4P.png',
  },
  {
    category: 'Jeans',
    name: 'Stonewashed Jeans',
    description: 'Rugged look.',
    price: 56.00,
    sizes: ['32', '34'],
    image: 'https://i.imgur.com/QC1PYoi.png',
  },

  // Baggy Jeans
  {
    category: 'Baggy Jeans',
    name: 'Baggy Fit Light Wash',
    description: 'Comfort first!',
    price: 48.99,
    sizes: ['30', '32', '34'],
    image: 'https://i.imgur.com/YuhrUNX.png',
  },
  {
    category: 'Baggy Jeans',
    name: 'Streetwear Baggy Denim',
    description: 'Loose fit with style.',
    price: 53.49,
    sizes: ['32', '34', '36'],
    image: 'https://i.imgur.com/CvQSP7l.png',
  },
  {
    category: 'Baggy Jeans',
    name: 'Cargo Baggy Jeans',
    description: 'With utility pockets.',
    price: 55.00,
    sizes: ['30', '32', '34'],
    image: 'https://i.imgur.com/sCN0Cl3.png',
  },
  {
    category: 'Baggy Jeans',
    name: 'Faded Baggy Jeans',
    description: 'Relaxed & trendy.',
    price: 50.75,
    sizes: ['28', '30', '32'],
    image: 'https://i.imgur.com/G3v8Ebh.png',
  },
  {
    category: 'Baggy Jeans',
    name: 'Washed Baggy Fit',
    description: 'For comfort days.',
    price: 46.99,
    sizes: ['32', '34'],
    image: 'https://i.imgur.com/Eoq6OAF.png',
  },

  // Blazers
  {
    category: 'Blazers',
    name: 'Navy Blue Blazer',
    description: 'Sharp business look.',
    price: 89.99,
    sizes: ['M', 'L', 'XL'],
    image: 'https://i.imgur.com/UDY4Bva.png',
  },
  {
    category: 'Blazers',
    name: 'Grey Casual Blazer',
    description: 'Business casual.',
    price: 82.49,
    sizes: ['M', 'L'],
    image: 'https://i.imgur.com/3bdVuCn.png',
  },
  {
    category: 'Blazers',
    name: 'Classic Black Blazer',
    description: 'Timeless formal look.',
    price: 94.00,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://i.imgur.com/Raol3zK.png',
  },
  {
    category: 'Blazers',
    name: 'Beige Modern Blazer',
    description: 'Perfect for evening wear.',
    price: 79.99,
    sizes: ['M', 'L'],
    image: 'https://i.imgur.com/MdKoXZk.png',
  },
  {
    category: 'Blazers',
    name: 'Olive Green Blazer',
    description: 'Unique and bold.',
    price: 88.75,
    sizes: ['M', 'L', 'XL'],
    image: 'https://i.imgur.com/omHqLgQ.png',
  },

  // Trousers
  {
    category: 'Trousers',
    name: 'Slim Fit Trousers',
    description: 'Office wear essential.',
    price: 45.50,
    sizes: ['30', '32', '34'],
    image: 'https://i.imgur.com/IFRMyap.png',
  },
  {
    category: 'Trousers',
    name: 'Chino Pants',
    description: 'Perfect for everyday use.',
    price: 42.99,
    sizes: ['30', '32', '34', '36'],
    image: 'https://i.imgur.com/z3bTmlP.png',
  },
  {
    category: 'Trousers',
    name: 'Black Formal Pants',
    description: 'For formal events.',
    price: 49.00,
    sizes: ['28', '30', '32'],
    image: 'https://i.imgur.com/7ekSkFl.png',
  },
  {
    category: 'Trousers',
    name: 'Beige Casual Trousers',
    description: 'Flexible and soft.',
    price: 43.75,
    sizes: ['30', '32', '34'],
    image: 'https://i.imgur.com/WClMXRW.png',
  },
  {
    category: 'Trousers',
    name: 'Textured Dress Pants',
    description: 'Premium feel.',
    price: 51.20,
    sizes: ['32', '34', '36'],
    image: 'https://i.imgur.com/IE0MXgj.png',
  },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">MenStyle - Premium Men's Wear</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
