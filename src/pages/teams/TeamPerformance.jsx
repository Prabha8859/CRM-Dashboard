import React from 'react';
import { TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Card from '../../ui/Card';

const TeamPerformance = ({ isDarkMode }) => {
  // Mock Data
  const metrics = [
    { label: 'Tasks Completed', value: '1,240', trend: '+12%', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Pending Tasks', value: '45', trend: '-5%', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Productivity', value: '94%', trend: '+2%', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Avg Response', value: '2h 15m', trend: '-10m', icon: AlertCircle, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const weeklyPerformance = [
    { day: 'Mon', completed: 45, pending: 5 },
    { day: 'Tue', completed: 52, pending: 8 },
    { day: 'Wed', completed: 48, pending: 4 },
    { day: 'Thu', completed: 60, pending: 2 },
    { day: 'Fri', completed: 55, pending: 6 },
    { day: 'Sat', completed: 30, pending: 1 },
    { day: 'Sun', completed: 20, pending: 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} isDarkMode={isDarkMode} className="hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${metric.bg} ${metric.color}`}>
                <metric.icon size={20} />
              </div>
              <span className={`text-xs font-bold ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.trend}
              </span>
            </div>
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{metric.value}</h3>
            <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{metric.label}</p>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Performance Chart (Simulated with CSS) */}
        <Card isDarkMode={isDarkMode}>
          <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Weekly Performance</h3>
          <div className="flex items-end justify-between h-64 gap-2">
            {weeklyPerformance.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1 gap-2 group cursor-pointer">
                <div className="w-full flex flex-col justify-end gap-1 h-full relative">
                   {/* Tooltip */}
                   <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10`}>
                      {data.completed} Tasks
                   </div>
                  <div 
                    className="w-full bg-blue-500 rounded-t-md opacity-80 group-hover:opacity-100 transition-all"
                    style={{ height: `${(data.completed / 60) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-amber-500 rounded-b-md opacity-80 group-hover:opacity-100 transition-all"
                    style={{ height: `${(data.pending / 60) * 100}%` }}
                  ></div>
                </div>
                <span className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{data.day}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Pending</span>
            </div>
          </div>
        </Card>

        {/* Team Comparison (Simulated) */}
        <Card isDarkMode={isDarkMode}>
          <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Team Comparison</h3>
          <div className="space-y-6">
            {['Sales', 'Support', 'Marketing', 'Dev'].map((team, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>{team}</span>
                  <span className={`font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{85 - i * 5}%</span>
                </div>
                <div className={`h-2 w-full rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" 
                    style={{ width: `${85 - i * 5}%` }}
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

export default TeamPerformance;