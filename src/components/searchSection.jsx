import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/categoryService";

const SearchSection = ({ onSearch, onCategorySelect }) => {
  const [budget, setBudget] = useState("");
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  console.log("categories", categories);  
  const [activeCategory, setActiveCategory] = useState("For You");

  // const getCategoryIcon = (categoryName) => {
  //   const iconMap = {
  //     'For You': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  //       </svg>
  //     ),
  //     'Fashion': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  //       </svg>
  //     ),
  //     'Mobiles': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  //       </svg>
  //     ),
  //     'Smartphones': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  //       </svg>
  //     ),
  //     'Electronics': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //       </svg>
  //     ),
  //     'Appliances': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17h6m-3-3v6m-7-6h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
  //       </svg>
  //     ),
  //     'Beauty': (
  //       <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  //       </svg>
  //     )
  //   };
    
  //   return iconMap[categoryName] || (
  //     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  //     </svg>
  //   );
  // };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        console.log("cates", data.data);
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    // Call the category select handler if provided
    if (onCategorySelect) {
      onCategorySelect(category.name);
    }
    if (onSearch) {
      onSearch({ category: category.name, query, budget });
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query, budget, category: activeCategory });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-3 md:px-6 pt-4 md:pt-8 pb-3 md:pb-6">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-headingLG md:text-headingXL text-primary font-bold text-dark mb-2">
          ASK SRAVA Before You Buy
        </h1>
        <p className="text-labelMD md:text-valueLG text-gray-600 text-accent max-w-md mx-auto">
          Get honest recommendations from Amazon & Flipkart
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for any product…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 md:px-5 py-3 md:py-4 border border-gray-200 rounded-xl text-labelMD md:text-labelLG placeholder-gray-400 transition-all border border-primary"
            />
          </div>
        </div>

        {/* Horizontal Category Tabs */}
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
          <div className="flex items-center gap-4 md:gap-20 justify-center overflow-x-auto scrollbar-hide pb-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className={`flex flex-col items-center gap-1 pb-2
                              whitespace-nowrap transition-colors
                              ${
                                isActive
                                  ? "text-primary border-b-2 border-primary"
                                  : "text-gray-600 hover:text-gray-800"
                              }`}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    {/* {React.cloneElement(cat.icon, {
                      className: "w-5 h-5 md:w-6 md:h-6",
                    })} */}
                  </div>
                  <span className="text-labelXS md:text-labelSM font-medium leading-tight">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
