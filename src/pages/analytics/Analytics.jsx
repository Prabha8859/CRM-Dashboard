import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight, Activity, PieChart } from 'lucide-react';

const Analytics = () => {
  const { isDarkMode } = useOutletContext();
  const cardClass = isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";

  const stats = [
    { label: "Total Revenue", value: "$54,239", change: "+12.5%", trend: "up", icon: DollarSign, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Active Users", value: "2,543", change: "+8.2%", trend: "up", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Bounce Rate", value: "42.3%", change: "-2.1%", trend: "down", icon: Activity, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Total Visits", value: "45,231", change: "+5.4%", trend: "up", icon: BarChart3, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${textClass}`}>Analytics Dashboard</h2>
          <p className={`text-sm ${subTextClass}`}>Monitor your key performance metrics</p>
        </div>
        <div className="flex gap-2">
          <select className={`px-3 py-2 rounded-lg border text-sm outline-none focus:ring-2 focus:ring-blue-500/20 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${cardClass} shadow-sm transition-all hover:shadow-md`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${stat.trend === 'up' ? 'text-green-600 bg-green-500/10' : 'text-red-600 bg-red-500/10'}`}>
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${textClass}`}>{stat.value}</h3>
            <p className={`text-sm ${subTextClass}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-lg font-bold ${textClass}`}>Revenue Overview</h3>
            <button className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 ${subTextClass}`}>
              <TrendingUp size={18} />
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[40, 65, 45, 80, 55, 75, 50, 85, 60, 90, 70, 95].map((height, i) => (
              <div key={i} className="w-full bg-blue-500/10 rounded-t-md relative group cursor-pointer">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-md transition-all duration-500 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30"
                  style={{ height: `${height}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap transition-opacity">
                    ${height * 100}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`flex justify-between mt-4 text-xs font-medium ${subTextClass}`}>
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Traffic Sources Placeholder */}
        <div className={`p-6 rounded-2xl border ${cardClass} shadow-sm`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-lg font-bold ${textClass}`}>Traffic Sources</h3>
            <button className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 ${subTextClass}`}>
              <PieChart size={18} />
            </button>
          </div>
          <div className="space-y-6">
            {[
              { label: "Direct", value: "45%", count: "12,432", color: "bg-blue-500" },
              { label: "Social Media", value: "25%", count: "8,231", color: "bg-purple-500" },
              { label: "Referral", value: "20%", count: "6,123", color: "bg-green-500" },
              { label: "Organic Search", value: "10%", count: "3,412", color: "bg-orange-500" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex justify-between text-sm mb-2">
                  <span className={`font-medium ${textClass}`}>{item.label}</span>
                  <span className={subTextClass}>{item.count} ({item.value})</span>
                </div>
                <div className={`h-2.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                  <div 
                    className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out group-hover:opacity-80`} 
                    style={{ width: item.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;