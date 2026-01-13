import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, Award, Calendar } from 'lucide-react';
import MetricCard from './MetricCard';
import SystemSummary from './SystemSummary';
// import QuickActions from './QuickActions';
import TrafficChart from './TrafficChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import RadarChart from './RadarChart';

const DashboardHome = ({ isDarkMode }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className={`text-5xl font-black mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Analytics Dashboard
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-purple-300' : 'text-gray-600'}`}>
            Real-time business metrics and insights • Updated just now
          </p>
        </div>

        {/* Date Range Picker */}
        <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-colors ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white border-gray-200 shadow-sm hover:border-purple-200'}`}>
          <Calendar size={20} className={isDarkMode ? 'text-purple-300' : 'text-gray-500'} />
          <input 
            type="date" 
            className={`bg-transparent outline-none text-sm font-medium ${isDarkMode ? 'text-white [&::-webkit-calendar-picker-indicator]:invert' : 'text-gray-700'}`}
            value={dateRange.start}
            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
          />
          <span className={isDarkMode ? 'text-purple-300' : 'text-gray-400'}>to</span>
          <input 
            type="date" 
            className={`bg-transparent outline-none text-sm font-medium ${isDarkMode ? 'text-white [&::-webkit-calendar-picker-indicator]:invert' : 'text-gray-700'}`}
            value={dateRange.end}
            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
          />
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Subscribers" 
          value="2,280" 
          trend={12}
          icon={Users}
          isDarkMode={isDarkMode}
        />
        <MetricCard 
          title="Revenue" 
          value="$236.8K" 
          subtitle="Monthly Target" 
          progress={100}
          icon={DollarSign}
          isDarkMode={isDarkMode}
        />
        <MetricCard 
          title="Active Leads" 
          value="4,529" 
          trend={8}
          icon={TrendingUp}
          isDarkMode={isDarkMode}
        />
        <MetricCard 
          title="Closed Deals" 
          value="2,898" 
          subtitle="Conversion Rate" 
          progress={64}
          icon={Award}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* System Summary */}
      <SystemSummary isDarkMode={isDarkMode} />

      {/* Quick Actions */}
      {/* <QuickActions isDarkMode={isDarkMode} /> */}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart isDarkMode={isDarkMode} dateRange={dateRange} />
        <TrafficChart isDarkMode={isDarkMode} dateRange={dateRange} />
      </div>

      {/* Bottom Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChart isDarkMode={isDarkMode} dateRange={dateRange} />
        <RadarChart isDarkMode={isDarkMode} dateRange={dateRange} />
      </div>
    </div>
  );
};

export default DashboardHome;