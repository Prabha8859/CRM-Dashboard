import React from 'react';
import { Calendar } from 'lucide-react';

const DashboardHeader = ({ title, subtitle, userRole, isDarkMode, dateRange, setDateRange, children }) => {
  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 border border-black/5 dark:border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-500">
      <div>
        <h1 className={`text-4xl font-black mb-2 tracking-tight ${isDarkMode ? 'text-[#fbfcfc] drop-shadow-lg' : 'text-[#055b65]'}`}>
          {title}
        </h1>
        <p className={`text-lg font-medium ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>
          Viewing as <span className="font-bold text-[#1bd488] px-3 py-1 rounded-lg bg-[#1bd488]/10 border border-[#1bd488]/20 mx-1">{userRole}</span> • {subtitle || 'Real-time metrics'}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Date Range Picker - Only show if props are provided */}
        {dateRange && setDateRange && (
          <div className={`
            flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 group
            ${isDarkMode 
              ? 'bg-[#055b65]/50 border-[#b2c9c5]/20 hover:bg-[#055b65]/80 hover:border-[#1bd488]/30 shadow-[0_0_20px_rgba(27,212,136,0.1)]' 
              : 'bg-white border-[#e0e5e9] shadow-md hover:border-[#1bd488]/50 hover:shadow-xl hover:shadow-[#1bd488]/20'}
          `}>
            <div className={`p-1.5 rounded-md ${isDarkMode ? 'bg-[#1bd488]/10' : 'bg-[#1bd488]/10'}`}>
              <Calendar size={20} className={isDarkMode ? 'text-[#1bd488]' : 'text-[#055b65]'} />
            </div>
            
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                className={`bg-transparent outline-none text-sm font-bold cursor-pointer ${isDarkMode ? 'text-[#fbfcfc] [&::-webkit-calendar-picker-indicator]:invert' : 'text-[#055b65]'}`}
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>to</span>
              <input 
                type="date" 
                className={`bg-transparent outline-none text-sm font-bold cursor-pointer ${isDarkMode ? 'text-[#fbfcfc] [&::-webkit-calendar-picker-indicator]:invert' : 'text-[#055b65]'}`}
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              />
            </div>
          </div>
        )}

        {/* Custom Actions (Buttons, etc.) */}
        {children}
      </div>
    </div>
  );
};

export default DashboardHeader;