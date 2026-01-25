import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-gray-400 text-sm">
      <p>© {currentYear} AskSrava. All rights reserved.</p>
    </div>
  );
};

export default Copyright;