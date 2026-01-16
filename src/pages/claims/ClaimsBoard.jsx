import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MoreHorizontal, Plus, Calendar, DollarSign, FileText } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const ClaimsBoard = () => {
  const { isDarkMode, userRole } = useOutletContext();

  // Mock data for claims
  const [claims] = useState([
    { id: 1, policyHolder: 'Alice Brown', policyNumber: 'POL-001', amount: '$1,200', type: 'Health', date: '2024-01-10', status: 'Pending' },
    { id: 2, policyHolder: 'Bob Smith', policyNumber: 'POL-002', amount: '$5,000', type: 'Auto', date: '2024-01-12', status: 'In Review' },
    { id: 3, policyHolder: 'Charlie Day', policyNumber: 'POL-003', amount: '$500', type: 'Home', date: '2024-01-15', status: 'Approved' },
    { id: 4, policyHolder: 'Diana Prince', policyNumber: 'POL-004', amount: '$3,200', type: 'Health', date: '2024-01-18', status: 'Pending' },
    { id: 5, policyHolder: 'Evan Wright', policyNumber: 'POL-005', amount: '$10,000', type: 'Life', date: '2024-01-20', status: 'Rejected' },
    { id: 6, policyHolder: 'Fiona Gallagher', policyNumber: 'POL-006', amount: '$2,100', type: 'Auto', date: '2024-01-22', status: 'In Review' },
  ]);

  const columns = [
    { title: 'Pending', status: 'Pending', color: 'bg-[#b2c9c5]' },
    { title: 'In Review', status: 'In Review', color: 'bg-[#45828b]' },
    { title: 'Approved', status: 'Approved', color: 'bg-[#1bd488]' },
    { title: 'Rejected', status: 'Rejected', color: 'bg-[#055b65]' },
  ];

  const theme = {
    text: isDarkMode ? "text-[#fbfcfc]" : "text-[#055b65]",
    subText: isDarkMode ? "text-[#b2c9c5]" : "text-[#45828b]",
    card: isDarkMode ? "bg-[#055b65]/40 border-[#45828b]/30" : "bg-[#fbfcfc] border-[#e0e5e9]",
    columnBg: isDarkMode ? "bg-[#055b65]/20" : "bg-[#e0e5e9]/50",
    border: isDarkMode ? "border-[#45828b]/30" : "border-[#e0e5e9]"
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <DashboardHeader 
        title="Claims Management"
        subtitle="Track and manage insurance claims workflow."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2">
          <Plus size={16} />
          New Claim
        </button>
      </DashboardHeader>

      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-6 min-w-[1000px] h-full pb-4">
          {columns.map((col) => (
            <div key={col.status} className={`flex-1 min-w-[280px] flex flex-col rounded-xl ${theme.columnBg} p-4`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${col.color}`} />
                  <h3 className={`font-semibold ${theme.text}`}>{col.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-[#45828b]/30 text-[#fbfcfc]' : 'bg-[#b2c9c5]/30 text-[#055b65]'}`}>
                    {claims.filter(c => c.status === col.status).length}
                  </span>
                </div>
                <button className={`p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${theme.subText}`}>
                  <MoreHorizontal size={16} />
                </button>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
                {claims.filter(c => c.status === col.status).map((claim) => (
                  <div key={claim.id} className={`p-4 rounded-lg border shadow-sm cursor-pointer hover:shadow-md transition-all ${theme.card}`}>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium bg-[#1bd488]/10 text-[#055b65] border border-[#1bd488]/20`}>
                        {claim.type}
                      </span>
                      <button className={`${theme.subText} hover:${theme.text}`}>
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                    
                    <h4 className={`font-semibold mb-1 ${theme.text}`}>{claim.policyHolder}</h4>
                    <p className={`text-xs mb-3 ${theme.subText}`}>{claim.policyNumber}</p>
                    
                    <div className="space-y-2">
                      <div className={`flex items-center gap-2 text-xs ${theme.subText}`}>
                        <DollarSign size={14} />
                        <span>{claim.amount}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-xs ${theme.subText}`}>
                        <Calendar size={14} />
                        <span>{claim.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimsBoard;