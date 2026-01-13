
import React from 'react';
import { Server, Wifi } from 'lucide-react';

const SystemHealth = ({ isDarkMode }) => {
  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'}`}>
      <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>System Health</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-green-500/10' : 'bg-green-50'} border border-green-500/20`}>
          <div className="flex items-center gap-2 mb-1 text-green-500">
            <Server size={18} />
            <span className="text-xs font-bold uppercase">Status</span>
          </div>
          <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Operational</p>
        </div>
        <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'} border border-blue-500/20`}>
          <div className="flex items-center gap-2 mb-1 text-blue-500">
            <Wifi size={18} />
            <span className="text-xs font-bold uppercase">API Req</span>
          </div>
          <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>24.5k</p>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-dashed border-slate-700/50">
        <div className="flex justify-between items-center text-sm">
          <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Last Backup</span>
          <span className={isDarkMode ? 'text-white' : 'text-slate-800'}>2 hours ago</span>
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;