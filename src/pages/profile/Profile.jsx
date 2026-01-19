import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { User, Mail, Shield, Phone, MapPin, Camera, Save, Lock } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const Profile = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@crm.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSave = () => {
    setIsEditing(false);
    // API call to save profile
    console.log('Profile Saved:', formData);
  };

  const theme = {
    text: isDarkMode ? "text-[#fbfcfc]" : "text-[#055b65]",
    subText: isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]",
    cardBg: isDarkMode ? "bg-[#055b65] border-[#45828b]/30" : "bg-white border-[#e0e5e9]",
    inputBg: isDarkMode ? "bg-[#022c33] border-[#45828b]/50 text-white" : "bg-slate-50 border-slate-200 text-slate-900",
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="My Profile" 
        subtitle="Manage your personal information and security settings."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        {isEditing ? (
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(false)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
          >
            Edit Profile
          </button>
        )}
      </DashboardHeader>

      <div className={`relative overflow-hidden rounded-3xl border ${theme.cardBg} shadow-xl`}>
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-[#1bd488] to-[#055b65]"></div>

        <div className="px-8 pb-8">
          {/* Header */}
          <div className="relative flex flex-col md:flex-row justify-between items-end -mt-16 mb-10 gap-4">
            <div className="flex items-end gap-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1bd488] to-[#055b65] flex items-center justify-center text-4xl font-bold text-white">
                    {formData.name.charAt(0)}
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm">
                  <Camera size={16} />
                </button>
              </div>
              <div className="mb-2">
                <h1 className={`text-3xl font-bold ${theme.text}`}>{formData.name}</h1>
                <p className={`flex items-center gap-2 ${theme.subText}`}>
                  <Shield size={16} className="text-[#1bd488]" />
                  {userRole}
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="space-y-6">
              <h2 className={`text-lg font-bold ${theme.text} border-b border-gray-200/10 pb-2`}>Personal Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Full Name</label>
                  <div className="relative">
                    <User size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isEditing ? 'text-[#1bd488]' : theme.subText}`} />
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg} ${!isEditing && 'opacity-70 border-transparent bg-transparent pl-10'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Email Address</label>
                  <div className="relative">
                    <Mail size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isEditing ? 'text-[#1bd488]' : theme.subText}`} />
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg} ${!isEditing && 'opacity-70 border-transparent bg-transparent pl-10'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isEditing ? 'text-[#1bd488]' : theme.subText}`} />
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg} ${!isEditing && 'opacity-70 border-transparent bg-transparent pl-10'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Location</label>
                  <div className="relative">
                    <MapPin size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isEditing ? 'text-[#1bd488]' : theme.subText}`} />
                    <input 
                      type="text" 
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg} ${!isEditing && 'opacity-70 border-transparent bg-transparent pl-10'}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            {isEditing && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className={`text-lg font-bold ${theme.text} border-b border-gray-200/10 pb-2`}>Change Password</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Current Password</label>
                    <div className="relative">
                      <Lock size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#1bd488]`} />
                      <input 
                        type="password" 
                        value={formData.currentPassword}
                        onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>New Password</label>
                      <div className="relative">
                        <Lock size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#1bd488]`} />
                        <input 
                          type="password" 
                          value={formData.newPassword}
                          onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Confirm Password</label>
                      <div className="relative">
                        <Lock size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 text-[#1bd488]`} />
                        <input 
                          type="password" 
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;