import React, { useState } from "react";
import ScratchCard from "./ScratchCard";

const ScratchWrapper = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(() => {
    return sessionStorage.getItem("scratchCardRevealed") === "true";
  });

  const handleScratchComplete = () => {
    sessionStorage.setItem("scratchCardRevealed", "true");
    setIsRevealed(true);
  };

  if (isRevealed) {
    return children;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Premium Background Wallpaper */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-black/80"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#4F46E5 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
      {/* Ticket Container */}
      <div className="relative w-[360px] bg-white rounded-2xl shadow-3xl shadow-purple-500/20 overflow-hidden font-sans transform hover:scale-105 transition-transform duration-300">
        {/* Top perforation */}
        <div className="absolute -top-3 left-0 right-0 flex justify-between px-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-black/60 rounded-full" />
          ))}
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-5">
          <p className="text-xs tracking-[0.2em] font-medium uppercase opacity-90">
            AskSrava
          </p>
          <h2 className="text-xl font-bold mt-1 tracking-tight">
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
            <div key={i} className="w-4 h-4 bg-black/60 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScratchWrapper;
