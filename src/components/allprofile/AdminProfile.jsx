import React, { useState } from 'react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import { Users, FileText, Briefcase, Award, Settings, Bell } from 'lucide-react';

const AdminProfile = ({ isDarkMode, user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <DashboardHeader 
        title="Admin Profile" 
        subtitle="Operational Management & Oversight"
        userRole={user.role}
        isDarkMode={isDarkMode}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card isDarkMode={isDarkMode} className="md:col-span-1 flex flex-col items-center text-center p-8 h-fit">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-xl">
            {user.initials}
          </div>
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{user.name}</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{user.email}</p>
          <p className={`mt-2 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{user.department}</p>
          
          <div className="mt-8 w-full flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-blue-500 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Settings
            </button>
          </div>
        </Card>

        <div className="md:col-span-2">
          <Card isDarkMode={isDarkMode}>
            {activeTab === 'overview' ? (
              <>
                <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Management Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} flex items-center gap-4`}>
                    <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500"><Users size={24} /></div>
                    <div><p className="text-sm opacity-70">Staff Managed</p><p className="text-xl font-bold">24</p></div>
                  </div>
                  <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} flex items-center gap-4`}>
                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500"><Briefcase size={24} /></div>
                    <div><p className="text-sm opacity-70">Projects</p><p className="text-xl font-bold">8</p></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Settings</h3>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between p-4 rounded-xl border ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <div className="flex items-center gap-3">
                      <Bell className="text-blue-500" size={20} />
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Email Notifications</p>
                        <p className="text-xs text-slate-500">Receive daily summaries and alerts</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-blue-500' : 'bg-slate-300'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;