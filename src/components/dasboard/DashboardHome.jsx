import React, { useState } from 'react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import { useDashboardData } from '../../pages/dashboard/useDashboardData';
import SystemMetrics from './SystemMetrics';
import HealthOverview from './HealthOverview';
import TeamSnapshot from './TeamSnapshot';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

const DashboardHome = ({ isDarkMode, userRole }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const { data, loading } = useDashboardData(userRole);

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading...</div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Dashboard Overview"
        userRole={userRole}
        isDarkMode={isDarkMode}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      <SystemMetrics isDarkMode={isDarkMode} data={data} />
      <HealthOverview isDarkMode={isDarkMode} data={data} />
      <TeamSnapshot isDarkMode={isDarkMode} data={data} />
      <RecentActivity isDarkMode={isDarkMode} data={data} />
      <QuickActions isDarkMode={isDarkMode} />
    </div>
  );
};

export default DashboardHome;
