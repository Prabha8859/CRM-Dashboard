import React, { useState } from 'react';
import { 
  Users, Shield, Layers, Briefcase, Activity, CheckCircle, Star, 
  Gift, Package, ClipboardCheck, Clock, UserPlus, FileText, 
  AlertTriangle, Plus, ArrowRight, TrendingUp, UserCheck, UserX,
  HeartPulse, Syringe, AlertCircle
} from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import { useDashboardData } from '../../pages/dashboard/useDashboardData';

const DashboardHome = ({ isDarkMode, userRole }) => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const { data, config, loading } = useDashboardData(userRole);

  // 1. System Overview Metrics
  const systemMetrics = [
    { 
      label: 'Total Users', 
      value: '12,345', 
      icon: Users, 
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-500/20',
      shadow: 'shadow-blue-200 dark:shadow-blue-900/20',
      border: 'border-blue-200 dark:border-blue-500/30',
      gradient: 'group-hover:from-blue-500/10 group-hover:to-transparent'
    },
    { 
      label: 'Total Staff', 
      value: '142', 
      icon: Briefcase, 
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-100 dark:bg-violet-500/20',
      shadow: 'shadow-violet-200 dark:shadow-violet-900/20',
      border: 'border-violet-200 dark:border-violet-500/30',
      gradient: 'group-hover:from-violet-500/10 group-hover:to-transparent'
    },
    { 
      label: 'Total Employees', 
      value: '89', 
      icon: UserCheck, 
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-500/20',
      shadow: 'shadow-emerald-200 dark:shadow-emerald-900/20',
      border: 'border-emerald-200 dark:border-emerald-500/30',
      gradient: 'group-hover:from-emerald-500/10 group-hover:to-transparent'
    },
    { 
      label: 'Total Teams', 
      value: '8', 
      icon: Layers, 
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-500/20',
      shadow: 'shadow-amber-200 dark:shadow-amber-900/20',
      border: 'border-amber-200 dark:border-amber-500/30',
      gradient: 'group-hover:from-amber-500/10 group-hover:to-transparent'
    },
    { 
      label: 'Active Offers', 
      value: '12', 
      icon: Gift, 
      color: 'text-pink-600 dark:text-pink-400',
      bg: 'bg-pink-100 dark:bg-pink-500/20',
      shadow: 'shadow-pink-200 dark:shadow-pink-900/20',
      border: 'border-pink-200 dark:border-pink-500/30',
      gradient: 'group-hover:from-pink-500/10 group-hover:to-transparent'
    },
    { 
      label: 'Health Packages', 
      value: '24', 
      icon: Package, 
      color: 'text-cyan-600 dark:text-cyan-400',
      bg: 'bg-cyan-100 dark:bg-cyan-500/20',
      shadow: 'shadow-cyan-200 dark:shadow-cyan-900/20',
      border: 'border-cyan-200 dark:border-cyan-500/30',
      gradient: 'group-hover:from-cyan-500/10 group-hover:to-transparent'
    },
  ];

  // 2. Health Overview (CRM Specific)
  const healthOverview = [
    { label: 'Total Health Tests', value: '1,204', sub: '+12% this month', icon: HeartPulse, color: 'text-rose-500' },
    { label: 'Tests Assigned Today', value: '45', sub: '12 pending', icon: Syringe, color: 'text-cyan-500' },
    { label: 'Packages Assigned', value: '18', sub: 'Active now', icon: Package, color: 'text-violet-500' },
    { label: 'Pending Assignments', value: '7', sub: 'Action required', icon: Clock, color: 'text-amber-500' },
  ];

  // 3. Team Data
  const teams = [
    { name: 'Cardiology', members: 12, active: 90 },
    { name: 'Neurology', members: 8, active: 85 },
    { name: 'General', members: 24, active: 95 },
    { name: 'Pediatrics', members: 10, active: 80 },
  ];

  // 4. Employee Stats
  const employeeStats = {
    active: 128,
    inactive: 14,
    onboarding: 5
  };

  // 5. Recent Activity
  const activities = [
    { text: 'Staff "Amit" added', time: '2 hrs ago', icon: UserPlus, color: 'bg-green-500' },
    { text: 'Package "Heart Care" assigned', time: '4 hrs ago', icon: Package, color: 'bg-blue-500' },
    { text: 'Offer "Summer Sale" created', time: '5 hrs ago', icon: Gift, color: 'bg-purple-500' },
    { text: 'Dr. Sarah updated status', time: '1 day ago', icon: Activity, color: 'bg-orange-500' },
  ];

  // 6. Alerts
  const alerts = [
    { text: '3 Offers expiring soon', type: 'warning' },
    { text: '5 Employees unassigned', type: 'critical' },
    { text: 'System maintenance scheduled', type: 'info' },
  ];

  // 7. Quick Actions
  const quickActions = [
    { label: 'Add Staff', icon: UserPlus },
    { label: 'Create Role', icon: Shield },
    { label: 'Add Offer', icon: Gift },
    { label: 'Create Package', icon: Package },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <DashboardHeader 
        title="Dashboard Overview"
        userRole={userRole}
        isDarkMode={isDarkMode}
        dateRange={dateRange}
        setDateRange={setDateRange}
      />

      {/* SECTION 1: System Overview (Metrics) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {systemMetrics.map((metric, index) => (
          <Card 
            key={index} 
            isDarkMode={isDarkMode} 
            className={`
              relative overflow-hidden transition-all duration-300 group cursor-pointer
              border-2 border-transparent ${metric.border}
              hover:shadow-xl hover:-translate-y-1
            `}
          >
            <div className="flex flex-col items-center justify-center text-center gap-3 py-2">
              <div className={`p-3.5 rounded-2xl ${metric.bg} ${metric.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <metric.icon size={26} />
              </div>
              <div>
                <h3 className={`text-2xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{metric.value}</h3>
                <p className={`text-[11px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{metric.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* SECTION 2: Health Overview */}
      <div>
        <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Health Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthOverview.map((item, index) => (
            <Card key={index} isDarkMode={isDarkMode} className="border-l-4 border-l-transparent hover:border-l-indigo-500 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-800 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.value}</p>
                  <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</p>
                </div>
              </div>
              <div className={`mt-3 text-xs font-medium ${item.color} bg-opacity-10 px-2 py-1 rounded inline-block`}>
                {item.sub}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* SECTION 3: Employee & Team Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Team Summary */}
        <Card isDarkMode={isDarkMode} className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Team Summary</h3>
            <button className="text-sm text-indigo-500 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className={`text-xs uppercase ${isDarkMode ? 'text-slate-400 bg-slate-800/50' : 'text-slate-500 bg-slate-50'}`}>
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Team Name</th>
                  <th className="px-4 py-3">Members</th>
                  <th className="px-4 py-3 rounded-r-lg">Active Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {teams.map((team, idx) => (
                  <tr key={idx}>
                    <td className={`px-4 py-3 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{team.name}</td>
                    <td className={`px-4 py-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{team.members}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${team.active}%` }}></div>
                        </div>
                        <span className={`text-xs font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{team.active}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Right: Employee Status */}
        <Card isDarkMode={isDarkMode}>
          <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Employee Status</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 text-white rounded-lg"><UserCheck size={18} /></div>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Active</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{employeeStats.active}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500 text-white rounded-lg"><UserX size={18} /></div>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Inactive</span>
              </div>
              <span className="text-2xl font-bold text-red-600">{employeeStats.inactive}</span>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 text-white rounded-lg"><Clock size={18} /></div>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Onboarding</span>
              </div>
              <span className="text-2xl font-bold text-amber-600">{employeeStats.onboarding}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* SECTION 4: Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Recent Activity</h3>
            <Activity size={20} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`mt-1 w-2 h-2 rounded-full ${activity.color}`}></div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{activity.text}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alerts */}
        <Card isDarkMode={isDarkMode}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>System Alerts</h3>
            <AlertTriangle size={20} className="text-amber-500" />
          </div>
          <div className="space-y-3">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border ${
                alert.type === 'critical' 
                  ? 'bg-red-500/10 border-red-500/20 text-red-600' 
                  : alert.type === 'warning'
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-600'
                  : 'bg-blue-500/10 border-blue-500/20 text-blue-600'
              }`}>
                <AlertCircle size={18} />
                <span className="text-sm font-medium">{alert.text}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* SECTION 5: Quick Actions */}
      <div>
        <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((action, idx) => (
            <button 
              key={idx}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                isDarkMode 
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white' 
                  : 'border-slate-200 hover:bg-white hover:shadow-md text-slate-600 hover:text-indigo-600 bg-slate-50'
              }`}
            >
              <action.icon size={18} />
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
