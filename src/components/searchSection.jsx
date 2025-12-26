import React, { useState } from 'react';

const SearchSection = ({ onSearch }) => {
  const [budget, setBudget] = useState('');
  const [query, setQuery] = useState('');

  const categories = [
    { id: 1, name: 'Electronics', icon: '📱' },
    { id: 2, name: 'Fashion', icon: '👕' },
    { id: 3, name: 'Home & Kitchen', icon: '🏠' },
    { id: 4, name: 'Books', icon: '📚' },
    { id: 5, name: 'Sports', icon: '⚽' },
    { id: 6, name: 'Beauty', icon: '💄' }
  ];

  const handleCategoryClick = (category) => {
    onSearch({ category: category.name, budget, query });
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch({ query, budget });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-headingXL font-bold text-dark mb-4">
          ASK SRAVA Before You Buy
        </h2>
        <p className="text-valueLG text-gray-600">
          Get honest recommendations from Amazon & Flipkart
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search for any product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full md:w-32 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-primary text-secondary font-medium rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-colors text-center"
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <div className="text-labelSM font-medium text-dark">{category.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;