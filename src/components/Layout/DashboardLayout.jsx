import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Default role for demo purposes. In a real app, this comes from your auth context/API
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || 'Super Admin');

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const bg = isDarkMode
    ? "bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900"
    : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50";

  return (
    <div className={`flex h-screen ${bg}`}>
      {/* Sidebar */}
      <Sidebar
        isDarkMode={isDarkMode}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        userRole={userRole}
        setUserRole={setUserRole}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">
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
