import React from 'react';
import { UserPlus, Shield, FileText, Activity, Plus, Package } from 'lucide-react';

const QuickActions = ({ isDarkMode }) => {
  const actions = [
    { label: 'Add Staff', icon: UserPlus, gradient: 'from-blue-500 to-cyan-500', hover: 'hover:shadow-blue-500/50' },
    { label: 'Create Role', icon: Shield, gradient: 'from-purple-500 to-pink-500', hover: 'hover:shadow-purple-500/50' },
    { label: 'Assign Permission', icon: Activity, gradient: 'from-orange-500 to-red-500', hover: 'hover:shadow-orange-500/50' },
    { label: 'Create Insurance', icon: FileText, gradient: 'from-green-500 to-emerald-500', hover: 'hover:shadow-green-500/50' },
    { label: 'Add Health Test', icon: Plus, gradient: 'from-pink-500 to-rose-500', hover: 'hover:shadow-pink-500/50' },
    { label: 'Create Package', icon: Package, gradient: 'from-indigo-500 to-purple-500', hover: 'hover:shadow-indigo-500/50' },
  ];

  return (
    <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-sm
      ${isDarkMode ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50' : 'bg-white/80 border-2 border-gray-100'}`}>
      
      <div className="flex items-center justify-between mb-8">
        <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Quick Actions
        </h3>
        <div className={`px-4 py-2 rounded-full text-sm font-semibold ${isDarkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-600'}`}>
          {actions.length} Available
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {actions.map((action, index) => (
          <button key={index} 
            className={`group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl transition-all duration-500 
              ${isDarkMode ? 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800' : 'bg-gray-50 border-2 border-gray-100 hover:bg-white'}
              hover:scale-110 hover:-translate-y-2 hover:shadow-2xl ${action.hover}`}
            style={{ animationDelay: `${index * 50}ms` }}>
            
            {/* Glow Effect */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl bg-gradient-to-br ${action.gradient}`} />
            
            <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${action.gradient} shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
              <action.icon size={32} className="text-white drop-shadow-lg" />
            </div>
            
            <span className={`text-sm font-bold text-center ${isDarkMode ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'} transition-colors`}>
              {action.label}
            </span>
            
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100">
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.gradient} opacity-20 animate-ping`} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;