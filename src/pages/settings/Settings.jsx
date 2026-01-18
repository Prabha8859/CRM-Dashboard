import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Save, Globe, Bell, Lock, Shield, Mail, Smartphone } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const Settings = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [activeTab, setActiveTab] = useState('general');

  // Mock States
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'CRM Dashboard',
    supportEmail: 'support@crm.com',
    timezone: 'UTC-5',
    language: 'English'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: false,
    smsAlerts: true,
    marketingEmails: false
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    sessionTimeout: '30 mins'
  });

  const handleSave = () => {
    // API call simulation
    console.log('Settings Saved');
  };

  const theme = {
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    cardBg: isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200',
    inputBg: isDarkMode ? 'bg-[#055b65] border-[#45828b]/50 text-white' : 'bg-slate-50 border-slate-200 text-slate-900',
    activeTab: isDarkMode ? 'bg-[#1bd488]/20 text-[#1bd488] border-[#1bd488]' : 'bg-blue-50 text-blue-600 border-blue-600',
    inactiveTab: isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
  };

  const renderGeneral = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme.text}`}>Site Name</label>
          <input 
            type="text" 
            value={generalSettings.siteName}
            onChange={(e) => setGeneralSettings({...generalSettings, siteName: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
          />
        </div>
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme.text}`}>Support Email</label>
          <input 
            type="email" 
            value={generalSettings.supportEmail}
            onChange={(e) => setGeneralSettings({...generalSettings, supportEmail: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
          />
        </div>
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme.text}`}>Timezone</label>
          <select 
            value={generalSettings.timezone}
            onChange={(e) => setGeneralSettings({...generalSettings, timezone: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
          >
            <option>UTC-5</option>
            <option>UTC+0</option>
            <option>UTC+5:30</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme.text}`}>Language</label>
          <select 
            value={generalSettings.language}
            onChange={(e) => setGeneralSettings({...generalSettings, language: e.target.value})}
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className={`p-4 rounded-xl border ${theme.cardBg} space-y-4`}>
        {[
          { label: 'Email Alerts', sub: 'Receive updates via email', icon: Mail, key: 'emailAlerts', color: 'blue' },
          { label: 'Push Notifications', sub: 'Browser notifications', icon: Bell, key: 'pushNotifications', color: 'purple' },
          { label: 'SMS Alerts', sub: 'Critical updates via SMS', icon: Smartphone, key: 'smsAlerts', color: 'green' }
        ].map((item, idx) => (
          <div key={item.key}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? `bg-${item.color}-500/20 text-${item.color}-400` : `bg-${item.color}-100 text-${item.color}-600`}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className={`font-medium ${theme.text}`}>{item.label}</p>
                  <p className={`text-xs ${theme.subText}`}>{item.sub}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={notifications[item.key]} onChange={() => setNotifications({...notifications, [item.key]: !notifications[item.key]})} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1bd488]"></div>
              </label>
            </div>
            {idx < 2 && <div className="border-t border-gray-200/10 my-2"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className={`text-sm font-medium ${theme.text}`}>Current Password</label>
          <input type="password" className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="••••••••" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className={`text-sm font-medium ${theme.text}`}>New Password</label>
            <input type="password" className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <label className={`text-sm font-medium ${theme.text}`}>Confirm Password</label>
            <input type="password" className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="••••••••" />
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-xl border ${theme.cardBg} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
            <Shield size={20} />
          </div>
          <div>
            <p className={`font-medium ${theme.text}`}>Two-Factor Authentication</p>
            <p className={`text-xs ${theme.subText}`}>Add an extra layer of security</p>
          </div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={security.twoFactor} onChange={() => setSecurity({...security, twoFactor: !security.twoFactor})} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1bd488]"></div>
        </label>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Settings" 
        subtitle="Manage your application configuration and preferences."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button onClick={handleSave} className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2">
          <Save size={16} /> Save Changes
        </button>
      </DashboardHeader>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className={`lg:col-span-1 p-2 rounded-2xl border ${theme.cardBg} h-fit`}>
          {['general', 'notifications', 'security'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 capitalize ${activeTab === tab ? theme.activeTab : theme.inactiveTab}`}>
              {tab === 'general' && <Globe size={18} />}
              {tab === 'notifications' && <Bell size={18} />}
              {tab === 'security' && <Lock size={18} />}
              {tab}
            </button>
          ))}
        </div>

        <div className={`lg:col-span-3 p-6 rounded-2xl border ${theme.cardBg}`}>
          <h2 className={`text-xl font-bold mb-6 ${theme.text}`}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h2>
          {activeTab === 'general' && renderGeneral()}
          {activeTab === 'notifications' && renderNotifications()}
          {activeTab === 'security' && renderSecurity()}
        </div>
      </div>
    </div>
  );
};

export default Settings;