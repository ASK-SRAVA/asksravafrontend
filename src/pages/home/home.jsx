import React, { useState } from "react";
import Header from "../../components/header";
import ComparisonModal from "../../components/comparisonModal";
import SearchSection from "../../components/searchSection";
import FeedbackForm from "../../components/feedbackForm";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const scrollToFeedback = () => {
    document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      <Header/>
      <div>
        <SearchSection onCategorySelect={handleCategorySelect} />
        
        {/* Feedback CTA */}
        <div className="max-w-5xl mx-auto px-3 md:px-6 mt-6">
          <button
            onClick={scrollToFeedback}
            className="w-full bg-white border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            💬 Share Your Feedback
          </button>
        </div>
      </div>
      
      <div id="feedback-section" className="max-w-5xl mx-auto px-3 md:px-6 py-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">
            Help Us Improve
          </h2>
          <p className="text-gray-600 text-labelMD">
            Your feedback helps us make better recommendations for everyone
          </p>
        </div>
        <FeedbackForm />
      </div>
      
      <ComparisonModal/>
    </div>
  );
};

export default Home;
