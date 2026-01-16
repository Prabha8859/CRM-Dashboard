import React from 'react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import { Shield, Server, Database, Globe } from 'lucide-react';

const SuperAdminProfile = ({ isDarkMode, user }) => {
  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Super Admin Profile" 
        subtitle="System Owner & Global Configuration"
        userRole={user.role}
        isDarkMode={isDarkMode}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card isDarkMode={isDarkMode} className="md:col-span-1 flex flex-col items-center text-center p-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1bd488] to-[#45828b] flex items-center justify-center text-4xl font-bold text-[#055b65] mb-4 shadow-xl">
            {user.initials}
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{user.name}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{user.email}</p>
          <div className="mt-6 w-full pt-6 border-t border-dashed border-slate-500/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">System Access</span>
              <span className="text-xs bg-red-500/10 text-red-500 px-2 py-1 rounded-full">Root</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Security Level</span>
              <span className="text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded-full">Level 5</span>
            </div>
          </div>
        </Card>

        {/* Details */}
        <div className="md:col-span-2 space-y-6">
          <Card isDarkMode={isDarkMode}>
            <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>System Control</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Global Settings', icon: Globe },
                { label: 'Server Status', icon: Server },
                { label: 'Database', icon: Database },
                { label: 'Security Logs', icon: Shield },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'}`}>
                  <item.icon size={20} className="text-[#1bd488]" />
                  <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;