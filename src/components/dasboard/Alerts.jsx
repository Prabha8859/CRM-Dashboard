import React from 'react';
import { AlertTriangle, AlertCircle } from 'lucide-react';

const AlertItem = ({ message, type, isDarkMode }) => {
  const colors = {
    critical: 'text-red-500 bg-red-500/10',
    warning: 'text-orange-500 bg-orange-500/10',
    info: 'text-blue-500 bg-blue-500/10',
  };

  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
      <div className={`p-2 rounded-lg ${colors[type]}`}>
        <AlertTriangle size={18} />
      </div>
      <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{message}</span>
    </div>
  );
};

const Alerts = ({ isDarkMode }) => {
  const alerts = [
    { message: '5 Insurance plans expiring soon', type: 'warning' },
    { message: '3 Staff accounts inactive for > 30 days', type: 'info' },
    { message: 'System backup failed yesterday', type: 'critical' },
    { message: '10 Users without active insurance', type: 'warning' },
  ];

  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'} h-full`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Attention Required</h3>
        <AlertCircle size={20} className="text-orange-500" />
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <AlertItem key={index} {...alert} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
};

export default Alerts;