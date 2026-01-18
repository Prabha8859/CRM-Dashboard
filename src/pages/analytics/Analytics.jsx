import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Activity, BarChart2, PieChart } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';

const Analytics = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  // Mock Data
  const revenueData = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 61000 },
    { month: 'May', amount: 55000 },
    { month: 'Jun', amount: 67000 },
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  const testPopularity = [
    { name: 'Full Body Checkup', count: 450, percentage: 85 },
    { name: 'CBC', count: 320, percentage: 65 },
    { name: 'Thyroid Profile', count: 210, percentage: 45 },
    { name: 'Lipid Profile', count: 180, percentage: 35 },
    { name: 'Vitamin D', count: 150, percentage: 25 },
  ];

  const userGrowth = {
    total: 12543,
    newThisMonth: 450,
    growth: '+12.5%'
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader
        title="Analytics & Reports"
        subtitle="Detailed insights into revenue, users, and performance."
        userRole={userRole}
        isDarkMode={isDarkMode}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-500/10 text-green-600">
              <DollarSign size={24} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Revenue</p>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>$328,000</h3>
              <span className="text-xs text-green-500 font-medium">+8.2% vs last month</span>
            </div>
          </div>
        </Card>
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600">
              <Users size={24} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Users</p>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{userGrowth.total.toLocaleString()}</h3>
              <span className="text-xs text-blue-500 font-medium">+{userGrowth.newThisMonth} new this month</span>
            </div>
          </div>
        </Card>
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600">
              <Activity size={24} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Tests Conducted</p>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>1,890</h3>
              <span className="text-xs text-purple-500 font-medium">+15% vs last month</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Revenue Trend</h3>
            <BarChart2 size={20} className="text-slate-400" />
          </div>
          <div className="flex items-end justify-between h-64 gap-4 px-2">
            {revenueData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1 gap-2 group cursor-pointer">
                <div className="w-full flex flex-col justify-end h-full relative">
                   <div className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10`}>
                      ${data.amount.toLocaleString()}
                   </div>
                  <div
                    className="w-full bg-green-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-all"
                    style={{ height: `${(data.amount / maxRevenue) * 100}%` }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{data.month}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Test Popularity */}
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Popular Tests</h3>
            <PieChart size={20} className="text-slate-400" />
          </div>
          <div className="space-y-6">
            {testPopularity.map((test, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>{test.name}</span>
                  <span className={`font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{test.count}</span>
                </div>
                <div className={`h-2 w-full rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ width: `${test.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;