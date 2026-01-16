import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardHome from '../../components/dasboard/DashboardHome';


export default function Dashboard() {
  const { isDarkMode, userRole } = useOutletContext();
  
  return (
    <DashboardHome isDarkMode={isDarkMode} userRole={userRole} />
  );
}
