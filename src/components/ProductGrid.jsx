import React from 'react';

const ProductGrid = ({ category, products }) => {
  const sampleProducts = {
    'For You': [
      { id: 1, name: 'iPhone 15 Pro', price: '₹1,34,900', rating: 4.5, image: '📱' },
      { id: 2, name: 'MacBook Air M3', price: '₹1,14,900', rating: 4.7, image: '💻' },
      { id: 3, name: 'AirPods Pro', price: '₹24,900', rating: 4.4, image: '🎧' }
    ],
    'Fashion': [
      { id: 4, name: 'Nike Air Max', price: '₹8,995', rating: 4.3, image: '👟' },
      { id: 5, name: 'Levi\'s Jeans', price: '₹2,999', rating: 4.2, image: '👖' },
      { id: 6, name: 'Adidas T-Shirt', price: '₹1,499', rating: 4.1, image: '👕' }
    ],
    'Mobiles': [
      { id: 7, name: 'Samsung Galaxy S24', price: '₹79,999', rating: 4.3, image: '📱' },
      { id: 8, name: 'OnePlus 12', price: '₹64,999', rating: 4.4, image: '📱' },
      { id: 9, name: 'Google Pixel 8', price: '₹75,999', rating: 4.2, image: '📱' }
    ],
    'Electronics': [
      { id: 10, name: 'Sony WH-1000XM5', price: '₹29,990', rating: 4.6, image: '🎧' },
      { id: 11, name: 'iPad Air', price: '₹59,900', rating: 4.5, image: '📱' },
      { id: 12, name: 'Dell Monitor', price: '₹18,999', rating: 4.3, image: '🖥️' }
    ],
    'Appliances': [
      { id: 13, name: 'LG Refrigerator', price: '₹45,990', rating: 4.2, image: '❄️' },
      { id: 14, name: 'Samsung Washing Machine', price: '₹32,990', rating: 4.1, image: '🧺' },
      { id: 15, name: 'Microwave Oven', price: '₹12,999', rating: 4.0, image: '🔥' }
    ],
    'Beauty': [
      { id: 16, name: 'Lakme Foundation', price: '₹899', rating: 4.1, image: '💄' },
      { id: 17, name: 'Nivea Face Cream', price: '₹299', rating: 4.2, image: '🧴' },
      { id: 18, name: 'L\'Oreal Shampoo', price: '₹549', rating: 4.0, image: '🧴' }
    ]
  };

  const displayProducts = products || sampleProducts[category] || [];

  if (!category || displayProducts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6">
      <div className="mb-4">
        <h2 className="text-headingMD md:text-headingLG font-bold text-dark">
          Best in {category}
        </h2>
        <p className="text-labelMD text-gray-600">
          Top rated products from trusted sellers
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-100 p-3 md:p-4 hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3">
              <span className="text-3xl md:text-4xl">{product.image}</span>
            </div>
            
            <h3 className="font-medium text-dark text-labelMD mb-2 line-clamp-2">
              {product.name}
            </h3>
            
            <div className="flex items-center mb-2">
              <div className="flex items-center bg-accent text-secondary text-labelSM px-1.5 py-0.5 rounded">
                <span>{product.rating}</span>
                <span className="ml-0.5">★</span>
              </div>
            </div>
            
            <div className="text-headingSM font-bold text-dark mb-3">
              {product.price}
            </div>
            
            <div className="space-y-2">
              <button className="w-full bg-orange-500 text-white text-labelSM font-medium py-2 rounded-lg active:bg-orange-600 transition-colors">
                Amazon
              </button>
              <button className="w-full bg-blue-500 text-white text-labelSM font-medium py-2 rounded-lg active:bg-blue-600 transition-colors">
                Flipkart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;