import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, Shield } from 'lucide-react';

const Profile = () => {
  const { isDarkMode } = useOutletContext();

  const cardClass = isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";

  const user = {
    name: "John Doe",
    role: "Administrator",
    email: "admin@crm.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    joinDate: "January 15, 2024",
    avatar: "https://i.pravatar.cc/150?u=john.doe",
    bio: "Senior CRM Administrator with 5+ years of experience in customer relationship management and system optimization."
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      {/* Header Card */}
      <div className={`p-8 rounded-2xl border ${cardClass} shadow-sm relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative flex flex-col md:flex-row items-end md:items-end gap-6 pt-16">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-lg object-cover"
          />
          <div className="flex-1 mb-2">
            <h1 className={`text-3xl font-bold ${textClass}`}>{user.name}</h1>
            <p className={`text-lg ${subTextClass} flex items-center gap-2`}>
              {user.role}
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">
                Active
              </span>
            </p>
          </div>
          <div className="flex gap-3 mb-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
            <h3 className={`text-lg font-bold mb-4 ${textClass}`}>Contact Information</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email Address", value: user.email, color: "text-blue-500" },
                { icon: Phone, label: "Phone Number", value: user.phone, color: "text-green-500" },
                { icon: MapPin, label: "Location", value: user.location, color: "text-purple-500" },
                { icon: Calendar, label: "Joined Date", value: user.joinDate, color: "text-orange-500" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <div>
                    <p className={`text-xs ${subTextClass}`}>{item.label}</p>
                    <p className={`text-sm font-medium ${textClass}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
            <h3 className={`text-lg font-bold mb-4 ${textClass}`}>About Me</h3>
            <p className={`text-sm leading-relaxed ${subTextClass}`}>{user.bio}</p>
          </div>

          <div className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
            <h3 className={`text-lg font-bold mb-4 ${textClass}`}>Security</h3>
            <div className="flex items-center justify-between p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
               <div className="flex items-center gap-3">
                  <Shield className="text-green-500" size={24} />
                  <div>
                    <p className={`text-sm font-medium ${textClass}`}>Two-Factor Authentication</p>
                    <p className={`text-xs ${subTextClass}`}>Enabled via Authenticator App</p>
                  </div>
               </div>
               <button className={`text-sm font-medium text-blue-500 hover:text-blue-600`}>Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;