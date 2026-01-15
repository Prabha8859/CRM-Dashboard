import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { User, Bell, Lock, Palette } from 'lucide-react';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useOutletContext();

  const cardClass = isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";
  const inputClass = isDarkMode 
    ? 'bg-slate-800 border-slate-700 text-white focus:ring-blue-500/50' 
    : 'bg-white border-slate-300 text-slate-900 focus:ring-blue-500';

  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      fields: [
        { label: 'Full Name', type: 'text', defaultValue: 'John Doe' },
        { label: 'Email Address', type: 'email', defaultValue: 'admin@crm.com' },
        { label: 'Profile Picture URL', type: 'text', defaultValue: 'https://i.pravatar.cc/150?u=john.doe' },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      fields: [
        { label: 'Current Password', type: 'password' },
        { label: 'New Password', type: 'password' },
        { label: 'Confirm New Password', type: 'password' },
      ],
    },
    {
      title: 'Notifications',
      icon: Bell,
      fields: [
        { label: 'Email Notifications', type: 'toggle', defaultValue: true },
        { label: 'Push Notifications', type: 'toggle', defaultValue: false },
        { label: 'Weekly Summary', type: 'toggle', defaultValue: true },
      ],
    },
    {
        title: 'Appearance',
        icon: Palette,
        fields: [
            { label: 'Theme', type: 'select', options: ['Light', 'Dark', 'System'] },
        ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div>
        <h2 className={`text-2xl font-bold ${textClass}`}>Settings</h2>
        <p className={`text-sm ${subTextClass}`}>Manage your account and application settings.</p>
      </div>

      {settingsSections.map((section, idx) => (
        <div key={idx} className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
          <div className="flex items-center gap-3 mb-6">
            <section.icon className={subTextClass} size={20} />
            <h3 className={`text-lg font-bold ${textClass}`}>{section.title}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.fields.map((field, fieldIdx) => (
              <div key={fieldIdx}>
                <label className={`block text-sm font-medium mb-2 ${subTextClass}`}>{field.label}</label>
                {field.type === 'toggle' ? (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={field.defaultValue} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                ) : field.type === 'select' ? (
                    <select 
                      value={isDarkMode ? 'Dark' : 'Light'} 
                      onChange={(e) => {
                        const val = e.target.value;
                        if ((val === 'Dark' && !isDarkMode) || (val === 'Light' && isDarkMode)) {
                          toggleTheme();
                        }
                      }}
                      className={`w-full px-3 py-2 rounded-lg border text-sm outline-none transition-all ${inputClass}`}
                    >
                        {field.options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                ) : (
                  <input type={field.type} defaultValue={field.defaultValue} placeholder={`Enter ${field.label.toLowerCase()}`} className={`w-full px-3 py-2 rounded-lg border text-sm outline-none transition-all ${inputClass}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;