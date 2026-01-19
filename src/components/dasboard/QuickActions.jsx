import React from 'react';
import { UserPlus, Shield, Gift, Package } from 'lucide-react';

const QuickActions = ({ isDarkMode }) => {
  const actions = [
    { label: 'Add Staff', icon: UserPlus },
    { label: 'Create Role', icon: Shield },
    { label: 'Add Offer', icon: Gift },
    { label: 'Create Package', icon: Package },
  ];

  return (
    <div>
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Quick Actions</h3>
      <div className="flex flex-wrap gap-4">
        {actions.map((action, idx) => (
          <button key={idx} className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${isDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white' : 'border-slate-200 hover:bg-white hover:shadow-md text-slate-600 hover:text-indigo-600 bg-slate-50'}`}>
            <action.icon size={18} />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
