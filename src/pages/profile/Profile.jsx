import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { User, Mail, Shield, Phone, MapPin, Camera } from 'lucide-react';

const Profile = () => {
  const { isDarkMode, userRole } = useOutletContext();

  const theme = {
    text: isDarkMode ? "text-[#fbfcfc]" : "text-[#055b65]",
    subText: isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]",
    cardBg: isDarkMode ? "bg-[#055b65] border-[#45828b]/30" : "bg-white border-[#e0e5e9]",
    inputBg: isDarkMode ? "bg-black/20 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900",
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`relative overflow-hidden rounded-3xl border ${theme.cardBg} shadow-xl`}>
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-[#1bd488] to-[#055b65]"></div>

        <div className="px-8 pb-8">
          {/* Header */}
          <div className="relative flex flex-col md:flex-row justify-between items-end -mt-16 mb-8 gap-4">
            <div className="flex items-end gap-6">
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#1bd488] to-[#055b65] flex items-center justify-center text-4xl font-bold text-white">
                    {userRole?.charAt(0) || 'U'}
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm">
                  <Camera size={16} />
                </button>
              </div>
              <div className="mb-2">
                <h1 className={`text-3xl font-bold ${theme.text}`}>Admin User</h1>
                <p className={`flex items-center gap-2 ${theme.subText}`}>
                  <Shield size={16} className="text-[#1bd488]" />
                  {userRole}
                </p>
              </div>
            </div>
            <button className="px-6 py-2.5 rounded-xl bg-[#1bd488] text-[#055b65] font-bold hover:bg-[#1bd488]/90 transition-colors shadow-lg shadow-[#1bd488]/20">
              Edit Profile
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="space-y-6">
              <h2 className={`text-lg font-bold ${theme.text} border-b border-gray-200/10 pb-2`}>Personal Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Full Name</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${theme.inputBg}`}>
                    <User size={18} className="text-[#1bd488]" />
                    <span className="font-medium">Admin User</span>
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Email Address</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${theme.inputBg}`}>
                    <Mail size={18} className="text-[#1bd488]" />
                    <span className="font-medium">admin@crm.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className={`text-lg font-bold ${theme.text} border-b border-gray-200/10 pb-2`}>Contact Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Phone Number</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${theme.inputBg}`}>
                    <Phone size={18} className="text-[#1bd488]" />
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-bold uppercase tracking-wider ${theme.subText} mb-1 block`}>Location</label>
                  <div className={`flex items-center gap-3 p-3 rounded-xl border ${theme.inputBg}`}>
                    <MapPin size={18} className="text-[#1bd488]" />
                    <span className="font-medium">New York, USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;