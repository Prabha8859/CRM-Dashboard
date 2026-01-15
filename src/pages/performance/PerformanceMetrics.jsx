
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { TrendingUp, Clock, CheckCircle, AlertTriangle, BarChart2 } from 'lucide-react';

const PerformanceMetrics = () => {
  const { isDarkMode } = useOutletContext();

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    barBg: isDarkMode ? "bg-slate-800" : "bg-slate-100",
  };
  const stats = [
    { label: 'Overall Efficiency', value: '92%', trend: '+4.5%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Tasks Completed', value: '1,248', trend: '+12%', icon: CheckCircle, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Avg. Response Time', value: '1h 15m', trend: '-8%', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { label: 'Overdue Tasks', value: '14', trend: '-2', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  const teamPerformance = [
    { name: 'Sales Team', score: 95, completed: 450, active: 12 },
    { name: 'Support Team', score: 88, completed: 320, active: 45 },
    { name: 'Tech Team', score: 92, completed: 210, active: 8 },
    { name: 'Marketing', score: 85, completed: 180, active: 15 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div>
        <h1 className={`text-2xl font-bold ${theme.text}`}>Performance Metrics</h1>
        <p className={`text-sm ${theme.subText}`}>Real-time insights into team productivity and efficiency.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${theme.card} shadow-sm`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {stat.trend}
              </span>
            </div>
            <h3 className={`text-2xl font-bold ${theme.text}`}>{stat.value}</h3>
            <p className={`text-sm ${theme.subText}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Section (Mocked Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Performance List */}
        <div className={`p-6 rounded-2xl border ${theme.card} shadow-sm`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${theme.text}`}>Team Performance</h3>
            <button className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ${theme.subText}`}>
              <BarChart2 size={20} />
            </button>
          </div>
          <div className="space-y-6">
            {teamPerformance.map((team, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className={`font-medium ${theme.text}`}>{team.name}</span>
                  <span className={`font-bold ${theme.text}`}>{team.score}%</span>
                </div>
                <div className={`w-full h-2.5 rounded-full ${theme.barBg} overflow-hidden`}>
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
                    style={{ width: `${team.score}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className={theme.subText}>{team.completed} Tasks Completed</span>
                  <span className={theme.subText}>{team.active} Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Chart Placeholder */}
        <div className={`p-6 rounded-2xl border ${theme.card} shadow-sm flex flex-col`}>
          <h3 className={`text-lg font-bold mb-6 ${theme.text}`}>Weekly Activity</h3>
          <div className="flex-1 flex items-end justify-between gap-2 px-2">
            {[65, 45, 75, 55, 85, 60, 70].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-blue-500/20 rounded-t-lg relative group-hover:bg-blue-500/40 transition-colors"
                  style={{ height: `${height}%` }}
                >
                   <div 
                    className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-lg transition-all duration-500"
                    style={{ height: `${height * 0.6}%` }}
                   />
                </div>
                <span className={`text-xs font-medium ${theme.subText}`}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerformanceMetrics;
