import React from 'react';
import { HeartPulse, Syringe, Package, Clock } from 'lucide-react';
import Card from '../../ui/Card';

const HealthOverview = ({ isDarkMode }) => {
  const overview = [
    { label: 'Total Health Tests', value: '1,204', sub: '+12% this month', icon: HeartPulse, color: 'text-rose-500' },
    { label: 'Tests Assigned Today', value: '45', sub: '12 pending', icon: Syringe, color: 'text-cyan-500' },
    { label: 'Packages Assigned', value: '18', sub: 'Active now', icon: Package, color: 'text-violet-500' },
    { label: 'Pending Assignments', value: '7', sub: 'Action required', icon: Clock, color: 'text-amber-500' },
  ];

  return (
    <div>
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Health Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overview.map((item, index) => (
          <Card key={index} isDarkMode={isDarkMode} className="border-l-4 border-l-transparent hover:border-l-indigo-500 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
              </div>
            </div>
            <div className={`mt-3 text-xs font-medium ${item.color} bg-opacity-10 px-2 py-1 rounded inline-block`}>{item.sub}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HealthOverview;