import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getAllFeedbacks } from '../services/feedbackService';

const Feedbacks = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      setLoading(true);
      try {
        const response = await getAllFeedbacks();
        setFeedbacks(response.data.data || []);
      } catch (error) {
        setFeedbacks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="min-h-screen bg-secondary pb-16 md:pb-0">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 md:p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-labelLG md:text-headingMD font-bold text-dark">
              User Feedbacks
            </h1>
            <p className="text-labelSM md:text-labelMD text-gray-600">
              {feedbacks.length} feedback{feedbacks.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-3 md:px-4 py-4 md:py-6">
        {loading ? (
          <div className="text-center py-8 md:py-12">
            <div className="text-gray-600 text-labelMD">Loading feedbacks...</div>
          </div>
        ) : feedbacks.length > 0 ? (
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div
                key={feedback.feedback_id}
                className="bg-white rounded-xl border border-gray-100 p-3 md:p-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-dark text-labelMD">
                      {feedback.name || 'Anonymous'}
                    </h3>
                  </div>
                </div>
                <p className="text-labelMD text-gray-700">
                  {feedback.feedback}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12 px-4">
            <div className="text-gray-600 mb-4 text-labelMD">No feedbacks yet</div>
            <button 
              onClick={() => navigate('/')}
              className="bg-primary text-white px-6 py-2.5 md:py-2 rounded-lg active:bg-primary/90 md:hover:bg-primary/90 transition-colors text-labelSM font-medium"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedbacks;
