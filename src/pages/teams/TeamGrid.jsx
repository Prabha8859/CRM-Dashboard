import React from 'react';
import { Users, MoreHorizontal, Target, TrendingUp } from 'lucide-react';
import Badge from '../../ui/badge';

const TeamGrid = ({ teams, isDarkMode, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <div key={team.id} className={`p-6 rounded-2xl border transition-all duration-200 group ${isDarkMode ? "bg-slate-900/50 border-slate-700 hover:border-slate-600" : "bg-white border-slate-200 hover:border-slate-300"}`}>
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${isDarkMode ? "bg-slate-800" : "bg-slate-100"} text-blue-600`}>
              <Users size={24} />
            </div>
            <button onClick={() => onEdit(team)} className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
              <MoreHorizontal size={20} />
            </button>
          </div>

          <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>{team.name}</h3>
          <p className={`text-sm mb-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>Leader: <span className="font-medium">{team.leader}</span></p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className={`flex items-center gap-2 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                <Target size={16} />
                <span>Target</span>
              </div>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-slate-900"}`}>{team.target}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className={`flex items-center gap-2 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                <TrendingUp size={16} />
                <span>Achieved</span>
              </div>
              <span className={`font-medium ${isDarkMode ? "text-white" : "text-slate-900"}`}>{team.achieved}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-slate-900' : 'border-white'} bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <Badge text={team.status} variant={team.status === 'High Performing' || team.status === 'Active' ? 'success' : 'warning'} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;