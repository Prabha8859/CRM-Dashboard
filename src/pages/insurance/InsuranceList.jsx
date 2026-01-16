import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import { Plus } from 'lucide-react';

const InsuranceList = () => {
  const { isDarkMode, userRole } = useOutletContext();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Insurance Policies"
        subtitle="View and manage insurance plans and policies."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2">
          <Plus size={16} />
          Create Policy
        </button>
      </DashboardHeader>

      <div className={`p-8 rounded-2xl border border-dashed ${isDarkMode ? 'border-slate-700 bg-slate-900/50' : 'border-slate-300 bg-slate-50'} flex items-center justify-center`}>
        <p className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
          Insurance list content goes here.
        </p>
      </div>
    </div>
  );
};

export default InsuranceList;