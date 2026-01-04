import React, { useState } from "react";
import Header from "../../components/header";
import ComparisonModal from "../../components/comparisonModal";
import SearchSection from "../../components/SearchSection";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      <Header/>
      <div>
        <SearchSection onCategorySelect={handleCategorySelect} />
      </div>
      <ComparisonModal/>
    </div>
  );
};

export default Home;
