import React from 'react';

const ComparisonModal = ({ comparison, onClose }) => {
  if (!comparison) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-headingLG font-bold text-dark">
              {comparison.product.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-dark text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Amazon */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <h3 className="text-headingMD font-semibold">Amazon</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Price:</span>
                  <span className="text-labelMD font-semibold">₹{comparison.amazon.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Rating:</span>
                  <span className="text-labelMD font-semibold">{comparison.amazon.rating} ★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Reviews:</span>
                  <span className="text-labelMD font-semibold">{comparison.amazon.reviews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Delivery:</span>
                  <span className="text-labelMD font-semibold">{comparison.amazon.delivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Return:</span>
                  <span className="text-labelMD font-semibold">{comparison.amazon.returnPolicy}</span>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Check on Amazon
              </button>
            </div>

            {/* Flipkart */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <h3 className="text-headingMD font-semibold">Flipkart</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Price:</span>
                  <span className="text-labelMD font-semibold">₹{comparison.flipkart.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Rating:</span>
                  <span className="text-labelMD font-semibold">{comparison.flipkart.rating} ★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Reviews:</span>
                  <span className="text-labelMD font-semibold">{comparison.flipkart.reviews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Delivery:</span>
                  <span className="text-labelMD font-semibold">{comparison.flipkart.delivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-labelMD text-gray-600">Return:</span>
                  <span className="text-labelMD font-semibold">{comparison.flipkart.returnPolicy}</span>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Check on Flipkart
              </button>
            </div>
          </div>

          {/* Recommendation */}
          <div className="mt-8 p-6 bg-accent bg-opacity-10 rounded-xl">
            <h3 className="text-headingMD font-semibold text-dark mb-2">Our Recommendation</h3>
            <p className="text-valueMD text-gray-700 mb-2">
              We recommend <span className="font-semibold capitalize">{comparison.recommendation.platform}</span> - {comparison.recommendation.reason}
            </p>
            {comparison.recommendation.savings > 0 && (
              <p className="text-labelMD text-accent font-medium">
                You save ₹{comparison.recommendation.savings.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;