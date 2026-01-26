import React, { useState } from "react";
import Header from "../../components/header";
import ComparisonModal from "../../components/comparisonModal";
import SearchSection from "../../components/searchSection";
import FeedbackForm from "../../components/feedbackForm";
import Footer from "../../components/Footer";
import ScratchWrapper from "../../components/scratchCard/ScratchWrapper";
import FeedbackCTA from "../../components/FeedbackCTA";
import SocialFollow from "../../components/SocialFollow";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const scrollToFeedback = () => {
    document
      .getElementById("feedback-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScratchWrapper>
      <div className="min-h-screen bg-secondary font-sans selection:bg-purple-200 flex flex-col">
        <Header />

        <main className="flex-grow">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50 to-transparent -z-10"></div>
            <SearchSection onCategorySelect={handleCategorySelect} />

            {/* Feedback CTA */}
            <FeedbackCTA scrollToFeedback={scrollToFeedback} />
          </div>

          <div id="feedback-section" className="max-w-5xl mx-auto px-4 py-8">
            <SocialFollow />
            <FeedbackForm />
          </div>

          <ComparisonModal />
        </main>

        <Footer />
      </div>
    </ScratchWrapper>
  );
};

export default Home;
