import React, { useState } from 'react';
import { User, Bell, Lock, Save } from 'lucide-react';

const Settings = ({ isDarkMode }) => {
  const cardBg = isDarkMode ? "bg-indigo-950/50 border-purple-800/30" : "bg-white border-purple-100";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-purple-200" : "text-gray-500";
  const borderColor = isDarkMode ? "border-purple-800/30" : "border-purple-100";
  const inputBg = isDarkMode ? "bg-purple-900/30 border-purple-700/50 text-white" : "bg-gray-50 border-gray-200 text-gray-900";

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "admin@crm.com"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Updating profile:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${textColor}`}>Settings</h2>
        <p className={subTextColor}>Manage your account preferences and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar / Navigation for Settings could go here in a fuller version */}
        
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Section */}
          <div className={`p-6 rounded-2xl border ${cardBg} ${borderColor} backdrop-blur-xl`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <User size={24} />
              </div>
              <h3 className={`text-lg font-bold ${textColor}`}>Profile Information</h3>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${subTextColor}`}>Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${inputBg}`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${subTextColor}`}>Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${inputBg}`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${subTextColor}`}>Role</label>
                <input 
                  type="text" 
                  value="Super Admin"
                  disabled
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${inputBg} opacity-70 cursor-not-allowed`}
                />
              </div>
              <div className="md:col-span-2 flex justify-end mt-4">
                <button type="submit" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                  <Save size={18} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Security Section */}
          <div className={`p-6 rounded-2xl border ${cardBg} ${borderColor} backdrop-blur-xl`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <Lock size={24} />
              </div>
              <h3 className={`text-lg font-bold ${textColor}`}>Security</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`text-sm font-medium ${subTextColor}`}>Current Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${inputBg}`}
                />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-medium ${subTextColor}`}>New Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all ${inputBg}`}
                />
              </div>
            </div>
          </div>

          {/* Notifications Toggle Section */}
          <div className={`p-6 rounded-2xl border ${cardBg} ${borderColor} backdrop-blur-xl`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <Bell size={24} />
              </div>
              <h3 className={`text-lg font-bold ${textColor}`}>Notifications</h3>
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <span className={textColor}>Enable Email Notifications</span>
              <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;