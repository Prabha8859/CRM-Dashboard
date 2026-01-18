import React from 'react';
import { Users, UserCheck, Briefcase, Activity } from 'lucide-react';
import Card from '../../ui/Card';

const TeamOverview = ({ isDarkMode }) => {
  const stats = [
    { label: 'Total Teams', value: '8', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-500/20' },
    { label: 'Total Members', value: '142', icon: Users, color: 'text-violet-600', bg: 'bg-violet-100 dark:bg-violet-500/20' },
    { label: 'Team Leads', value: '8', icon: UserCheck, color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-500/20' },
    { label: 'Active Teams', value: '6', icon: Activity, color: 'text-amber-600', bg: 'bg-amber-100 dark:bg-amber-500/20' },
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

export default TeamOverview;
