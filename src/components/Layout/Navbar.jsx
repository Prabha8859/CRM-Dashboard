import React, { useState } from 'react';
import { Bell, Search, Menu, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isDarkMode, toggleTheme, toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-purple-200" : "text-gray-500";
  const iconColor = isDarkMode ? "text-purple-300 hover:text-white" : "text-gray-400 hover:text-purple-600";
  const dropdownBg = isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-100";
  const borderColor = isDarkMode ? "border-white/10" : "border-gray-200";

  const notifications = [
    { id: 1, text: "New staff member added", time: "5 min ago", unread: true },
    { id: 2, text: "Weekly revenue report ready", time: "1 hour ago", unread: false },
    { id: 3, text: "System update scheduled", time: "4 hours ago", unread: false },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className={`sticky top-0 z-30 flex justify-between items-center px-6 md:px-8 py-4 border-b backdrop-blur-xl transition-all duration-300 ${borderColor} ${isDarkMode ? 'bg-indigo-950/80' : 'bg-white/80'}`}>
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className={`md:hidden p-2 rounded-lg ${iconColor}`}>
          <Menu size={24} />
        </button>
        <div>
          <h1 className={`text-xl md:text-2xl font-bold ${textColor} tracking-tight`}>Analytics Dashboard</h1>
          <p className={`text-xs md:text-sm ${subTextColor} hidden sm:block font-medium`}>Real-time business metrics and insights</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className={`hidden md:flex items-center px-4 py-2.5 rounded-full ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-100/50 border-slate-200'} border transition-all focus-within:ring-2 focus-within:ring-purple-500/50 w-64`}>
            <Search size={18} className={isDarkMode ? "text-slate-400" : "text-slate-500"} />
            <input 
                type="text" 
                placeholder="Search..." 
                className={`bg-transparent border-none outline-none ml-2 w-full text-sm ${textColor} placeholder-${isDarkMode ? 'slate-500' : 'slate-400'}`}
            />
        </div>

        <div className="relative">
          <button 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`p-2.5 rounded-full transition-all duration-200 ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'} ${iconColor} relative`}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {isNotificationsOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setIsNotificationsOpen(false)} />
              <div className={`absolute right-0 mt-3 w-80 rounded-2xl shadow-2xl py-2 z-40 border ${dropdownBg} backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200`}>
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-100'} mb-2 flex justify-between items-center`}>
                  <p className={`text-sm font-bold ${textColor}`}>Notifications</p>
                  <span className="text-xs text-purple-400 cursor-pointer hover:text-purple-300">Mark all read</span>
                </div>
                {notifications.map((notif) => (
                  <div key={notif.id} className={`px-4 py-3 hover:${isDarkMode ? 'bg-white/5' : 'bg-gray-50'} transition-colors cursor-pointer flex items-start gap-3 group`}>
                    <div className={`w-2 h-2 mt-1.5 rounded-full ${notif.unread ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                    <div>
                      <p className={`text-sm ${textColor} group-hover:text-purple-400 transition-colors`}>{notif.text}</p>
                      <p className={`text-xs ${subTextColor} mt-0.5`}>{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex items-center gap-2 focus:outline-none p-1 pr-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white/20">
                JD
            </div>
            <ChevronDown size={16} className={`${subTextColor} hidden md:block`} />
          </button>

          {isProfileOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setIsProfileOpen(false)} />
              <div className={`absolute right-0 mt-3 w-56 rounded-2xl shadow-2xl py-2 z-40 border ${dropdownBg} backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200`}>
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-100'} mb-2`}>
                  <p className={`text-sm font-bold ${textColor}`}>John Doe</p>
                  <p className={`text-xs ${subTextColor}`}>admin@crm.com</p>
                </div>
                
                <button className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${subTextColor} hover:${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-900'} transition-colors`}>
                  <User size={16} /> Profile
                </button>
                <button className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${subTextColor} hover:${isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-50 text-gray-900'} transition-colors`}>
                  <Settings size={16} /> Settings
                </button>
                <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-gray-100'} my-1`}></div>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
