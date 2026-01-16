import React from 'react';
import { Users, Briefcase, Shield, Lock, UserCheck, UserX } from 'lucide-react';

const SystemSummary = ({ isDarkMode }) => {
  const stats = [
    { title: 'Total Users', value: '12,345', icon: Users, gradient: 'from-[#1bd488] to-[#45828b]', glow: 'shadow-[#1bd488]/50' },
    { title: 'Total Staff', value: '142', icon: Briefcase, gradient: 'from-[#45828b] to-[#055b65]', glow: 'shadow-[#45828b]/50' },
    { title: 'Active Staff', value: '128', icon: UserCheck, gradient: 'from-[#1bd488] to-[#b2c9c5]', glow: 'shadow-[#1bd488]/50' },
    { title: 'Inactive Staff', value: '14', icon: UserX, gradient: 'from-red-500 to-orange-500', glow: 'shadow-red-500/50' }, // Keep red for warning
    { title: 'Roles', value: '8', icon: Shield, gradient: 'from-[#055b65] to-[#45828b]', glow: 'shadow-[#055b65]/50' },
    { title: 'Permissions', value: '64', icon: Lock, gradient: 'from-[#b2c9c5] to-[#45828b]', glow: 'shadow-[#b2c9c5]/50' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat, index) => (
        <div key={index} 
          className={`relative p-5 rounded-3xl backdrop-blur-sm transition-all duration-500 cursor-pointer group overflow-hidden 
            ${isDarkMode ? 'bg-gradient-to-br from-[#055b65]/80 to-[#45828b]/80 border border-[#b2c9c5]/20' : 'bg-[#fbfcfc]/80 border-2 border-[#e0e5e9]'}`}
          style={{ animationDelay: `${index * 100}ms` }}>
          
          {/* Glow Effect */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl bg-gradient-to-br ${stat.gradient}`} />
          
          <div className="relative z-10 flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-2xl ${stat.glow} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
              <stat.icon size={28} className="text-white drop-shadow-lg" />
            </div>
            <div>
              <p className={`text-xs font-semibold mb-1 ${isDarkMode ? 'text-[#b2c9c5]' : 'text-[#45828b]'}`}>
                {stat.title}
              </p>
              <h3 className={`text-3xl font-black ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>
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