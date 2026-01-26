import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/categoryService";
import { useNavigate } from "react-router-dom";
import SocialProof from "./SocialProof";
import SearchForm from "./SearchForm";

const SearchSection = ({ onSearch, onCategorySelect }) => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState("");
  const [priority, setPriority] = useState("Camera");
  const [brand, setBrand] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

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

  return (
    <div>
      {/* Social Proof Highlight */}
      <SocialProof />
      <div className="w-full max-w-5xl mx-auto px-3 md:px-6 pt-2 md:pt-4 pb-3 md:pb-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight text-dark leading-tight">
          Confused which phone to buy?
          <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {" "}
            Ask Srava.
          </span>
        </h1>

        <p className="text-center text-base md:text-lg text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Tell us your budget and priorities. We analyze thousands of options to
          give you the{" "}
          <span className="font-semibold text-primary">
            one best recommendation
          </span>
          .
        </p>

        <SearchForm
          brand={brand}
          setBrand={setBrand}
          budget={budget}
          setBudget={setBudget}
          priority={priority}
          setPriority={setPriority}
          handleRecommendation={handleRecommendation}
        />
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
