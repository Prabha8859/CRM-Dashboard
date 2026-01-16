import React from 'react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import { CheckCircle, Clock, Star, TrendingUp, FileText, MessageSquare } from 'lucide-react';

const StaffProfile = ({ isDarkMode, user }) => {
  const activities = [
    { action: 'Completed task "Update Client Records"', time: '2 hours ago', icon: CheckCircle, color: 'text-green-500' },
    { action: 'Sent proposal to Client X', time: '5 hours ago', icon: FileText, color: 'text-blue-500' },
    { action: 'Replied to support ticket #1234', time: '1 day ago', icon: MessageSquare, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="My Profile" 
        subtitle="Personal Performance & Tasks"
        userRole={user.role}
        isDarkMode={isDarkMode}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card isDarkMode={isDarkMode} className="md:col-span-1 flex flex-col items-center text-center p-8 h-fit">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-xl">
            {user.initials}
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{user.name}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{user.email}</p>
          <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Active
          </div>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card isDarkMode={isDarkMode}>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>My Performance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-500/30">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Tasks Completed</span>
                </div>
                <span className="font-bold text-xl">142</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-dashed border-slate-500/30">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500" size={20} />
                  <span>Rating</span>
                </div>
                <span className="font-bold text-xl">4.9/5</span>
              </div>
            </div>
          </Card>

          <Card isDarkMode={isDarkMode}>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Activity Log</h3>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {activities.map((activity, index) => (
                <div key={index} className={`flex items-start gap-3 pb-4 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} last:border-0 last:pb-0`}>
                  <div className={`mt-1 ${activity.color}`}>
                    <activity.icon size={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{activity.action}</p>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;