import React from 'react';

const UserStats = ({ isDarkMode }) => {
  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'}`}>
      <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>User Statistics</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Active Users</span>
            <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>85%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Active Staff</span>
            <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>92%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Users</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Staff</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
