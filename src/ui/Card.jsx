import React from 'react';

const Card = ({ children, isDarkMode, className = '', interactive = true }) => {
  return (
    <div className={`relative rounded-3xl p-6 transition-all duration-300 group ${interactive ? 'hover:scale-[1.02] cursor-pointer hover:shadow-lg' : ''} ${
      isDarkMode 
        ? `bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 ${interactive ? 'hover:border-slate-700 hover:shadow-slate-900/50' : ''}`
        : `bg-white border border-slate-200 ${interactive ? 'hover:border-slate-300' : ''}`
    } ${className}`}>
      {children}
    </div>
  );
};

export default Card;