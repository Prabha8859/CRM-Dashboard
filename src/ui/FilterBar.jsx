import React from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import Card from './Card';

const FilterBar = ({ 
  isDarkMode, 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search...", 
  filters = [], 
  viewMode, 
  onViewModeChange 
}) => {
  return (
    <Card isDarkMode={isDarkMode} className="flex flex-col sm:flex-row gap-4 p-4">
      <div className="relative flex-1 group">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} group-focus-within:text-[#1bd488] transition-colors`} size={18} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-transparent outline-none focus:ring-2 focus:ring-[#1bd488]/50 transition-all ${isDarkMode ? 'border-slate-700 text-white placeholder-slate-500' : 'border-slate-200 text-slate-900 placeholder-slate-400'}`}
        />
      </div>
      
      <div className="flex items-center gap-3">
        {filters.map((filter, index) => (
          <div key={index} className="relative">
            <select
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className={`appearance-none px-4 py-2.5 pr-8 rounded-xl border bg-transparent outline-none focus:ring-2 focus:ring-[#1bd488]/50 transition-all cursor-pointer ${isDarkMode ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value} className={isDarkMode ? 'bg-slate-800' : 'bg-white'}>
                  {opt.label}
                </option>
              ))}
            </select>
            <Filter size={16} className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`} />
          </div>
        ))}

        {onViewModeChange && (
          <div className={`flex items-center p-1 rounded-xl border ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-1.5 rounded-lg transition-all ${viewMode === 'list' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm') : (isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600')}`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-1.5 rounded-lg transition-all ${viewMode === 'grid' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm') : (isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600')}`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FilterBar;