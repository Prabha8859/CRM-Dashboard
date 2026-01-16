import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Card from '../../ui/Card';

const MetricCard = ({ title, value, trend, subtitle, isDarkMode, icon: Icon }) => {
  const isPositive = trend > 0;
  const isNegative = trend < 0;

  return (
    <Card isDarkMode={isDarkMode}>
      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
        }`}>
          <ArrowUpRight size={16} className={`transition-transform group-hover:rotate-45 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`} />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
            <Icon size={18} className={isDarkMode ? 'text-slate-300' : 'text-slate-500'} />
          </div>
        )}
        <p className={`text-sm font-medium ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>{title}</p>
      </div>


      {/* Value */}
      <h2 className={`text-4xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {value}
        {!String(value).includes('.') && !String(value).endsWith('%') && 
          <span className={`text-2xl ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>.00</span>}
      </h2>

      {/* Trend */}
      {trend !== undefined && (
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold px-2 py-0.5 rounded ${
            isPositive 
              ? isDarkMode ? 'text-green-400 bg-green-400/10' : 'text-green-600 bg-green-50'
              : isNegative 
              ? isDarkMode ? 'text-red-400 bg-red-400/10' : 'text-red-600 bg-red-50'
              : isDarkMode ? 'text-sky-400 bg-sky-400/10' : 'text-sky-600 bg-sky-50'
          }`}>
            {isPositive ? '↑' : isNegative ? '↓' : '–'} {Math.abs(trend)}%
          </span>
          <span className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {subtitle || 'vs last month'}
          </span>
        </div>
      )}
    </Card>
  );
};

export default MetricCard;