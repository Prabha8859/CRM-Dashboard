
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userRole, setUserRole] = useState('Admin');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#022c33]' : 'bg-[#f0fdf4]'}`}>
      <Sidebar 
        isDarkMode={isDarkMode} 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          toggleSidebar={toggleSidebar}
          userRole={userRole}
        />

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className=" p-8 md:p-6 mx-auto max-w-8xl">
            <Outlet context={{ isDarkMode, userRole, setUserRole }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;