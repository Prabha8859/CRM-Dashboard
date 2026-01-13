import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-all duration-300 shadow-sm ${
        isDarkMode
          ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700 hover:shadow-yellow-400/20'
          : 'bg-white text-orange-500 hover:bg-orange-50 border border-slate-200'
      }`}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
