import { useState } from "react";
import { 
  Bell, 
  Search, 
  Settings, 
  LogOut, 
  User, 
  Moon, 
  Sun,
  ChevronDown,
  Mail,
  Menu
} from "lucide-react";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const notifications = [
    { id: 1, text: "New staff member added", time: "5 min ago", unread: true },
    { id: 2, text: "Insurance claim approved", time: "1 hour ago", unread: true },
    { id: 3, text: "System maintenance scheduled", time: "2 hours ago", unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between shadow-sm sticky top-0 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-110">
          <Menu size={20} className="text-slate-600" />
        </button>
        
        <h1 className="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-300">
          Dashboard
        </h1>
      </div>

      {/* Center - Search Bar */}
      <div className={`hidden md:flex items-center flex-1 max-w-md mx-8 relative transition-all duration-300 ${
        searchFocused ? 'scale-105' : ''
      }`}>
        <Search 
          size={18} 
          className={`absolute left-3 transition-all duration-300 ${
            searchFocused ? 'text-blue-500' : 'text-slate-400'
          }`} 
        />
        <input
          type="text"
          placeholder="Search anything..."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className={`w-full pl-10 pr-4 py-2 bg-slate-50 border rounded-lg text-sm focus:outline-none transition-all duration-300 ${
            searchFocused 
              ? 'border-blue-500 bg-white shadow-lg' 
              : 'border-slate-200 hover:border-slate-300'
          }`}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-180 group relative"
        >
          {darkMode ? (
            <Sun size={20} className="text-slate-600 group-hover:text-yellow-500 transition-colors" />
          ) : (
            <Moon size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-110 relative group"
          >
            <Bell size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors group-hover:animate-pulse" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div 
              className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
              style={{ animation: 'slideDown 0.3s ease-out' }}
            >
              <div className="p-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white">
                <h3 className="font-semibold text-slate-700">Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notif, index) => (
                  <div
                    key={notif.id}
                    className={`p-4 border-b border-slate-100 hover:bg-slate-50 transition-all duration-200 cursor-pointer ${
                      notif.unread ? 'bg-blue-50/50' : ''
                    }`}
                    style={{ animation: `fadeIn 0.3s ease-out ${index * 0.1}s backwards` }}
                  >
                    <div className="flex items-start gap-3">
                      {notif.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 animate-pulse" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-slate-700">{notif.text}</p>
                        <span className="text-xs text-slate-500">{notif.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-slate-200">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  View All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Messages */}
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-110 group relative">
          <Mail size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90 group">
          <Settings size={20} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-300"></div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 hover:bg-slate-100 rounded-lg px-2 py-1 transition-all duration-300 group"
          >
            <div className="text-right hidden sm:block">
              <span className="text-sm font-medium text-slate-700 block group-hover:text-blue-600 transition-colors">
                Super Admin
              </span>
              <span className="text-xs text-slate-500">admin@crm.com</span>
            </div>
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg transform group-hover:scale-110 transition-all duration-300">
                SA
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <ChevronDown 
              size={16} 
              className={`text-slate-500 transition-transform duration-300 ${
                showProfile ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Profile Dropdown */}
          {showProfile && (
            <div 
              className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
              style={{ animation: 'slideDown 0.3s ease-out' }}
            >
              <div className="p-3 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white">
                <p className="text-sm font-semibold text-slate-700">Super Admin</p>
                <p className="text-xs text-slate-500">admin@crm.com</p>
              </div>
              
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded-lg transition-all duration-200 group">
                  <User size={16} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                    My Profile
                  </span>
                </button>
                
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded-lg transition-all duration-200 group">
                  <Settings size={16} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                    Settings
                  </span>
                </button>
              </div>

              <div className="p-2 border-t border-slate-200">
                <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-red-50 rounded-lg transition-all duration-200 group">
                  <LogOut size={16} className="text-slate-600 group-hover:text-red-500 transition-colors" />
                  <span className="text-sm text-slate-700 group-hover:text-red-600 transition-colors">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
