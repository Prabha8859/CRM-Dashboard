import React, { useState } from 'react';
import { LayoutDashboard, Users, Settings, PieChart, LogOut, X, Box, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Sidebar = ({ isDarkMode, isOpen, toggleSidebar, currentPage, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Enhanced Theme Configuration
  const theme = {
    bg: isDarkMode 
      ? "bg-slate-900/95 backdrop-blur-2xl border-r border-white/5" 
      : "bg-white/90 backdrop-blur-2xl border-r border-slate-200",
    text: isDarkMode ? "text-slate-400" : "text-slate-500",
    textActive: isDarkMode ? "text-white" : "text-blue-600",
    hover: isDarkMode ? "hover:bg-white/5 hover:text-slate-200" : "hover:bg-slate-50 hover:text-slate-700",
    active: isDarkMode 
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" 
      : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-100",
    iconActive: isDarkMode ? "text-white" : "text-blue-600",
    iconInactive: isDarkMode ? "text-slate-500 group-hover:text-slate-300" : "text-slate-400 group-hover:text-slate-600",
    tooltip: isDarkMode ? "bg-slate-800 text-white border-slate-700" : "bg-slate-900 text-white border-slate-800"
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: PieChart, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: Settings, label: 'Settings' },
  ];

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed md:relative z-50 
        ${isCollapsed ? 'w-20' : 'w-72'} min-h-screen flex flex-col 
        transition-all duration-300 ease-in-out
        ${theme.bg}
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header / Logo */}
        <div className={`p-6 flex items-center justify-between`}>
          <div className="flex items-center gap-3 px-2">
            <div className={`
              w-10 h-10 rounded-xl flex items-center justify-center shadow-lg
              bg-gradient-to-br from-blue-500 to-indigo-600
            `}>
              <Box className="text-white" size={24} />
            </div>
            {!isCollapsed && (
              <div className="animate-in fade-in duration-300">
                <h1 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  CRM Admin
                </h1>
                <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  v2.0.0
                </p>
              </div>
            )}
          </div>
           {/* Collapse Toggle Button (Desktop Only) - Moved to Header */}
           <button 
            onClick={toggleCollapse}
            className={`
              hidden md:flex p-2 rounded-lg transition-all duration-200
              ${theme.hover} ${theme.text}
            `}
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

          {/* Mobile Close Button */}
          <button 
            onClick={toggleSidebar} 
            className={`md:hidden p-2 rounded-lg transition-colors ${theme.hover}`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          {!isCollapsed && (
            <p className={`px-4 text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'} animate-in fade-in duration-300`}>
              Main Menu
            </p>
          )}
          {menuItems.map((item, index) => {
            const isActive = currentPage === item.label;
            return (
              <button
                key={index}
                onClick={() => onNavigate && onNavigate(item.label)}
                className={`
                  w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3.5 rounded-xl 
                  transition-all duration-200 group relative overflow-hidden
                  ${isActive ? theme.active : `${theme.text} ${theme.hover}`}
                `}
              >
                <item.icon 
                  size={22} 
                  className={`
                    transition-colors duration-200
                    ${isActive ? theme.iconActive : theme.iconInactive}
                  `} 
                />
                {!isCollapsed && <span className="font-medium relative z-10 animate-in fade-in duration-200">{item.label}</span>}
                
                {/* Active Indicator for non-active hover state */}
                {!isActive && (
                  <div className={`
                    absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  `} />
                )}

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className={`
                    absolute left-full ml-4 px-3 py-1.5 rounded-lg text-sm font-medium shadow-xl
                    opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0
                    pointer-events-none z-50 whitespace-nowrap border
                    ${theme.tooltip}
                  `}>
                    {item.label}
                    {/* Arrow */}
                    <div className={`absolute top-1/2 -left-1 w-2 h-2 -mt-1 rotate-45 border-l border-b ${theme.tooltip} border-r-0 border-t-0 bg-inherit`}></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer / User Profile */}
        <div className={`p-4 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
          <div className={`
            flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-3 rounded-xl
            transition-all duration-200
            ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-slate-100'}
          `}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md shrink-0">
              JD
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0 animate-in fade-in duration-200">
                <p className={`text-sm font-bold truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>John Doe</p>
                <p className={`text-xs truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>admin@crm.com</p>
              </div>
            )}
            {!isCollapsed && (
              <button className={`p-1.5 rounded-lg transition-colors hover:bg-red-500/10 hover:text-red-500 ${theme.text}`}>
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;