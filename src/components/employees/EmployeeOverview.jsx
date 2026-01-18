
import React from 'react';
import { Users, UserCheck, UserX, UserPlus } from 'lucide-react';
import Card from '../../ui/Card';

const EmployeeOverview = ({ isDarkMode }) => {
  const stats = [
    { label: 'Total Employees', value: '156', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/20' },
    { label: 'Active Employees', value: '142', icon: UserCheck, color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-500/20' },
    { label: 'Inactive / Left', value: '14', icon: UserX, color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-500/20' },
    { label: 'New This Month', value: '8', icon: UserPlus, color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-500/20' },
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

export default EmployeeOverview;