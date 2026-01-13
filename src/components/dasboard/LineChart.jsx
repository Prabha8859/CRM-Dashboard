import React, { useState } from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const LineChart = ({ isDarkMode }) => {
  const [activeMetric, setActiveMetric] = useState('all');
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  const metrics = [
    { id: 'expenses', label: 'Expenses', gradient: 'from-blue-500 to-cyan-500' },
    { id: 'profit', label: 'Profit', gradient: 'from-pink-500 to-rose-500' },
    { id: 'revenue', label: 'Revenue', gradient: 'from-purple-500 to-violet-500' }
  ];

  return (
    <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-500
      ${isDarkMode ? 'bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-purple-900/90' : 'bg-white border-2 border-purple-100'}`}>
      
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {metrics.map((metric) => (
            <button key={metric.id} 
              onClick={() => setActiveMetric(activeMetric === metric.id ? 'all' : metric.id)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300
                ${activeMetric === metric.id 
                  ? `bg-gradient-to-r ${metric.gradient} text-white scale-110 shadow-2xl ring-4 ring-white/30` 
                  : `${isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}`}>
              {metric.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <Activity size={24} className={isDarkMode ? 'text-purple-300' : 'text-purple-600'} />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20">
            <TrendingUp size={16} className="text-green-400" />
            <span className="text-sm font-bold text-green-400">+18%</span>
          </div>
        </div>
      </div>
      
      <div className={`relative h-56 rounded-2xl p-4 ${isDarkMode ? 'bg-purple-900/40' : 'bg-gray-50'}`}>
        <div className={`absolute left-2 inset-y-4 flex flex-col justify-between text-xs font-semibold ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
          <span>60k</span>
          <span className="text-yellow-400 font-bold">⭐ 50k Target</span>
          <span>40k</span>
          <span>30k</span>
          <span>20k</span>
          <span>10k</span>
        </div>
        
        <svg className="w-full h-full pl-12" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={i} x1="0" y1={i * 40} x2="800" y2={i * 40} 
              stroke={isDarkMode ? '#8B5CF6' : '#CBD5E1'} 
              strokeWidth="0.5" 
              opacity="0.3"
              strokeDasharray="5,5"/>
          ))}
          
          <polygon points="0,100 100,80 200,90 300,70 400,60 500,80 600,70 700,50 800,40 800,200 0,200" fill="url(#blueGrad)"/>
          <polygon points="0,150 100,140 200,130 300,120 400,110 500,130 600,120 700,100 800,90 800,200 0,200" fill="url(#pinkGrad)"/>
          <polygon points="0,120 100,110 200,140 300,100 400,90 500,110 600,100 700,80 800,70 800,200 0,200" fill="url(#purpleGrad)"/>
          
          <polyline points="0,100 100,80 200,90 300,70 400,60 500,80 600,70 700,50 800,40" 
            fill="none" stroke="#60A5FA" strokeWidth="4" filter="url(#glow)"/>
          <polyline points="0,150 100,140 200,130 300,120 400,110 500,130 600,120 700,100 800,90" 
            fill="none" stroke="#EC4899" strokeWidth="4" filter="url(#glow)"/>
          <polyline points="0,120 100,110 200,140 300,100 400,90 500,110 600,100 700,80 800,70" 
            fill="none" stroke="#A78BFA" strokeWidth="4" filter="url(#glow)"/>
          
          {[100,80,90,70,60,80,70,50,40].map((y, i) => (
            <g key={i}>
              <circle cx={i * 100} cy={y} r="6" fill="#60A5FA" className="cursor-pointer" filter="url(#glow)">
                <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
              </circle>
            </g>
          ))}
        </svg>
      </div>
      
      <div className={`flex justify-between text-xs font-semibold mt-4 pl-12 ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
        {months.map((month, index) => (
          <span key={index} className={`cursor-pointer transition-all hover:scale-125 ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-900'}`}>
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LineChart;