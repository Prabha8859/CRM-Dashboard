import React, { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout';
// import Settings from '../../components/Settings.jsx';
import DashboardHome from '../../components/dasboard/DashboardHome';
// import Customers from '../../components/dasboard/Customers';


export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <DashboardLayout
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
      currentPage={currentPage}
      onNavigate={setCurrentPage}
    >
      {currentPage === 'Dashboard' ? (
        <DashboardHome isDarkMode={isDarkMode} />
      ) : null}
    </DashboardLayout>
  );
}
