import React, { useState } from "react";
import Header from "../../components/header";
import ComparisonModal from "../../components/comparisonModal";
import SearchSection from "../../components/searchSection";
import FeedbackForm from "../../components/feedbackForm";
import Footer from "../../components/Footer";
import ScratchWrapper from "../../components/scratchCard/ScratchWrapper";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

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
      <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      <Header />
      <div>
        <SearchSection onCategorySelect={handleCategorySelect} />

        {/* Feedback CTA */}
        <div className="max-w-5xl mx-auto px-3 md:px-6 mt-6">
          <button
            onClick={scrollToFeedback}
            className="w-full bg-white border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Share Your Feedback
          </button>
        </div>
      </div>

      <div
        id="feedback-section"
        className="max-w-5xl mx-auto px-3 md:px-6 py-6 "
      >
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-r text-red-500 mt-3 mb-3">
            Follow us on Instagram
          </h2>
          <a
            href="https://instagram.com/asksrava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @asksrava
          </a>
        </div>
        <FeedbackForm />
      </div>

      <ComparisonModal />
      <Footer />
      </div>
    </ScratchWrapper>
  );
};

export default Home;
