import React, { useState } from "react";
import Header from "../../components/header";
import ComparisonModal from "../../components/comparisonModal";
import SearchSection from "../../components/searchSection";
import FeedbackForm from "../../components/feedbackForm";

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
      
      <div className="max-w-5xl mx-auto px-3 md:px-6 py-6">
        <FeedbackForm />
      </div>
      
      <ComparisonModal/>
    </div>
  );
};

export default Home;
