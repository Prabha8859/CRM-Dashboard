import React, { useState, useEffect } from 'react';
import { Bell, Search, Menu, User, Settings, LogOut, ChevronDown, Clock } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LogoutModal from './Modals/LogoutModal';

const Navbar = ({ isDarkMode, toggleTheme, toggleSidebar, userRole }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  const textColor = isDarkMode ? "text-[#fbfcfc]" : "text-[#055b65]";
  const subTextColor = isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]";
  const iconColor = isDarkMode ? "text-[#b2c9c5] hover:text-[#fbfcfc]" : "text-[#45828b] hover:text-[#055b65]";
  const dropdownBg = isDarkMode ? "bg-[#055b65] border-[#45828b]/50" : "bg-[#fbfcfc] border-[#e0e5e9]";
  const borderColor = isDarkMode ? "border-[#45828b]/20" : "border-[#e0e5e9]/80";

  const notifications = [
    { id: 1, text: "New staff member added", time: "5 min ago", unread: true },
    { id: 2, text: "Weekly revenue report ready", time: "1 hour ago", unread: false },
    { id: 3, text: "System update scheduled", time: "4 hours ago", unread: false },
  ];

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsProfileOpen(false);
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentUser = {
    name: "Admin User",
    email: "admin@crm.com",
    initials: userRole ? userRole.substring(0, 2).toUpperCase() : "AD"
  };

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className={`sticky top-0 z-30 flex justify-between items-center px-6 md:px-8 py-4 border-b backdrop-blur-2xl transition-all duration-300 shadow-sm ${borderColor} ${isDarkMode ? 'bg-gradient-to-r from-[#055b65]/95 to-[#022c33]/95' : 'bg-gradient-to-r from-[#fbfcfc]/90 to-[#f0fdf4]/90'}`}>
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className={`md:hidden p-2 rounded-lg ${iconColor}`}>
          <Menu size={24} />
        </button>
        <div>
          <div className={`flex items-center gap-2 text-xs font-medium mb-1 ${subTextColor}`}>
            <Link to="/dashboard" className="hover:text-[#1bd488] transition-colors">Home</Link>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
              return (
                <React.Fragment key={name}>
                  <span className="opacity-50">/</span>
                  {isLast ? (
                    <span className={textColor}>{displayName}</span>
                  ) : (
                    <Link to={routeTo} className="hover:text-[#1bd488] transition-colors">{displayName}</Link>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <h1 className={`text-xl md:text-2xl font-bold ${textColor} tracking-tight`}>
            {pathnames.length > 0 ? pathnames[pathnames.length - 1].charAt(0).toUpperCase() + pathnames[pathnames.length - 1].slice(1).replace(/-/g, ' ') : 'Dashboard'}
          </h1>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Real-time Clock */}
        <div className={`hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full ${isDarkMode ? 'bg-[#45828b]/30 border-[#45828b]/50 text-[#b2c9c5]' : 'bg-[#e0e5e9]/50 border-[#e0e5e9] text-[#45828b]'} border transition-all`}>
          <Clock size={16} />
          <span className="text-sm font-medium font-mono">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        {/* Search Bar */}
        <div className={`hidden md:flex items-center px-4 py-2.5 rounded-full ${isDarkMode ? 'bg-[#45828b]/30 border-[#45828b]/50' : 'bg-[#e0e5e9]/50 border-[#e0e5e9]'} border transition-all focus-within:ring-2 focus-within:ring-[#1bd488]/50 w-64`}>
            <Search size={18} className={isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]"} />
            <input 
                type="text" 
                placeholder="Search..." 
                className={`bg-transparent border-none outline-none ml-2 w-full text-sm ${textColor} placeholder-${isDarkMode ? 'slate-500' : 'slate-400'}`}
            />
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsNotificationsOpen(true)}
          onMouseLeave={() => setIsNotificationsOpen(false)}
        >
          <button 
            className={`p-2.5 rounded-full transition-all duration-200 ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'} ${iconColor} relative`}
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span>
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 top-full pt-3 w-80 z-40">
              <div className={`rounded-2xl shadow-2xl py-2 border ${dropdownBg} backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200`}>
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-100'} mb-2 flex justify-between items-center`}>
                  <p className={`text-sm font-bold ${textColor}`}>Notifications</p>
                  <span className="text-xs text-[#1bd488] cursor-pointer hover:text-[#1bd488]/80">Mark all read</span>
                </div>
                {notifications.map((notif) => (
                  <div key={notif.id} className={`px-4 py-3 hover:${isDarkMode ? 'bg-[#45828b]/20' : 'bg-[#e0e5e9]/60'} transition-colors cursor-pointer flex items-start gap-3 group`}>
                    <div className={`w-2 h-2 mt-1.5 rounded-full ${notif.unread ? 'bg-[#1bd488]' : 'bg-[#b2c9c5]'}`}></div>
                    <div>
                      <p className={`text-sm ${textColor} group-hover:text-[#1bd488] transition-colors`}>{notif.text}</p>
                      <p className={`text-xs ${subTextColor} mt-0.5`}>{notif.time}</p>
                    </div>
                  </div>
                ))}
                <div className={`px-4 py-3 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-100'} mt-2`}>
                  <Link to="/notifications" onClick={() => setIsNotificationsOpen(false)} className={`block text-center text-sm font-medium text-[#1bd488] hover:text-[#1bd488]/80`}>
                    View all notifications
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div 
          className="relative"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <button 
            className={`flex items-center gap-2 focus:outline-none p-1 pr-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-slate-100'}`}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1bd488] to-[#45828b] flex items-center justify-center text-[#055b65] font-bold text-sm shadow-lg ring-2 ring-white/20">
                {currentUser.initials}
            </div>
            <ChevronDown size={16} className={`${subTextColor} hidden md:block transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 top-full pt-3 w-56 z-40">
              <div className={`rounded-2xl shadow-2xl py-2 border ${dropdownBg} backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200`}>
                <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-white/10' : 'border-gray-100'} mb-2`}>
                  <p className={`text-sm font-bold ${textColor}`}>{currentUser.name}</p>
                  <p className={`text-xs ${subTextColor}`}>{currentUser.email}</p>
                </div>
                
                <button onClick={() => navigate('/profile')} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${subTextColor} hover:${isDarkMode ? 'bg-[#45828b]/20 text-white' : 'bg-[#e0e5e9]/60 text-gray-900'} transition-colors`}>
                  <User size={16} /> Profile
                </button>
                <button onClick={() => {
                  setIsProfileOpen(false);
                  navigate('/settings');
                }} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${subTextColor} hover:${isDarkMode ? 'bg-[#45828b]/20 text-white' : 'bg-[#e0e5e9]/60 text-gray-900'} transition-colors`}>
                  <Settings size={16} /> Settings
                </button>
                <div className={`border-t ${isDarkMode ? 'border-white/10' : 'border-gray-100'} my-1`}></div>
                <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={confirmLogout}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Navbar;
