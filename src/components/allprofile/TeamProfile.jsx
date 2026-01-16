import React from 'react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import { Users, Target, Zap } from 'lucide-react';

const TeamProfile = ({ isDarkMode, user }) => {
  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Team Lead Profile" 
        subtitle="Team Coordination & Goals"
        userRole={user.role}
        isDarkMode={isDarkMode}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card isDarkMode={isDarkMode} className="md:col-span-1 flex flex-col items-center text-center p-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-xl">
            {user.initials}
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{user.name}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{user.email}</p>
        </Card>

        <div className="md:col-span-2">
          <Card isDarkMode={isDarkMode}>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Team Stats</h3>
            <div className="h-40 flex items-center justify-center border-2 border-dashed rounded-xl border-slate-500/20">
              <p className="text-slate-500">Team Velocity Chart Placeholder</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;