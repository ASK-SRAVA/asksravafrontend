import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100/50 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-xl font-sans">
              A
            </span>
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-dark to-slate-600 tracking-tight">
            AskSrava
          </h1>
        </div>
        
        <nav className="flex items-center gap-1 sm:gap-2">
          <button 
            onClick={() => navigate("/feedbacks")}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-indigo-50 rounded-lg transition-all duration-200"
          >
            Feedbacks
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-indigo-50 rounded-lg transition-all duration-200"
          >
            About Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
