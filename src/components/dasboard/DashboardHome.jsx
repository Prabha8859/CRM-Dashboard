import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Award, Briefcase, CheckCircle, Star, Shield, Activity, Calendar, UserCheck, UserX, Layers, FileText } from 'lucide-react';
import MetricCard from './MetricCard';
import MetricCardSkeleton from './MetricCardSkeleton';
import QuickActions from './QuickActions';
import TrafficChart from './TrafficChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';
import { useDashboardData } from '../../pages/dashboard/useDashboardData';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';

// Helper component to render lists/tables
const DataSection = ({ title, data, isDarkMode }) => {
  if (!data || data.length === 0) return null;

  // Get headers from the first object keys
  const headers = Object.keys(data[0]);

  return (
    <Card isDarkMode={isDarkMode} className="h-full">
      <h3 className={`text-lg font-bold mb-4 capitalize ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        {title.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-semibold ${isDarkMode ? 'text-slate-400 bg-slate-800/50' : 'text-slate-500 bg-slate-50'}`}>
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-3">{header.replace(/([A-Z])/g, ' $1').trim()}</th>
              ))}
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
            {data.map((row, idx) => (
              <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'}`}>
                {headers.map((header) => (
                  <td key={header} className={`px-4 py-3 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

const DashboardHome = ({ isDarkMode, userRole }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const { data, config, loading } = useDashboardData(userRole);

  // Helper to map data keys to icons dynamically
  const getIcon = (key) => {
    const iconMap = {
      totalAdmins: Shield,
      totalStaff: Users,
      totalTeams: Layers,
      totalLeads: Briefcase,
      activeLeads: Activity,
      closedLeads: CheckCircle,
      myStaffCount: Users,
      myTeamCount: Layers,
      myTotalLeads: Briefcase,
      myActiveLeads: Activity,
      myClosedLeads: CheckCircle,
      myLeads: Briefcase,
      newLeads: Star,
      inProgressLeads: Activity,
      teamTotalLeads: Briefcase,
      teamActiveLeads: Activity,
      teamClosedLeads: CheckCircle,
      teamMembersCount: Users
    };
    return iconMap[key] || Users;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <DashboardHeader 
        title={config?.title || 'Dashboard'}
        userRole={userRole}
        isDarkMode={isDarkMode}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      {/* Top Metrics Row */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
           {[...Array(6)].map((_, i) => (
            <MetricCardSkeleton key={i} isDarkMode={isDarkMode} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {config?.stats.map((key) => {
            const statData = data?.[key];
            if (!statData) return null;
            return (
              <MetricCard 
                key={key}
                title={statData.label} 
                value={statData.value} 
                trend={statData.trend}
                icon={getIcon(key)}
                isDarkMode={isDarkMode}
              />
            );
          })}
        </div>
      )}

      {/* Quick Actions */}
      <QuickActions isDarkMode={isDarkMode} actions={config?.actions} />

      {/* Dynamic Sections (Tables/Lists) */}
      {!loading && config?.sections && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {config.sections.map((sectionKey) => (
            <DataSection 
              key={sectionKey} 
              title={sectionKey} 
              data={data?.[sectionKey]} 
              isDarkMode={isDarkMode} 
            />
          ))}
        </div>
      )}

      {/* Charts Section - Only show relevant charts based on role */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {userRole !== 'Staff' && <LineChart isDarkMode={isDarkMode} dateRange={dateRange} />}
        {userRole !== 'Staff' && <TrafficChart isDarkMode={isDarkMode} dateRange={dateRange} />}
        {userRole === 'Super Admin' && <BarChart isDarkMode={isDarkMode} dateRange={dateRange} />}
        {userRole === 'Super Admin' && <RadarChart isDarkMode={isDarkMode} dateRange={dateRange} />}
      </div>
    </div>
  );
};

export default DashboardHome;