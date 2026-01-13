import React from 'react';

import { Clock, UserPlus, Edit, ShieldCheck, FileText } from 'lucide-react';

const ActivityItem = ({ action, user, time, icon: Icon, color, isDarkMode }) => (
  <div className={`flex items-start gap-4 p-3 rounded-lg ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'} transition-colors`}>
    <div className={`p-2 rounded-full ${color} bg-opacity-10 mt-1`}>
      <Icon size={16} className={color.replace('bg-', 'text-')} />
    </div>
    <div className="flex-1">
      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{action}</p>
      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>by {user}</p>
    </div>
    <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{time}</span>
  </div>
);

const RecentActivity = ({ isDarkMode }) => {
  const activities = [
    { action: 'New Staff Created', user: 'Admin', time: '2 min ago', icon: UserPlus, color: 'bg-green-500' },
    { action: 'Role Assigned', user: 'Manager', time: '15 min ago', icon: ShieldCheck, color: 'bg-blue-500' },
    { action: 'Permission Updated', user: 'Super Admin', time: '1 hr ago', icon: Edit, color: 'bg-orange-500' },
    { action: 'Insurance Assigned', user: 'Agent', time: '2 hrs ago', icon: FileText, color: 'bg-purple-500' },
    { action: 'Package Created', user: 'Admin', time: '5 hrs ago', icon: FileText, color: 'bg-pink-500' },
  ];

  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'} h-full`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Recent Activity</h3>
        <Clock size={20} className={isDarkMode ? 'text-slate-400' : 'text-slate-500'} />
      </div>
      <div className="space-y-1">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;