import React from 'react';

const Header = () => {
  return (
    <header className="bg-secondary border-b border-gray-100 py-2 sm:py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-secondary font-bold text-sm sm:text-lg">A</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-dark truncate">
            AskSrava
          </h1>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
            Find genuine<br className="block sm:hidden" />
            <span className="hidden sm:inline"> </span>products
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;