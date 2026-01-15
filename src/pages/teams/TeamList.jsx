
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, MoreHorizontal, Plus, TrendingUp, Target, Award } from 'lucide-react';

const TeamList = () => {
  const { isDarkMode } = useOutletContext();

  const [teams] = useState([
    { id: 1, name: 'Sales Warriors', leader: 'Alice Freeman', members: 12, target: '$150k', achieved: '85%', status: 'High Performing' },
    { id: 2, name: 'Customer Success', leader: 'Bob Smith', members: 8, target: '98% CSAT', achieved: '96%', status: 'On Track' },
    { id: 3, name: 'Claims Specialists', leader: 'Charlie Davis', members: 15, target: '24h Avg', achieved: '26h', status: 'At Risk' },
    { id: 4, name: 'Tech Support', leader: 'Diana Prince', members: 6, target: '50 Tickets', achieved: '65 Tickets', status: 'High Performing' },
    { id: 5, name: 'Marketing Crew', leader: 'Evan Wright', members: 5, target: '10k Leads', achieved: '8.5k', status: 'On Track' },
  ]);

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700 hover:border-slate-600" : "bg-white border-slate-200 hover:border-slate-300",
    iconBg: isDarkMode ? "bg-slate-800" : "bg-slate-100",
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'High Performing': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'On Track': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'At Risk': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return 'text-slate-500 bg-slate-500/10';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Team Management</h1>
          <p className={`text-sm ${theme.subText}`}>Oversee team performance and assignments.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus size={16} />
          Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className={`p-6 rounded-2xl border transition-all duration-200 group ${theme.card}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${theme.iconBg} text-blue-600`}>
                <Users size={24} />
              </div>
              <button className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 ${theme.subText}`}>
                <MoreHorizontal size={20} />
              </button>
            </div>

            <h3 className={`text-lg font-bold mb-1 ${theme.text}`}>{team.name}</h3>
            <p className={`text-sm mb-4 ${theme.subText}`}>Leader: <span className="font-medium">{team.leader}</span></p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className={`flex items-center gap-2 ${theme.subText}`}>
                  <Target size={16} />
                  <span>Target</span>
                </div>
                <span className={`font-medium ${theme.text}`}>{team.target}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className={`flex items-center gap-2 ${theme.subText}`}>
                  <TrendingUp size={16} />
                  <span>Achieved</span>
                </div>
                <span className={`font-medium ${theme.text}`}>{team.achieved}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-slate-900' : 'border-white'} bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-slate-900' : 'border-white'} bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-medium ${theme.subText}`}>
                  +{team.members - 3}
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(team.status)}`}>
                {team.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
