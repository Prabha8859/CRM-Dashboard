import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-all duration-300 shadow-sm ${
        isDarkMode
          ? 'bg-[#45828b] text-[#1bd488] hover:bg-[#055b65] hover:shadow-lg hover:shadow-[#1bd488]/20'
          : 'bg-[#fbfcfc] text-[#45828b] hover:bg-[#e0e5e9] border border-[#e0e5e9]'
      }`}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
