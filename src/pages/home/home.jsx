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
      <div className="min-h-screen bg-secondary font-sans selection:bg-purple-200 flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="relative z-10">
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-50 to-transparent -z-10"></div>
            <SearchSection onCategorySelect={handleCategorySelect} />

            {/* Feedback CTA */}
            <div className="max-w-3xl mx-auto px-4 mt-6 mb-8">
              <div className="bg-surface border border-gray-100 rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-primary mb-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">Your Opinion Matters</h3>
                  <p className="text-gray-500 mb-4 max-w-md mx-auto">Help us improve Ask Srava by sharing your thoughts. We listen to every feedback.</p>
                  
                  <button
                    onClick={scrollToFeedback}
                    className="inline-flex items-center gap-2 bg-white border border-gray-200 text-dark font-semibold py-2.5 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
                  >
                    Share Feedback
                    <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
              </div>
            </div>
          </div>

          <div
            id="feedback-section"
            className="max-w-5xl mx-auto px-4 py-8"
          >
            <div className="flex flex-col items-center justify-center mb-8">
              <a
                href="https://instagram.com/asksrava"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-500 text-white pl-5 pr-6 py-3.5 rounded-full font-medium shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow @asksrava</span>
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded text-white font-semibold">New</span>
              </a>
            </div>
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
