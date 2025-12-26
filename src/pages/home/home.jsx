import React, { useState } from 'react';

import Header from '../../components/header';
import SearchSection from '../../components/searchSection';

import ComparisonModal from '../../components/comparisonModal';


const Home = () => {
  const [results, setResults] = useState(null);
  const [comparison, setComparison] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('all');

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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      setResults(null);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    // Trigger search based on category
    handleSearch({ category: categoryId });
  };

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      <Header />
      
     
        <div>
          <SearchSection onSearch={handleSearch} />
    
        </div>


      <ComparisonModal 
        comparison={comparison} 
        onClose={() => setComparison(null)} 
      />

    </div>
  );
};

export default Home;