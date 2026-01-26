import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { searchService } from "../../services/searchService";
import FeedbackForm from "../../components/feedbackForm";

import Header from "../../components/header";
import Footer from "../../components/Footer";

import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPayload = location.state;
  const searchQuery =
    searchPayload?.query || new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchPayload && !searchQuery) return;

      setLoading(true);
      try {
        const response = await searchService(
          searchPayload || { query: searchQuery },
        );
        const result = response.data;

        if (result && result.product) {
          setSearchResults([
            {
              id: result.product.product_id,
              name: result.product.name,
              brand: result.product.brand,
              price: `₹${result.product.price.toLocaleString()}`,
              explanation: result.explanation,
              rating: 4.5,
              image: result.product.image || "📱",
              amazonLink: result.product.amazon_link,
              flipkartLink: result.product.flipkart_link,
            },
          ]);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchPayload, searchQuery]);

  return (
    <div className="min-h-screen bg-secondary font-sans selection:bg-purple-200">
      <Header />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-4 md:py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4 md:mb-6 text-sm md:text-base"
        >
          <div className="p-1.5 md:p-2 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <span className="font-medium">Back to Search</span>
        </button>

        {loading ? (
          <Loader />
        ) : searchResults.length > 0 ? (
          <div className="space-y-6 md:space-y-10 animate-fade-in-up">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-extrabold text-dark mb-1 md:mb-2">
                We found the <span className="text-primary">Perfect Match</span>
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                Based on your preference for{" "}
                <span className="font-semibold text-dark">
                  {searchPayload?.priority || searchQuery}
                </span>
              </p>
            </div>

            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            {/* Feedback Section */}
            <div className="pt-8 border-t border-gray-200/50">
              <FeedbackForm />
            </div>
          </div>
        ) : (
          <div className="text-center py-12 md:py-20 bg-white rounded-3xl shadow-xl border border-gray-100">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-3xl grayscale">🔍</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-dark mb-2">
              No results found
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              We couldn't find a perfect match for "{searchQuery}"
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-xl hover:bg-indigo-700 transition-all font-semibold shadow-lg shadow-primary/30 text-sm md:text-base"
            >
              Try Different Search
            </button>
          </div>
        )}
      </main>

      {!loading && <Footer />}
    </div>
  );
};

export default SearchResults;
