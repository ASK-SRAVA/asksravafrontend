import React, { useRef, useEffect } from "react";

const SearchForm = ({
  brand,
  setBrand,
  budget,
  setBudget,
  priority,
  setPriority,
  handleRecommendation,
}) => {
  // 🔹 Auto-focus Brand input on load
  const brandInputRef = useRef(null);
  useEffect(() => {
    if (brandInputRef.current) {
      // Small timeout to ensure smooth entrance animation first
      setTimeout(() => {
        brandInputRef.current.focus();
      }, 800);
    }
  }, []);

  return (
    <div className="bg-surface rounded-3xl shadow-2xl shadow-indigo-100/50 p-6 md:p-8 mt-6 border border-indigo-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Brand Preference
          </label>
          <input
            ref={brandInputRef}
            placeholder="e.g. Samsung, Apple"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Your Budget <span className="text-accent">*</span>
          </label>
          <input
            placeholder="e.g. 20000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Top Priority
          </label>
          <div className="relative">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark appearance-none"
            >
              <option value="">Select priority</option>
              <option>Camera</option>
              <option>Performance</option>
              <option>Battery</option>
              <option>Display</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleRecommendation}
          className="w-full bg-gradient-to-r from-primary to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all transform flex items-center justify-center gap-2"
        >
          Get Recommendation
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </button>
        <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
          <svg
            className="w-3 h-3 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          AI-powered un-biased result
        </p>
      </div>
    </div>
  );
};

export default SearchForm;
