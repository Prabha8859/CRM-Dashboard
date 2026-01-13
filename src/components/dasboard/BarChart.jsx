import React, { useState, useMemo } from 'react';
import { Users, TrendingUp } from 'lucide-react';

const BarChart = ({ isDarkMode, dateRange }) => {
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const data = useMemo(() => {
    const initialData = [
      { value: 450, label: 'Week 1', gradient: 'from-blue-400 via-blue-500 to-blue-600' },
      { value: 750, label: 'Week 2', gradient: 'from-purple-400 via-purple-500 to-purple-600' },
      { value: 920, label: 'Week 3', gradient: 'from-pink-400 via-pink-500 to-pink-600' },
      { value: 1100, label: 'Week 4', gradient: 'from-cyan-400 via-cyan-500 to-cyan-600' }
    ];

    if (dateRange && (dateRange.start || dateRange.end)) {
      return initialData.map(item => ({
        ...item,
        value: Math.round(200 + Math.random() * 1000)
      }));
    }
    return initialData;
  }, [dateRange]);

  const max = Math.max(...data.map(d => d.value));
  
  return (
    <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-500
      ${isDarkMode ? 'bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-purple-900/90' : 'bg-white border-2 border-purple-100'}`}>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-purple-100'}`}>
            <Users size={24} className={isDarkMode ? 'text-purple-200' : 'text-purple-600'} />
          </div>
          <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Subscribers Growth
          </h3>
        </div>
      </div>
      
      <div className={`rounded-2xl p-4 ${isDarkMode ? 'bg-purple-900/40' : 'bg-gray-50'}`}>
        <div className="flex items-end justify-between h-48 gap-4 md:gap-6">
          {data.map((item, index) => (
            <div key={index} 
              className="flex-1 flex flex-col items-center gap-4 cursor-pointer group"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}>
              
              <div className="relative w-full">
                {hoveredBar === index && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`px-3 py-1.5 rounded-lg shadow-2xl ${isDarkMode ? 'bg-white text-purple-900' : 'bg-gray-900 text-white'}`}>
                      <p className="text-base font-black">{item.value} users</p>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <div className={`w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent ${isDarkMode ? 'border-t-white' : 'border-t-gray-900'}`} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`w-full bg-gradient-to-t ${item.gradient} rounded-t-2xl transition-all duration-700 group-hover:scale-105 shadow-2xl relative overflow-hidden`}
                  style={{ height: `${(item.value / max) * 100}%` }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 animate-shimmer" />
                  
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-full bg-white/20 blur-xl" />
                </div>
              </div>
              
              <span className={`text-sm font-bold transition-all ${isDarkMode ? 'text-purple-300 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className={`text-sm ${isDarkMode ? 'text-purple-300' : 'text-gray-600'}`}>
          Total: <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3,220</span>
        </span>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20">
          <TrendingUp size={18} className="text-green-400" />
          <span className="text-sm font-bold text-green-400">+23%</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;