import React from 'react';
import { Package, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import Card from '../../ui/Card';

const HealthPackagesOverview = ({ isDarkMode }) => {
  const stats = [
    { label: 'Total Packages', value: '12', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/20' },
    { label: 'Active Packages', value: '10', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-500/20' },
    { label: 'Most Popular', value: 'Full Body', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-500/20' },
    { label: 'Avg. Price', value: '₹2,400', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-500/20' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} isDarkMode={isDarkMode} className="hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HealthPackagesOverview;