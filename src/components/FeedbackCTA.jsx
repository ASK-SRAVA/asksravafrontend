import React from "react";

const FeedbackCTA = ({ scrollToFeedback }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-6 mb-8">
      <div className="bg-surface border border-gray-100 rounded-2xl p-6 text-center shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-primary mb-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-dark mb-1">
          Your Opinion Matters
        </h3>
        <p className="text-gray-500 mb-4 max-w-md mx-auto">
          Help us improve Ask Srava by sharing your thoughts. We listen to every
          feedback.
        </p>

        <button
          onClick={scrollToFeedback}
          className="inline-flex items-center gap-2 bg-white border border-gray-200 text-dark font-semibold py-2.5 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group"
        >
          Share Feedback
          <svg
            className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeedbackCTA;
