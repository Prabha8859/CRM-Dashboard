import React from 'react';
import { useOutletContext } from 'react-router-dom';

const PlaceholderPage = ({ title }) => {
  const { isDarkMode } = useOutletContext();
  const textClass = isDarkMode ? "text-white" : "text-slate-900";

  return (
    <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className={`text-2xl font-bold ${textClass} mb-4`}>{title}</h1>
      <div className={`p-8 rounded-2xl border border-dashed ${isDarkMode ? 'border-slate-700 bg-slate-900/50' : 'border-slate-300 bg-slate-50'} flex items-center justify-center`}>
        <p className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
          {title} module is under construction.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
