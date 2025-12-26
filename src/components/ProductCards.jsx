import React from 'react';

const ProductCards = ({ products = [], title = "Recommended for you" }) => {
  const sampleProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      image: '📱',
      price: '₹1,34,900',
      originalPrice: '₹1,49,900',
      discount: '10%',
      rating: 4.5,
      reviews: 1234,
      badges: ['Genuine', 'Best Value'],
      platform: 'amazon'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      image: '📱',
      price: '₹79,999',
      originalPrice: '₹89,999',
      discount: '11%',
      rating: 4.3,
      reviews: 856,
      badges: ['Verified', 'Top Rated'],
      platform: 'flipkart'
    },
    {
      id: 3,
      name: 'OnePlus 12',
      image: '📱',
      price: '₹64,999',
      originalPrice: '₹69,999',
      discount: '7%',
      rating: 4.4,
      reviews: 432,
      badges: ['Genuine'],
      platform: 'amazon'
    }
  ];

  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div className="bg-gray-50 px-3 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-900">{title}</h2>
        <button className="text-sm text-blue-600 font-medium">View All</button>
      </div>
      
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-1">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 bg-white rounded-xl border border-gray-100 p-3 w-40 active:scale-95 transition-transform"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-2">
              <span className="text-3xl">{product.image}</span>
            </div>

            {/* Product Info */}
            <h3 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2 leading-tight">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                <span>{product.rating}</span>
                <span className="ml-0.5">★</span>
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-center space-x-1">
                <span className="text-base font-bold text-gray-900">{product.price}</span>
                <span className="text-green-600 text-xs font-medium">{product.discount} off</span>
              </div>
              <div className="text-xs text-gray-500 line-through">{product.originalPrice}</div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-1 mb-2">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button className={`w-full text-white text-xs font-medium py-2 rounded-lg ${
              product.platform === 'amazon' 
                ? 'bg-orange-500 active:bg-orange-600' 
                : 'bg-blue-500 active:bg-blue-600'
            }`}>
              {product.platform === 'amazon' ? 'Amazon' : 'Flipkart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;