import React, { useState } from "react";

import Header from "../../components/header";
import SearchSection from "../../components/searchSection";
import ProductGrid from "../../components/ProductGrid";
import ComparisonModal from "../../components/comparisonModal";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      <Header />

      <div>
        <SearchSection onCategorySelect={handleCategorySelect} />
      </div>

      <ProductGrid category={selectedCategory} />

      <ComparisonModal />
    </div>
  );
};

export default Home;
