import React, { useState, useMemo } from 'react';
import { Eye, TrendingUp } from 'lucide-react';

const TrafficChart = ({ isDarkMode, dateRange }) => {
  const [selectedSource, setSelectedSource] = useState(null);
  
  const data = useMemo(() => {
    const initialData = [
      { label: 'Referral', value: 18, color: '#EC4899', gradient: 'from-pink-500 to-rose-500' },
      { label: 'Social', value: 31, color: '#A78BFA', gradient: 'from-purple-500 to-violet-500' },
      { label: 'Organic', value: 16, color: '#60A5FA', gradient: 'from-blue-500 to-cyan-500' },
      { label: 'Other', value: 35, color: '#22D3EE', gradient: 'from-cyan-500 to-teal-500' }
    ];

    if (dateRange && (dateRange.start || dateRange.end)) {
      const total = 100;
      let values = [
        Math.random() * total,
        Math.random() * total,
        Math.random() * total,
        Math.random() * total,
      ];
      const sum = values.reduce((a, b) => a + b, 0);
      values = values.map(v => Math.round((v / sum) * total));

      // Adjust to make sure sum is exactly 100
      const finalSum = values.reduce((a, b) => a + b, 0);
      values[0] += total - finalSum;

      return initialData.map((item, index) => ({
        ...item,
        value: values[index]
      }));
    }
    return initialData;
  }, [dateRange]);

  const circumference = 2 * Math.PI * 68;
  let accumulatedValue = 0;

  return (
    <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-500
      ${isDarkMode ? 'bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-purple-900/90' : 'bg-white border-2 border-purple-100'}`}>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-purple-100'}`}>
            <Eye size={24} className={isDarkMode ? 'text-purple-200' : 'text-purple-600'} />
          </div>
          <h3 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Traffic Sources
          </h3>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20">
          <TrendingUp size={16} className="text-green-400" />
          <span className="text-sm font-bold text-green-400">+12%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-4 flex-1">
          {data.map((item, index) => (
            <div key={index} 
              className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300
                ${selectedSource === index 
                  ? (isDarkMode ? 'bg-white/20 scale-105 shadow-lg' : 'bg-gray-100 scale-105 shadow-lg') 
                  : (isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-50')}`}
              onClick={() => setSelectedSource(selectedSource === index ? null : index)}>
              
              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.gradient} shadow-xl animate-pulse`} />
              
              <span className={`text-sm font-semibold flex-1 ${isDarkMode ? 'text-purple-100' : 'text-gray-700'}`}>
                {item.label}
              </span>
              
              <div className="text-right">
                <span className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.value}%
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative w-40 h-40">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          
          <svg className="w-full h-full transform -rotate-90 relative z-10 drop-shadow-2xl">
            <circle cx="80" cy="80" r="68" fill="none" stroke={isDarkMode ? '#1E293B' : '#F1F5F9'} strokeWidth="24"/>
            {data.map((item) => {
              const dashArrayValue = (item.value / 100) * circumference;
              const dashOffsetValue = -(accumulatedValue / 100) * circumference;
              accumulatedValue += item.value;
              return (
                <circle 
                  key={item.label}
                  cx="80" cy="80" r="68" fill="none" stroke={item.color} strokeWidth="24" 
                  strokeDasharray={`${dashArrayValue} ${circumference}`}
                  strokeDashoffset={dashOffsetValue}
                  strokeLinecap="round" className="transition-all duration-1000"
                />
              )
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className={`text-3xl font-black block ${isDarkMode ? 'text-white drop-shadow-lg' : 'text-gray-900'}`}>
                65%
              </span>
              <span className={`text-xs font-semibold ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
                Conversion
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;