import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardHome from '../../components/dasboard/DashboardHome';


export default function Dashboard() {
  const { isDarkMode } = useOutletContext();
  
  return (
    <DashboardHome isDarkMode={isDarkMode} />
  );
}
