import React from 'react';
import { Edit, Trash2, Eye, MoreVertical } from 'lucide-react';
import Badge from '../../ui/badge';

const TeamTable = ({ teams, isDarkMode, onEdit, onDelete }) => {
  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              <th className="px-6 py-4">Team Name</th>
              <th className="px-6 py-4">Team Lead</th>
              <th className="px-6 py-4">Members</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
            {teams.map((team) => (
              <tr key={team.id} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {team.name}
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {team.leader}
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(3, team.members))].map((_, i) => (
                      <div key={i} className={`w-6 h-6 rounded-full border-2 ${isDarkMode ? 'border-[#022c33] bg-slate-700' : 'border-white bg-slate-200'} flex items-center justify-center text-[10px]`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    {team.members > 3 && (
                      <div className={`w-6 h-6 rounded-full border-2 ${isDarkMode ? 'border-[#022c33] bg-slate-800' : 'border-white bg-slate-100'} flex items-center justify-center text-[10px]`}>
                        +{team.members - 3}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge 
                    text={team.status} 
                    variant={team.status === 'Active' || team.status === 'High Performing' ? 'success' : 'warning'} 
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onEdit(team)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <Edit size={16} />
                    </button>
                    <button onClick={() => onDelete(team.id)} className={`p-2 rounded-lg transition-colors hover:bg-red-500/10 text-red-500`}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamTable;
