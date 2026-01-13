import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({
  isDarkMode,
  toggleTheme,
  currentPage,
  onNavigate,
  children
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        currentPage={currentPage}
        onNavigate={onNavigate}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
        />

        <main className="flex-1 overflow-y-auto px-6 md:px-4 lg:px-8 p">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
