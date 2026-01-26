import React from "react";

const Loader = ({
  loadingText = "Analysing 1000+ options...",
  subText = "Finding the perfect match for your budget",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 animate-pulse">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4 md:mb-6 relative">
        <div className="absolute inset-0 border-4 border-indigo-100 rounded-full border-t-primary animate-spin"></div>
        <span className="text-2xl md:text-3xl">🤖</span>
      </div>
      <h2 className="text-lg md:text-2xl font-bold text-dark text-center">
        {loadingText}
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2">{subText}</p>
    </div>
  );
};

export default Loader;
