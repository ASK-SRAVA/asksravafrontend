import React, { useState } from 'react';


import Header from '../../components/Header';
import SearchSection from '../../components/SearchSection';
import ResultsSection from '../../components/ResultsSection';
import ComparisonModal from '../../components/ComparisonModal';

const Home = () => {
  const [results, setResults] = useState(null);
  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchData) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchData)
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
    setLoading(false);
  };

  const handleCompare = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/compare/${productId}`);
      const data = await response.json();
      setComparison(data);
    } catch (error) {
      console.error('Comparison failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      {!results ? (
        <SearchSection onSearch={handleSearch} />
      ) : (
        <div>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <button
              onClick={() => setResults(null)}
              className="text-primary hover:underline text-labelMD font-medium"
            >
              ← Back to search
            </button>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <div className="text-headingMD text-gray-600">Finding best products...</div>
            </div>
          ) : (
            <ResultsSection results={results} onCompare={handleCompare} />
          )}
        </div>
      )}

      <ComparisonModal 
        comparison={comparison} 
        onClose={() => setComparison(null)} 
      />
    </div>
  );
};

export default Home;