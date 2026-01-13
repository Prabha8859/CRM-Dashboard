import React from 'react';
import { Users, Briefcase, Shield, Lock, UserCheck, UserX } from 'lucide-react';

const SystemSummary = ({ isDarkMode }) => {
  const stats = [
    { title: 'Total Users', value: '12,345', icon: Users, gradient: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/50' },
    { title: 'Total Staff', value: '142', icon: Briefcase, gradient: 'from-purple-500 to-pink-500', glow: 'shadow-purple-500/50' },
    { title: 'Active Staff', value: '128', icon: UserCheck, gradient: 'from-green-500 to-emerald-500', glow: 'shadow-green-500/50' },
    { title: 'Inactive Staff', value: '14', icon: UserX, gradient: 'from-red-500 to-orange-500', glow: 'shadow-red-500/50' },
    { title: 'Roles', value: '8', icon: Shield, gradient: 'from-orange-500 to-yellow-500', glow: 'shadow-orange-500/50' },
    { title: 'Permissions', value: '64', icon: Lock, gradient: 'from-indigo-500 to-purple-500', glow: 'shadow-indigo-500/50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <div key={index} 
          className={`relative p-5 rounded-3xl backdrop-blur-sm transition-all duration-500 cursor-pointer group overflow-hidden
            ${isDarkMode ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50' : 'bg-white/80 border-2 border-gray-100'}`}
          style={{ animationDelay: `${index * 100}ms` }}>
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl bg-gradient-to-br ${stat.gradient}`} />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-2xl ${stat.glow} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
              <stat.icon size={28} className="text-white drop-shadow-lg" />
            </div>
            <div>
              <p className={`text-xs font-semibold mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                {stat.title}
              </p>
              <h3 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {stat.value}
              </h3>
            </div>
          </div>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-20 blur-sm`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemSummary;