import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/categoryService";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { feedBackCount } from "../services/feedbackService";

const SearchSection = ({ onSearch, onCategorySelect }) => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState("");
  const [priority, setPriority] = useState("Camera");
  const [brand, setBrand] = useState("");
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const categoryIcons = {
    smartphones: DevicePhoneMobileIcon,
  };

  // 🔹 Fetch categories & select default (NO auto-search)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        const categoriesList = res.data || [];

        setCategories(categoriesList);

        if (categoriesList.length > 0) {
          const defaultCategory =
            categoriesList.find(
              (c) => c.category_name.toLowerCase() === "smartphones",
            ) || categoriesList[0];

          setActiveCategory(defaultCategory);
          onCategorySelect?.(defaultCategory.category_name);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // 🔹 Manual category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    onCategorySelect?.(category.category_name);
  };

  // 🔹 Manual search (Enter key)

  const handleRecommendation = async () => {
    if (!budget.trim()) return;
    const searchPayload = {
      query: `${brand ? brand + " " : ""}${priority.toLowerCase()} smartphone under ${budget}`,
      brand: brand.toLowerCase(),
      priority: priority.toLowerCase(),
      category: "smartphones",
      budget: budget,
    };
    navigate("/search-results", { state: searchPayload });
  };
  useEffect(() => {
    const fetchFeedbackCount = async () => {
      try {
        const res = await feedBackCount();
        const count = res.data.data || 0;
        setFeedbackCount(count);

        // Animate counter from 0 to final count
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = count / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= count) {
            setAnimatedCount(count);
            clearInterval(timer);
          } else {
            setAnimatedCount(Math.floor(current));
          }
        }, duration / steps);
      } catch (error) {
        console.error("Error fetching feedback count:", error);
        setFeedbackCount(0);
        setAnimatedCount(0);
      }
    };
    fetchFeedbackCount();
  }, []);

  return (
    <div>
      {/* Social Proof Highlight */}
      <div className="max-w-5xl mx-auto px-3 md:px-6 mb-8">
        <div className="flex justify-center">
          <div className="bg-surface/80 backdrop-blur-sm border border-indigo-100 px-4 py-2 rounded-full shadow-md shadow-indigo-100/50">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <p className="text-sm font-medium text-dark">
                <span className="font-bold text-primary">{animatedCount.toLocaleString()}+</span>{" "}
                people found their perfect match
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto px-3 md:px-6 pt-2 md:pt-4 pb-3 md:pb-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight text-dark leading-tight">
          Confused which phone to buy?
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> Ask Srava.</span>
        </h1>

        <p className="text-center text-base md:text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Tell us your budget and priorities. We analyze thousands of options to give you the <span className="font-semibold text-primary">one best recommendation</span>.
        </p>

        <div className="bg-surface rounded-3xl shadow-2xl shadow-indigo-100/50 p-6 md:p-8 mt-6 border border-indigo-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Brand Preference
              </label>
              <input
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </button>
             <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
               <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
               AI-powered un-biased result
            </p>
          </div>
        </div>

        {/* Search - Glass Effect Placeholder if needed later */}
        {/* <div className="bg-surface/50 rounded-2xl border border-white/50 p-4 md:p-6 mt-8">
           ...
        </div> */}
      </div>

      {/* Products */}
      {/* <ProductGrid
        category={activeCategory?.category_name}
        categoryId={activeCategory?.category_id}
        searchResult={searchResult}
      /> */}
    </div>
  );
};

export default SearchSection;
