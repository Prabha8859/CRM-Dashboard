
import React from 'react';
import { Activity, Package, Heart } from 'lucide-react';

const HealthServices = ({ isDarkMode }) => {
  return (
    <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white border-slate-100'}`}>
      <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Health Services</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500">
              <Activity size={20} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Total Tests</p>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Available diagnostics</p>
            </div>
          </div>
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>156</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
              <Package size={20} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Health Packages</p>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Bundled services</p>
            </div>
          </div>
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>32</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
              <Heart size={20} />
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Active Services</p>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Currently running</p>
            </div>
          </div>
          <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>148</span>
        </div>
      </div>
    </div>
  );
};

export default HealthServices;
