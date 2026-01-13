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
    <div className="bg-white p-3 md:p-4 rounded-xl border border-gray-200">
      <h3 className="font-semibold text-dark mb-3 text-labelLG">
        Share your feedback
      </h3>

      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 px-3 py-2.5 md:py-2 border rounded-lg text-labelMD"
      />

      <textarea
        placeholder="What do you think about AskSrava?"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full mb-3 px-3 py-2.5 md:py-2 border rounded-lg min-h-[80px] md:min-h-[60px] text-labelMD resize-none"
      />

      {error && (
        <p className="text-red-500 text-labelSM mb-3">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-primary text-white py-2.5 md:py-2 rounded-lg disabled:opacity-60 text-labelMD font-medium active:bg-primary/90 md:hover:bg-primary/90 transition-colors"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </div>
  );
};

export default FeedbackForm;