import React, { useState, useMemo } from 'react';
import { Target } from 'lucide-react';

const RadarChart = ({ isDarkMode, dateRange }) => {
  const [rotation, setRotation] = useState(0);
  
  const metrics = useMemo(() => {
    const initialMetrics = [
      { label: 'N', value: 85 },
      { label: 'NE', value: 92 },
      { label: 'SE', value: 78 },
      { label: 'S', value: 95 },
      { label: 'SW', value: 70 },
      { label: 'NW', value: 88 }
    ];

    if (dateRange && (dateRange.start || dateRange.end)) {
      return initialMetrics.map(item => ({
        ...item,
        value: Math.round(50 + Math.random() * 50)
      }));
    }
    return initialMetrics;
  }, [dateRange]);

  return (
    <div className={`p-6 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-500 cursor-pointer
      ${isDarkMode ? 'bg-gradient-to-br from-purple-600/90 via-purple-700/90 to-purple-900/90' : 'bg-white border-2 border-purple-100'}`}
      onClick={() => setRotation(rotation + 60)}>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-purple-100'}`}>
            <Target size={20} className={isDarkMode ? 'text-purple-200' : 'text-purple-600'} />
          </div>
          <h3 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Coverage Map
          </h3>
        </div>
      </div>
      
      <div className={`rounded-2xl p-4 ${isDarkMode ? 'bg-purple-900/40' : 'bg-gray-50'}`}>
        <div className="relative w-full h-48 flex items-center justify-center">
          
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          
          <svg className="w-full h-full relative z-10" viewBox="0 0 200 200" 
            style={{ transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', transform: `rotate(${rotation}deg)` }}>
            
            <defs>
              <radialGradient id="radarGrad">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.1"/>
              </radialGradient>
              <filter id="radarGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {[40, 60, 80].map((r, i) => (
              <circle key={i} cx="100" cy="100" r={r} fill="none" 
                stroke={isDarkMode ? '#8B5CF6' : '#CBD5E1'} 
                strokeWidth="1" 
                opacity="0.4"
                strokeDasharray="4,4"/>
            ))}
            
            {metrics.map((_, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const x = 100 + 85 * Math.cos(angle);
              const y = 100 + 85 * Math.sin(angle);
              return (
                <line key={i} x1="100" y1="100" x2={x} y2={y} 
                  stroke={isDarkMode ? '#8B5CF6' : '#CBD5E1'} 
                  strokeWidth="1" 
                  opacity="0.4"/>
              );
            })}
            
            <polygon 
              points={metrics.map((m, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const r = (m.value / 100) * 75;
                return `${100 + r * Math.cos(angle)},${100 + r * Math.sin(angle)}`;
              }).join(' ')}
              fill="url(#radarGrad)" 
              stroke="#A78BFA" 
              strokeWidth="3"
              filter="url(#radarGlow)"
              className="transition-all duration-1000"/>
            
            {metrics.map((m, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const r = (m.value / 100) * 75;
              const x = 100 + r * Math.cos(angle);
              const y = 100 + r * Math.sin(angle);
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="6" fill={isDarkMode ? '#fff' : '#8B5CF6'} 
                    filter="url(#radarGlow)" 
                    className="cursor-pointer">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              );
            })}
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {metrics.map((m, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const x = 50 + 48 * Math.cos(angle);
              const y = 50 + 48 * Math.sin(angle);
              return (
                <div key={i}
                  className={`absolute px-2 py-1 rounded-lg font-bold text-xs ${isDarkMode ? 'bg-purple-500/80 text-white' : 'bg-purple-100 text-purple-900'}`}
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                  {m.label}
                </div>
              );
            })}
            
            <div className="text-center">
              <span className={`text-3xl font-black block ${isDarkMode ? 'text-white drop-shadow-lg' : 'text-gray-900'}`}>
                84%
              </span>
              <span className={`text-xs font-semibold ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
                Average Score
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className={`text-xs font-semibold ${isDarkMode ? 'text-purple-300' : 'text-gray-500'}`}>
          🔄 Click to rotate • Interactive Coverage Analysis
        </p>
      </div>
    </div>
  );
};

export default RadarChart;
