import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  PieChart, 
  LogOut, 
  X, 
  Box, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Bell,
  ShieldCheck,
  UsersRound,
  FileText,
  ClipboardCheck,
  MessageSquare,
  ClipboardList,
  UserCircle,
  ListTodo,
  TrendingUp,
  ChevronDown,
  Check,
  MoreVertical
} from 'lucide-react';
import LogoutModal from './Modals/LogoutModal';

const Sidebar = ({ isDarkMode, isOpen, toggleSidebar, userRole, setUserRole, isCollapsed, setIsCollapsed }) => {
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const roleMenuRef = useRef(null);

  // Mock notification counts (Replace with real data from context/API)
  const notificationCounts = {
    '/messages': 3,
    '/claims': 12,
    '/team-tasks': 5,
    '/approvals': 2
  };

  // Enhanced Theme Configuration
  const theme = {
    bg: isDarkMode 
      ? "bg-[#055b65] border-r border-[#45828b]/20" 
      : "bg-[#fbfcfc] border-r border-[#e0e5e9]",
    text: isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]",
    textActive: isDarkMode ? "text-[#055b65]" : "text-[#055b65]",
    hover: isDarkMode ? "hover:bg-[#45828b]/20 hover:text-[#fbfcfc] hover:shadow-[0_0_15px_rgba(27,212,136,0.1)]" : "hover:bg-[#e0e5e9] hover:text-[#055b65]",
    active: isDarkMode 
      ? "bg-gradient-to-r from-[#1bd488] to-[#10b981] text-[#055b65] shadow-[0_0_20px_rgba(27,212,136,0.4)] border-none" 
      : "bg-gradient-to-r from-[#e0e5e9] to-[#cbd5e1] text-[#055b65] shadow-md border border-[#b2c9c5]/20",
    iconActive: isDarkMode ? "text-[#055b65]" : "text-[#055b65]",
    iconInactive: isDarkMode ? "text-slate-300 group-hover:text-white" : "text-slate-500 group-hover:text-[#055b65]",
    tooltip: isDarkMode ? "bg-[#022c33] text-white border-[#1bd488]/30" : "bg-white text-[#055b65] border-[#e0e5e9] shadow-xl"
  };

  // Role-Based Menu Configuration
  const roleMenus = {
    'Super Admin': [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: ShieldCheck, label: 'Admin Management', path: '/admins' },
      { icon: Users, label: 'Staff Management', path: '/staff' },
      { icon: UsersRound, label: 'Team Management', path: '/teams' },
      { icon: FileText, label: 'Policy Management', path: '/policies' },
      { icon: ClipboardCheck, label: 'Claims Management', path: '/claims' },
      { icon: MessageSquare, label: 'Messaging', path: '/messages' },
      { icon: PieChart, label: 'Reports & Analytics', path: '/analytics' },
      { icon: Settings, label: 'Settings', path: '/settings' },
    ],
    'Admin': [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: Users, label: 'Staff Management', path: '/staff' },
      { icon: UsersRound, label: 'Team Management', path: '/teams' },
      { icon: ClipboardCheck, label: 'Claims', path: '/claims' },
      { icon: MessageSquare, label: 'Messaging', path: '/messages' },
      { icon: PieChart, label: 'Reports', path: '/analytics' },
      { icon: Settings, label: 'Settings', path: '/settings' },
    ],
    'Staff': [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: ClipboardList, label: 'My Claims', path: '/my-claims' },
      { icon: UserCircle, label: 'Customers', path: '/customers' },
      { icon: MessageSquare, label: 'Messages', path: '/messages' },
      { icon: User, label: 'Profile', path: '/profile' },
    ],
    'Team': [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
      { icon: ListTodo, label: 'Team Tasks', path: '/team-tasks' },
      { icon: TrendingUp, label: 'Performance', path: '/performance' },
      { icon: MessageSquare, label: 'Messages', path: '/messages' },
    ]
  };

  const menuItems = roleMenus[userRole] || roleMenus['Super Admin'];
  const availableRoles = ['Super Admin', 'Admin', 'Staff', 'Team'];

  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
  };

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Close role menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleMenuRef.current && !roleMenuRef.current.contains(event.target)) {
        setIsRoleMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        ${isCollapsed ? 'w-20' : 'w-96'} min-h-screen flex flex-col 
        transition-all duration-500 ease-in-out
        ${theme.bg}
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header / Logo */}
        <div className={`p-6 flex items-center justify-between`}>
          <div className="flex items-center gap-3 px-2 overflow-hidden">
            <div className={`
              w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0
              bg-gradient-to-br from-[#1bd488] to-[#45828b]
            `}>
              <Box className="text-[#055b65]" size={24} />
            </div>
            <div className={`flex flex-col transition-all duration-500 whitespace-nowrap ${isCollapsed ? 'opacity-0 w-0 translate-x-10 overflow-hidden' : 'opacity-100 w-auto translate-x-0'}`}>
                <h1 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>
                  CRM Admin
                </h1>
                <p className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-[#1bd488]' : 'text-[#45828b]'}`}>
                  v2.0.0
                </p>
            </div>
          </div>

          {/* Collapse Toggle Button (Desktop Only) */}
          <button 
            onClick={toggleCollapse}
            className={`hidden md:flex p-2 rounded-lg transition-all duration-200 ${theme.hover} ${theme.text}`}
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
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <p className={`px-4 text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-[#45828b]' : 'text-[#b2c9c5]'} transition-all duration-500 ${isCollapsed ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'} ml-2`}>
            Main Menu
          </p>
          {menuItems.map((item, index) => {
            const badge = notificationCounts[item.path];
            return (
            <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `
                  w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'gap-4 px-4'} py-3.5 rounded-2xl 
                  transition-all duration-300 group relative overflow-hidden
                  ${isActive ? theme.active : `${theme.text} ${theme.hover}`}
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* Active Indicator Line (Left) */}
                    {isActive && (
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-[#055b65] ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} />
                    )}

                    <div className="relative flex items-center justify-center">
                      <item.icon 
                        size={22} 
                        className={`
                          transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 z-10 shrink-0
                          ${isActive ? theme.iconActive : theme.iconInactive}
                        `} 
                      />
                      {isCollapsed && badge && (
                        <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 ${isDarkMode ? 'border-[#055b65] bg-[#1bd488]' : 'border-white bg-red-500'}`} />
                      )}
                    </div>

                    <span className={`font-bold relative z-10 transition-all duration-500 whitespace-nowrap ${isCollapsed ? 'opacity-0 w-0 translate-x-10 overflow-hidden' : 'opacity-100 w-auto translate-x-0'} ${isActive ? 'translate-x-1' : ''}`}>
                      {item.label}
                    </span>

                    {!isCollapsed && badge && (
                      <span className={`ml-auto relative z-10 px-2 py-0.5 text-[10px] font-bold rounded-full transition-all duration-500 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'} ${
                        isActive 
                          ? 'bg-[#055b65]/10 text-[#055b65]' 
                          : isDarkMode 
                            ? 'bg-[#1bd488] text-[#055b65]' 
                            : 'bg-[#055b65] text-white'
                      }`}>
                        {badge}
                      </span>
                    )}
                    
                    {!isActive && (
                      <div className={`
                        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        bg-gradient-to-r from-transparent via-white/5 to-transparent
                      `} />
                    )}

                    {isCollapsed && (
                      <div className={`
                        absolute left-full ml-4 px-3 py-2 rounded-xl text-sm font-bold shadow-2xl
                        opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0
                        pointer-events-none z-50 whitespace-nowrap border backdrop-blur-md
                        ${theme.tooltip}
                      `}>
                        {item.label}
                        <div className={`absolute top-1/2 -left-1.5 w-3 h-3 -mt-1.5 rotate-45 border-l border-b ${theme.tooltip} border-r-0 border-t-0 bg-inherit`}></div>
                      </div>
                    )}
                  </>
                )}
            </NavLink>
          );
          })}
        </div>

        {/* Custom Role Switcher */}
        <div className="px-4 mb-4" ref={roleMenuRef}>
          {isCollapsed ? (
            // Collapsed State: Icon Trigger
            <div className="relative group flex justify-center">
              <button 
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className={`p-3 rounded-xl transition-all duration-300 ${isRoleMenuOpen ? 'bg-[#1bd488] text-[#055b65] shadow-lg shadow-[#1bd488]/30' : `${theme.hover} ${theme.text}`}`}
              >
                <ShieldCheck size={24} />
              </button>
              
              {/* Floating Menu for Collapsed State */}
              {isRoleMenuOpen && (
                <div className={`
                  absolute left-full bottom-0 ml-4 w-48 rounded-xl shadow-2xl border p-1 z-50
                  animate-in fade-in zoom-in-95 duration-200 
                  ${isDarkMode ? 'bg-[#055b65] border-[#45828b]/50' : 'bg-white border-[#e0e5e9]'}
                `}>
                  <div className={`px-3 py-2 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>
                    Switch Role
                  </div>
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => { setUserRole(role); setIsRoleMenuOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${userRole === role 
                          ? (isDarkMode ? 'bg-[#1bd488] text-[#055b65]' : 'bg-[#e0e5e9] text-[#055b65]') 
                          : (isDarkMode ? 'text-[#fbfcfc] hover:bg-[#45828b]/30' : 'text-[#45828b] hover:bg-[#e0e5e9]/60')}
                      `}
                    >
                      {role}
                      {userRole === role && <Check size={14} />}
                    </button>
                  ))}
                  {/* Arrow */}
                  <div className={`absolute bottom-4 -left-1 w-2 h-2 rotate-45 border-l border-b ${isDarkMode ? 'bg-[#055b65] border-[#45828b]/50' : 'bg-white border-[#e0e5e9]'} border-r-0 border-t-0`}></div>
                </div>
              )}
            </div>
          ) : (
            // Expanded State: Full Card
            <div className={`relative p-1 rounded-2xl border transition-all duration-300 ${isRoleMenuOpen ? 'ring-2 ring-[#1bd488]/50 border-[#1bd488]' : isDarkMode ? 'bg-[#45828b]/20 border-[#45828b]/30' : 'bg-[#e0e5e9]/60 border-[#e0e5e9]'}`}>
              <button 
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className="w-full flex items-center justify-between p-2 rounded-lg"
              >
                <div className="text-left overflow-hidden">
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>
                    View As
                  </p>
                  <p className={`text-sm font-bold truncate ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>
                    {userRole}
                  </p>
                </div>
                <div className={`p-1.5 rounded-lg transition-transform duration-200 ${isRoleMenuOpen ? 'rotate-180 bg-[#1bd488] text-[#055b65]' : isDarkMode ? 'bg-[#45828b] text-[#fbfcfc]' : 'bg-[#b2c9c5] text-[#055b65]'}`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isRoleMenuOpen && (
                <div className={`
                  absolute bottom-full left-0 right-0 mb-2 rounded-xl shadow-xl border p-1 z-50
                  animate-in fade-in slide-in-from-bottom-2 duration-200 
                  ${isDarkMode ? 'bg-[#055b65] border-[#45828b]/50' : 'bg-white border-[#e0e5e9]'}
                `}>
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => { setUserRole(role); setIsRoleMenuOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5
                        ${userRole === role 
                          ? (isDarkMode ? 'bg-[#1bd488] text-[#055b65]' : 'bg-[#e0e5e9] text-[#055b65]') 
                          : (isDarkMode ? 'text-[#fbfcfc] hover:bg-[#45828b]/30' : 'text-[#45828b] hover:bg-[#e0e5e9]/60')}
                      `}
                    >
                      {role}
                      {userRole === role && <Check size={16} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer / User Profile */}
        <div className={`p-4 border-t ${isDarkMode ? 'border-[#45828b]/20' : 'border-[#e0e5e9]'}`}>
          <div className={`
            flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-3 rounded-2xl
            transition-all duration-300
            ${isDarkMode ? 'bg-[#45828b]/20 hover:bg-[#45828b]/40' : 'bg-[#e0e5e9]/60 hover:bg-[#e0e5e9]'}
          `}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1bd488] to-[#45828b] flex items-center justify-center text-[#055b65] font-bold shadow-md shrink-0">
              {userRole.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div className={`flex-1 min-w-0 transition-all duration-500 ${isCollapsed ? 'opacity-0 w-0 translate-x-10 overflow-hidden' : 'opacity-100 w-auto translate-x-0'}`}>
                <p className={`text-sm font-bold truncate ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>{userRole}</p>
                <p className={`text-xs truncate ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>admin@crm.com</p>
            </div>
            <button onClick={handleLogout} className={`p-1.5 rounded-lg transition-all duration-300 hover:bg-red-500/10 hover:text-red-500 ${theme.text} ${isCollapsed ? 'hidden' : 'block'}`}>
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>
      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={confirmLogout}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Sidebar;