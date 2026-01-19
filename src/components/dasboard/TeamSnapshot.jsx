import React from 'react';
import { UserCheck, UserX, Clock } from 'lucide-react';
import Card from '../../ui/Card';

const TeamSnapshot = ({ isDarkMode }) => {
  const teams = [
    { name: 'Cardiology', members: 12, active: 90 },
    { name: 'Neurology', members: 8, active: 85 },
    { name: 'General', members: 24, active: 95 },
    { name: 'Pediatrics', members: 10, active: 80 },
  ];

  const employeeStats = { active: 128, inactive: 14, onboarding: 5 };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card isDarkMode={isDarkMode} className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Team Summary</h3>
          <button className="text-sm text-indigo-500 font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className={`text-xs uppercase ${isDarkMode ? 'text-slate-400 bg-slate-800/50' : 'text-slate-500 bg-slate-50'}`}>
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Team Name</th>
                <th className="px-4 py-3">Members</th>
                <th className="px-4 py-3 rounded-r-lg">Active Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td className={`px-4 py-3 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{team.name}</td>
                  <td className={`px-4 py-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{team.members}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${team.active}%` }}></div>
                      </div>
                      <span className={`text-xs font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{team.active}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card isDarkMode={isDarkMode}>
        <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Employee Status</h3>
        <div className="space-y-6">
          {[
            { label: 'Active', value: employeeStats.active, icon: UserCheck, color: 'green' },
            { label: 'Inactive', value: employeeStats.inactive, icon: UserX, color: 'red' },
            { label: 'Onboarding', value: employeeStats.onboarding, icon: Clock, color: 'amber' },
          ].map((stat, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl bg-${stat.color}-500/10 border border-${stat.color}-500/20`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 bg-${stat.color}-500 text-white rounded-lg`}><stat.icon size={18} /></div>
                <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{stat.label}</span>
              </div>
              <span className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TeamSnapshot;