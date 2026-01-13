import React from 'react';
import { Shield, CheckCircle, XCircle, Clock } from 'lucide-react';

const InsuranceOverview = ({ isDarkMode }) => {
  const cardClass = `p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/30 border-slate-700' : 'bg-slate-50 border-slate-200'}`;
  const valueClass = `text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`;

  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'}`}>
      <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Insurance Overview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2 text-blue-500">
            <Shield size={20} />
            <span className="text-sm font-medium">Total Plans</span>
          </div>
          <p className={valueClass}>24</p>
        </div>
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2 text-green-500">
            <CheckCircle size={20} />
            <span className="text-sm font-medium">Active</span>
          </div>
          <p className={valueClass}>18</p>
        </div>
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2 text-red-500">
            <XCircle size={20} />
            <span className="text-sm font-medium">Expired</span>
          </div>
          <p className={valueClass}>6</p>
        </div>
        <div className={cardClass}>
          <div className="flex items-center gap-2 mb-2 text-orange-500">
            <Clock size={20} />
            <span className="text-sm font-medium">Pending</span>
          </div>
          <p className={valueClass}>12</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceOverview;