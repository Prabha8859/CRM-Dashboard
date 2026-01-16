import React from 'react';
import Card from '../ui/Card';
import { ArrowRight } from 'lucide-react';

const ActionCard = ({ action, isDarkMode, onClick }) => {
  return (
    <Card 
      isDarkMode={isDarkMode} 
      className="flex flex-col items-center justify-center gap-4 p-6 relative overflow-hidden"
      onClick={onClick}
    >
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${action.gradient} opacity-5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:scale-150 group-hover:opacity-10`} />

      {/* Icon Container */}
      <div className={`p-4 rounded-2xl bg-gradient-to-br ${action.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
        <action.icon size={28} className="text-white" />
      </div>
      
      {/* Label & Action */}
      <div className="text-center z-10">
        <span className={`block text-sm font-bold mb-1 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
          {action.label}
        </span>
        <div className={`h-1 w-8 mx-auto rounded-full bg-gradient-to-r ${action.gradient} opacity-30 group-hover:w-16 group-hover:opacity-100 transition-all duration-300`} />
      </div>
    </Card>
  );
};

export default ActionCard;