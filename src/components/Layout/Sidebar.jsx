import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserCog, 
  Shield, 
  Users, 
  Stethoscope, 
  ShieldCheck, 
  Gift, 
  TestTube, 
  Package, 
  ChevronDown, 
  ChevronRight, 
  X, 
  Box, 
  ChevronLeft, 
  LogOut,
  ClipboardList
} from 'lucide-react';
import LogoutModal from './Modals/LogoutModal';

const Sidebar = ({ isDarkMode, isOpen, toggleSidebar, isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedMenus, setExpandedMenus] = useState({});
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const toggleSubmenu = (title) => {
    if (isCollapsed) setIsCollapsed(false);
    setExpandedMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    setIsLogoutModalOpen(false);
    navigate('/login');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      // submenu: [
      //   { title: 'Overview', path: '/dashboard' },
      //   { title: 'Stats', path: '/stats' }
      // ]
    },
    {
      title: 'Staff Management',
      icon: UserCog,
      path: '/staff'
    },
    {
      title: 'Roles & Permissions',
      icon: Shield,
      path: '/roles',
      submenu: [
        { title: 'Roles List', path: '/roles/list' },
        { title: 'Create Role', path: '/roles/create' },
        { title: 'Permission Assign', path: '/roles/permissions' }
      ]
    },
    {
      title: 'Teams',
      icon: Users,
      path: '/teams',
      submenu: [
        { title: 'Team List', path: '/teams/list' },
        { title: 'Team Details', path: '/teams/details' }
      ]
    },
    {
      title: 'Employees',
      icon: Stethoscope,
      path: '/employees',
      submenu: [
        { title: 'Employee List', path: '/employees/list' }
      ]
    },
    {
      title: 'Assignments',
      icon: ClipboardList,
      path: '/assignments'
    },
    {
      title: 'Insurance',
      icon: ShieldCheck,
      path: '/insurance',
      submenu: [
        { title: 'Insurance List', path: '/insurance/list' },
        { title: 'Assign Insurance', path: '/insurance/assign' }
      ]
    },
    {
      title: 'Offers',
      icon: Gift,
      path: '/offers',
      submenu: [
        { title: 'Offers List', path: '/offers/list' },
        { title: 'Assigned Offers', path: '/offers/assigned' }
      ]
    },
    {
      title: 'Health Tests',
      icon: TestTube,
      path: '/health-tests',
      submenu: [
        { title: 'Test List', path: '/health-tests/list' },
        { title: 'Assign Test', path: '/health-tests/assign' }
      ]
    },
    {
      title: 'Health Packages',
      icon: Package,
      path: '/health-packages',
      submenu: [
        { title: 'Package List', path: '/health-packages/list' },
        { title: 'Add / Remove Tests', path: '/health-packages/manage' },
        { title: 'Assign Package', path: '/health-packages/assign' }
      ]
    }
  ];

  // Theme Configuration
  const theme = {
    bg: isDarkMode 
      ? "bg-[#055b65] border-r border-[#45828b]/20" 
      : "bg-[#fbfcfc] border-r border-[#e0e5e9]",
    text: isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]",
    hover: isDarkMode ? "hover:bg-[#45828b]/20 hover:text-[#fbfcfc]" : "hover:bg-[#e0e5e9] hover:text-[#055b65]",
    active: isDarkMode 
      ? "bg-[#1bd488]/10 text-[#1bd488]" 
      : "bg-[#055b65]/10 text-[#055b65]",
    submenuText: isDarkMode ? "text-[#b2c9c5]/80" : "text-[#45828b]/80",
    submenuHover: isDarkMode ? "hover:text-[#fbfcfc]" : "hover:text-[#055b65]",
    submenuActive: isDarkMode ? "text-[#1bd488] font-medium" : "text-[#055b65] font-medium"
  };

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
        overflow-y-auto custom-scrollbar
      `}>
        {/* Header / Logo */}
        <div className="p-6 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3 px-1 overflow-hidden">
            <div className={`
              w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shrink-0
              bg-gradient-to-br from-[#1bd488] to-[#45828b]
            `}>
              <Box className="text-[#055b65]" size={20} />
            </div>
            <div className={`flex flex-col transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}`}>
                <h1 className={`text-lg font-black tracking-tight ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>
                  CRM Admin
                </h1>
            </div>
          </div>

          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`hidden md:flex p-1.5 rounded-lg transition-all duration-200 ${theme.hover} ${theme.text}`}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <button 
            onClick={toggleSidebar} 
            className={`md:hidden p-1.5 rounded-lg transition-colors ${theme.hover}`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);
            const isExpanded = expandedMenus[item.title];
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <div key={index} className="mb-1">
                {hasSubmenu ? (
                  <div
                    onClick={() => toggleSubmenu(item.title)}
                    className={`
                      w-full flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer
                      transition-all duration-200 group
                      ${isActive && !isExpanded ? theme.active : `${theme.text} ${theme.hover}`}
                    `}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <item.icon size={20} className="shrink-0" />
                      <span className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                        {item.title}
                      </span>
                    </div>
                    {!isCollapsed && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''} opacity-50`} 
                      />
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive: isLinkActive }) => `
                      w-full flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer
                      transition-all duration-200 group
                      ${isLinkActive ? theme.active : `${theme.text} ${theme.hover}`}
                    `}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <item.icon size={20} className="shrink-0" />
                      <span className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                )}

                {/* Submenu */}
                {hasSubmenu && (
                  <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isExpanded && !isCollapsed ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}
                `}>
                  <div className="ml-4 pl-4 border-l border-gray-200/10 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) => `
                          block py-2 px-3 text-sm rounded-lg transition-colors
                          ${isActive ? theme.submenuActive : `${theme.submenuText} ${theme.submenuHover}`}
                        `}
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t ${isDarkMode ? 'border-[#45828b]/20' : 'border-[#e0e5e9]'}`}>
          <button 
            onClick={handleLogout}
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-xl
              transition-all duration-200 hover:bg-red-500/10 hover:text-red-500
              ${theme.text}
            `}
          >
            <LogOut size={20} className="shrink-0" />
            <span className={`font-medium text-sm whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              Logout
            </span>
          </button>
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
