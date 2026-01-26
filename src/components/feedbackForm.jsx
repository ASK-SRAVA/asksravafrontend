import React, { useState } from "react";
import { submitFeedback } from "../services/feedbackService";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setError("Please enter your feedback");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await submitFeedback({
        name,
        feedback,
      });

      setSuccess(true);
      setName("");
      setFeedback("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-3 md:p-4 bg-green-50 rounded-xl">
        <p className="text-green-700 font-medium text-labelMD">
          Thank you for your feedback 🙏
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-indigo-100/50 p-6 md:p-8 border border-indigo-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <h3 className="font-bold text-dark mb-6 text-xl flex items-center gap-2">
        <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
        </span>
        Share your feedback
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block font-semibold text-sm text-gray-700 mb-1.5 ml-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark placeholder-gray-400"
          />
        </div>
        
        <div>
          <label className="block font-semibold text-sm text-gray-700 mb-1.5 ml-1">
            Feedback<span className="text-accent ml-0.5">*</span>
          </label>
          <textarea
            placeholder="What do you think about AskSrava?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 min-h-[120px] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-dark placeholder-gray-400 resize-none"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-500 text-sm mt-4 bg-red-50 p-3 rounded-lg border border-red-100">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          {error}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full mt-6 bg-dark text-white py-3.5 rounded-xl disabled:opacity-60 font-semibold shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Feedback"
        )}
      </button>
    </div>
  );
};

export default FeedbackForm;
