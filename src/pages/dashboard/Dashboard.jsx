import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardHome from '../../components/dasboard/DashboardHome';

const Dashboard = () => {
  const { isDarkMode, userRole } = useOutletContext();
  return <DashboardHome isDarkMode={isDarkMode} userRole={userRole} />;
};

export default Dashboard;
