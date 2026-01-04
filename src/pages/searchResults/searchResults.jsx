import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { searchService } from '../../services/searchService';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchPayload = location.state;
  console.log("searchPayload:", searchPayload);
  const searchQuery = searchPayload?.query || new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchPayload && !searchQuery) return;
      
      setLoading(true);
      try {
        console.log("Making API call with payload:", searchPayload);
        const response = await searchService(searchPayload || { query: searchQuery });
        console.log("API response:", response);
        const result = response.data;
        
        // Convert single product response to array format for display
        if (result && result.product) {
          setSearchResults([{
            id: result.product.product_id,
            name: result.product.name,
            brand: result.product.brand,
            price: `₹${result.product.price.toLocaleString()}`,
            explanation: result.explanation,
            rating: 4.5, // Default rating since not provided
            image: '📱' // Default image
          }]);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSearchResults();
  }, [searchPayload, searchQuery]);

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-labelLG md:text-headingMD font-bold text-dark truncate">
              Search Results
            </h1>
            <p className="text-labelSM md:text-labelMD text-gray-600 truncate">
              Results for "{searchQuery}"
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-3 md:px-4 py-4 md:py-6">
        {loading ? (
          <div className="text-center py-8 md:py-12">
            <div className="text-gray-600 text-labelMD">Searching for best products...</div>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:space-y-0">
            {searchResults.map((product) => (
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
                
                <p className="text-labelSM text-gray-600 mb-3 line-clamp-3">
                  {product.explanation}
                </p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-accent text-secondary text-labelSM px-1.5 py-0.5 rounded">
                    <span>{product.rating}</span>
                    <span className="ml-0.5">★</span>
                  </div>
                </div>
                
                <div className="text-headingSM font-bold text-dark mb-3 md:mb-4">
                  {product.price}
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-orange-500 text-white text-labelSM font-medium py-2.5 md:py-2 rounded-lg active:bg-orange-600 md:hover:bg-orange-600 transition-colors">
                    View on Amazon
                  </button>
                  <button className="w-full bg-blue-500 text-white text-labelSM font-medium py-2.5 md:py-2 rounded-lg active:bg-blue-600 md:hover:bg-blue-600 transition-colors">
                    View on Flipkart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12 px-4">
            <div className="text-gray-600 mb-4 text-labelMD">No results found for "{searchQuery}"</div>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-white px-6 py-2.5 md:py-2 rounded-lg active:bg-primary/90 md:hover:bg-primary/90 transition-colors text-labelSM font-medium"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
