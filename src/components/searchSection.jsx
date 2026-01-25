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
      <div className="max-w-5xl mx-auto px-3 md:px-6 ">
        <div className="flex justify-center">
          <div className="bg-white border border-gray-200 px-4 py-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              {/* Text */}

              <p className="text-sm font-semibold text-gray-900">
                {animatedCount.toLocaleString()}+{" "}
                <span className="text-red-500">people</span> shared feedbacks
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl mx-auto px-3 md:px-6 pt-4 md:pt-8 pb-3 md:pb-6">
        {/* Heading */}
        <h1 className="text-xl md:text-4xl font-bold text-center">
          Confused about what phone to buy?
          <br />
          Get <span className="text-primary">ONE best recommendation</span>.
        </h1>

        <p className="text-center text-xs sm:text-md text-gray-600 mt-3 max-w-xl mx-auto">
          Tell us your budget and priority. Ask Srava 
          gives you a clear answer.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <label className="block text-sm sm:text-md font-medium text-gray-700 mb-1">
            Brand
          </label>
          <input
            placeholder="Tell me the brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full border rounded-xl px-4 py-4 mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget<span className="text-red-700">*</span>
          </label>
          <input
            placeholder="Example: Under ₹20,000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 mb-4"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 mb-4 h-14"
          >
            <option value="">Select priority</option>
            <option>Camera</option>
            <option>Performance</option>
            <option>Battery</option>
            <option>Display</option>
          </select>

          <button
            onClick={handleRecommendation}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold"
          >
            Get my recommendation
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            You’ll get only one best option.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6">
          {/* <input
            type="text"
            placeholder="Search for any product…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full px-4 md:px-5 py-3 md:py-4 border border-primary rounded-xl text-labelMD md:text-labelLG placeholder-gray-400"
          /> */}

          {/* Category Tabs */}
          {/* <div className="mt-6 md:mt-8 pt-2 md:pt-6 border-t border-gray-100">
            <div className="flex items-center gap-4 md:gap-20 justify-center overflow-x-auto pb-2">
              {categories.map((cat) => {
                const isActive = activeCategory?.id === cat.id;
                const Icon = categoryIcons[cat.category_name.toLowerCase()];

                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat)}
                    className={`flex flex-col items-center gap-1 pb-2 transition-colors ${
                      isActive
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
                    <span className="text-labelXS md:text-labelSM font-medium">
                      {cat.category_name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>
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
