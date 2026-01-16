import React from 'react';
import Card from '../../ui/Card';

const MetricCardSkeleton = ({ isDarkMode }) => {
  const shimmerClass = `animate-pulse ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`;

  return (
    <Card isDarkMode={isDarkMode}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg ${shimmerClass}`}></div>
        <div className={`h-4 w-2/3 rounded ${shimmerClass}`}></div>
      </div>

      <div className={`h-10 w-1/2 rounded mb-4 ${shimmerClass}`}></div>

      <div className="flex items-center gap-2">
        <div className={`h-5 w-16 rounded ${shimmerClass}`}></div>
        <div className={`h-4 w-24 rounded ${shimmerClass}`}></div>
      </div>
    </Card>
  );
};

export default MetricCardSkeleton;