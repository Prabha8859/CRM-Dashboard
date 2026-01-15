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

const Sidebar = ({ isDarkMode, isOpen, toggleSidebar, userRole, setUserRole }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRoleMenuOpen, setIsRoleMenuOpen] = useState(false);
  const roleMenuRef = useRef(null);

  // Enhanced Theme Configuration
  const theme = {
    bg: isDarkMode 
      ? "bg-slate-900/95 backdrop-blur-2xl border-r border-white/5" 
      : "bg-white/90 backdrop-blur-2xl border-r border-slate-200",
    text: isDarkMode ? "text-slate-400" : "text-slate-500",
    textActive: isDarkMode ? "text-white" : "text-blue-600",
    hover: isDarkMode ? "hover:bg-white/5 hover:text-slate-200" : "hover:bg-blue-50 hover:text-blue-600",
    active: isDarkMode 
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20" 
      : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-sm border border-blue-100",
    iconActive: isDarkMode ? "text-white" : "text-blue-600",
    iconInactive: isDarkMode ? "text-slate-500 group-hover:text-blue-500" : "text-slate-400 group-hover:text-blue-600",
    tooltip: isDarkMode ? "bg-slate-800 text-white border-slate-700" : "bg-slate-900 text-white border-slate-800"
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
        ${isCollapsed ? 'w-20' : 'w-80'} min-h-screen flex flex-col 
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
          {menuItems.map((item, index) => (
            <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `
                  w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'gap-3 px-4'} py-3.5 rounded-xl 
                  transition-all duration-200 group relative overflow-hidden
                  ${isActive ? theme.active : `${theme.text} ${theme.hover}`}
                `}
              >
                {({ isActive }) => (
                  <>
                    <item.icon 
                      size={22} 
                      className={`
                        transition-colors duration-200
                        ${isActive ? theme.iconActive : theme.iconInactive}
                      `} 
                    />
                    {!isCollapsed && <span className="font-medium relative z-10 animate-in fade-in duration-200">{item.label}</span>}
                    
                    {!isActive && (
                      <div className={`
                        absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      `} />
                    )}

                    {isCollapsed && (
                      <div className={`
                        absolute left-full ml-4 px-3 py-1.5 rounded-lg text-sm font-medium shadow-xl
                        opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0
                        pointer-events-none z-50 whitespace-nowrap border
                        ${theme.tooltip}
                      `}>
                        {item.label}
                        <div className={`absolute top-1/2 -left-1 w-2 h-2 -mt-1 rotate-45 border-l border-b ${theme.tooltip} border-r-0 border-t-0 bg-inherit`}></div>
                      </div>
                    )}
                  </>
                )}
            </NavLink>
          ))}
        </div>

        {/* Custom Role Switcher */}
        <div className="px-4 mb-4" ref={roleMenuRef}>
          {isCollapsed ? (
            // Collapsed State: Icon Trigger
            <div className="relative group flex justify-center">
              <button 
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className={`p-3 rounded-xl transition-all duration-200 ${isRoleMenuOpen ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : `${theme.hover} ${theme.text}`}`}
              >
                <ShieldCheck size={24} />
              </button>
              
              {/* Floating Menu for Collapsed State */}
              {isRoleMenuOpen && (
                <div className={`
                  absolute left-full bottom-0 ml-4 w-48 rounded-xl shadow-2xl border p-1 z-50
                  animate-in fade-in zoom-in-95 duration-200
                  ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}
                `}>
                  <div className={`px-3 py-2 text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    Switch Role
                  </div>
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => { setUserRole(role); setIsRoleMenuOpen(false); }}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                        ${userRole === role 
                          ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600') 
                          : (isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50')}
                      `}
                    >
                      {role}
                      {userRole === role && <Check size={14} />}
                    </button>
                  ))}
                  {/* Arrow */}
                  <div className={`absolute bottom-4 -left-1 w-2 h-2 rotate-45 border-l border-b ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} border-r-0 border-t-0`}></div>
                </div>
              )}
            </div>
          ) : (
            // Expanded State: Full Card
            <div className={`relative p-1 rounded-xl border transition-all duration-200 ${isRoleMenuOpen ? 'ring-2 ring-blue-500/50 border-blue-500' : isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <button 
                onClick={() => setIsRoleMenuOpen(!isRoleMenuOpen)}
                className="w-full flex items-center justify-between p-2 rounded-lg"
              >
                <div className="text-left">
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    View As
                  </p>
                  <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {userRole}
                  </p>
                </div>
                <div className={`p-1.5 rounded-lg transition-transform duration-200 ${isRoleMenuOpen ? 'rotate-180 bg-slate-700 text-white' : isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-600'}`}>
                  <ChevronDown size={14} />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isRoleMenuOpen && (
                <div className={`
                  absolute bottom-full left-0 right-0 mb-2 rounded-xl shadow-xl border p-1 z-50
                  animate-in fade-in slide-in-from-bottom-2 duration-200
                  ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}
                `}>
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => { setUserRole(role); setIsRoleMenuOpen(false); }}
                      className={`
                        w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5
                        ${userRole === role 
                          ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600') 
                          : (isDarkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50')}
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
        <div className={`p-4 border-t ${isDarkMode ? 'border-white/5' : 'border-slate-200'}`}>
          <div className={`
            flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} p-3 rounded-xl
            transition-all duration-200
            ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-50 hover:bg-slate-100'}
          `}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md shrink-0">
              {userRole.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0 animate-in fade-in duration-200">
                <p className={`text-sm font-bold truncate ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{userRole}</p>
                <p className={`text-xs truncate ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>admin@crm.com</p>
              </div>
            )}
            {!isCollapsed && (
              <button onClick={handleLogout} className={`p-1.5 rounded-lg transition-colors hover:bg-red-500/10 hover:text-red-500 ${theme.text}`}>
                <LogOut size={18} />
              </button>
            )}
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