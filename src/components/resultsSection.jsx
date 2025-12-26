import React from 'react';

const ProductCard = ({ product, onCompare }) => {
  const getBestPrice = () => {
    return Math.min(product.price.amazon, product.price.flipkart);
  };

  const getTrustBadge = () => {
    if (product.genuineScore >= 90) return { text: 'Highly Genuine', color: 'bg-accent' };
    if (product.genuineScore >= 80) return { text: 'Genuine', color: 'bg-yellow-500' };
    return { text: 'Check Reviews', color: 'bg-gray-500' };
  };

  const trustBadge = getTrustBadge();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-3 right-3 ${trustBadge.color} text-white px-2 py-1 rounded-full text-labelXS font-medium`}>
          {trustBadge.text}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-headingMD font-semibold text-dark mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-labelMD font-medium ml-1">{product.rating}</span>
          </div>
          <div className="text-labelSM text-gray-500">
            Genuine Score: {product.genuineScore}%
          </div>
        </div>

        <div className="mb-4">
          <div className="text-headingLG font-bold text-dark mb-1">
            ₹{getBestPrice().toLocaleString()}
          </div>
          <div className="text-labelSM text-accent font-medium">
            Best on {product.bestPlatform === 'amazon' ? 'Amazon' : 'Flipkart'}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div>
            <div className="text-labelSM font-medium text-dark mb-1">Pros:</div>
            <div className="text-valueSM text-gray-600">
              {product.pros.slice(0, 2).join(', ')}
            </div>
          </div>
          <div>
            <div className="text-labelSM font-medium text-dark mb-1">Best for:</div>
            <div className="text-valueSM text-gray-600">{product.whoShouldBuy}</div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onCompare(product.id)}
            className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors text-labelMD font-medium"
          >
            Compare
          </button>
          <button className="flex-1 px-4 py-2 bg-primary text-secondary rounded-lg hover:bg-opacity-90 transition-colors text-labelMD font-medium">
            Check on {product.bestPlatform === 'amazon' ? 'Amazon' : 'Flipkart'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ResultsSection = ({ results, onCompare }) => {
  if (!results) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-headingLG font-bold text-dark mb-2">
          Recommendations for "{results.query}"
        </h2>
        <p className="text-valueMD text-gray-600">
          {results.recommendations.length} genuine products found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.recommendations.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onCompare={onCompare}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsSection;