import React, { useState } from "react";
import ScratchCard from "./scrathcCard";

const ScratchWrapper = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleScratchComplete = () => {
    setIsRevealed(true);
  };

  if (isRevealed) {
    return children;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Ticket Container */}
      <div className="relative w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Top perforation */}
        <div className="absolute -top-3 left-0 right-0 flex justify-between px-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-black/60 rounded-full"
            />
          ))}
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-4">
          <p className="text-xs tracking-widest uppercase">
            AskSrava
          </p>
          <h2 className="text-lg font-bold mt-1">
            Smart Buying Pass 
          </h2>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Scratch Area */}
        <div className="p-6 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Scratch to reveal your surprise
          </p>

          <div className="flex justify-center">
            <ScratchCard onComplete={handleScratchComplete} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 text-xs text-gray-500">
          <span>Seat: ONE 🎯</span>
          <span>Entry: FREE</span>
          <span>Valid: Today</span>
        </div>

        {/* Bottom perforation */}
        <div className="absolute -bottom-3 left-0 right-0 flex justify-between px-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-black/60 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScratchWrapper;