import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Default role for demo purposes. In a real app, this comes from your auth context/API
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'Super Admin');

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  // Auto-collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bg = isDarkMode
    ? "bg-[#055b65]"
    : "bg-[#fbfcfc]";

  return (
    <div className={`flex h-screen ${bg}`}>
      {/* Sidebar */}
      <Sidebar
        isDarkMode={isDarkMode}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        userRole={userRole}
        setUserRole={setUserRole}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 transition-all duration-500 ease-in-out">
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
          userRole={userRole}
        />

        <main className="flex-1 overflow-y-auto px-6 md:px-4 lg:px-8 p-6">
          <Outlet context={{ isDarkMode, toggleTheme, userRole }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
