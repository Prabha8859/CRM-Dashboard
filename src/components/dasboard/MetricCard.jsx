import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MetricCard = ({ title, value, subtitle, progress, trend, icon: Icon, isDarkMode }) => {
  return (
    <div className={`relative p-5 rounded-3xl shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group
      ${isDarkMode ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900' : 'bg-gradient-to-br from-white to-gray-50 border-2 border-purple-100'}`}
      style={{ transform: 'translateZ(0)' }}>
      
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      {/* Floating Particles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
      
      {/* Large Floating Icon */}
      <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
        {Icon && <Icon size={96} className={isDarkMode ? 'text-white' : 'text-purple-600'} />}
      </div>
      
      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
            ${isDarkMode ? 'bg-white/10' : 'bg-purple-100'}`}>
            {Icon && <Icon size={20} className={isDarkMode ? 'text-purple-200' : 'text-purple-600'} />}
          </div>
          <div>
            <p className={`text-sm font-semibold tracking-wide ${isDarkMode ? 'text-purple-200' : 'text-gray-600'}`}>
              {title}
            </p>
          </div>
        </div>
        
        {/* Main Value */}
        <h3 className={`text-4xl font-black mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300
          ${isDarkMode ? 'text-white drop-shadow-lg' : 'text-gray-900'}`}>
          {value}
        </h3>
        
        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {subtitle && (
            <span className={`text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
              {subtitle}
            </span>
          )}
          
          {progress && (
            <div className="relative w-16 h-16">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" fill="none" 
                  stroke={isDarkMode ? '#A78BFA' : '#E5E7EB'} 
                  strokeWidth="4" opacity="0.2"/>
                <circle cx="32" cy="32" r="28" fill="none" 
                  stroke={isDarkMode ? '#fff' : '#8B5CF6'} 
                  strokeWidth="4"
                  strokeDasharray={`${progress * 1.76} 176`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 drop-shadow-lg">
                  <animate attributeName="stroke-dasharray" 
                    from="0 176" 
                    to={`${progress * 1.76} 176`} 
                    dur="1.5s" 
                    fill="freeze"/>
                </circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {progress}%
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Trend Indicator */}
        {trend && (
          <div className={`flex items-center gap-2 mt-4 px-3 py-2 rounded-full w-fit
            ${trend > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            {trend > 0 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            <span className="text-sm font-bold">{Math.abs(trend)}% vs last month</span>
          </div>
        )}
      </div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />
      </div>
    </div>
  );
};

export default MetricCard;