import React from 'react';
import { Users, Briefcase, UserCheck, Layers, Gift, Package } from 'lucide-react';
import Card from '../../ui/Card';

const SystemMetrics = ({ isDarkMode, data }) => {
  // Default metrics structure, we will map 'data' to this if available
  const defaultMetrics = [
    { key: 'totalUsers', label: 'Total Users', value: '0', icon: Users, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-500/20', shadow: 'shadow-blue-200 dark:shadow-blue-900/20', border: 'border-blue-200 dark:border-blue-500/30', gradient: 'group-hover:from-blue-500/10 group-hover:to-transparent' },
    { key: 'totalStaff', label: 'Total Staff', value: '0', icon: Briefcase, color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-100 dark:bg-violet-500/20', shadow: 'shadow-violet-200 dark:shadow-violet-900/20', border: 'border-violet-200 dark:border-violet-500/30', gradient: 'group-hover:from-violet-500/10 group-hover:to-transparent' },
    { key: 'totalEmployees', label: 'Total Employees', value: '0', icon: UserCheck, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-500/20', shadow: 'shadow-emerald-200 dark:shadow-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-500/30', gradient: 'group-hover:from-emerald-500/10 group-hover:to-transparent' },
    { key: 'totalTeams', label: 'Total Teams', value: '0', icon: Layers, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-500/20', shadow: 'shadow-amber-200 dark:shadow-amber-900/20', border: 'border-amber-200 dark:border-amber-500/30', gradient: 'group-hover:from-amber-500/10 group-hover:to-transparent' },
    { key: 'activeOffers', label: 'Active Offers', value: '0', icon: Gift, color: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-100 dark:bg-pink-500/20', shadow: 'shadow-pink-200 dark:shadow-pink-900/20', border: 'border-pink-200 dark:border-pink-500/30', gradient: 'group-hover:from-pink-500/10 group-hover:to-transparent' },
    { key: 'healthPackages', label: 'Health Packages', value: '0', icon: Package, color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-100 dark:bg-cyan-500/20', shadow: 'shadow-cyan-200 dark:shadow-cyan-900/20', border: 'border-cyan-200 dark:border-cyan-500/30', gradient: 'group-hover:from-cyan-500/10 group-hover:to-transparent' },
  ];

  // Map incoming data to metrics if available
  const metrics = defaultMetrics.map(metric => {
    // Check if data has a matching key (e.g., data.totalStaff.value)
    // The mock service returns objects like { value: '142', trend: 5, label: 'Total Staff' }
    // We need to map keys from dashboard.service.js to our UI keys if they differ, 
    // or just use what's available. 
    // For simplicity, let's assume 'data' might contain these keys directly or we map them.
    
    // Mapping specific keys from dashboard.service.js to our UI components
    let value = metric.value;
    
    if (data) {
        if (metric.key === 'totalUsers' && data.totalLeads) value = data.totalLeads.value; // Example mapping
        if (metric.key === 'totalStaff' && data.totalStaff) value = data.totalStaff.value;
        if (metric.key === 'totalTeams' && data.totalTeams) value = data.totalTeams.value;
        // Add more mappings as needed based on the actual data structure from service
    }

    return { ...metric, value };
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
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
  );
};
export default SystemMetrics;
