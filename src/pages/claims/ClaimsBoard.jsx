import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MoreHorizontal, Plus, Calendar, DollarSign, FileText } from 'lucide-react';

const ClaimsBoard = () => {
  const { isDarkMode } = useOutletContext();

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
    { title: 'Pending', status: 'Pending', color: 'bg-yellow-500' },
    { title: 'In Review', status: 'In Review', color: 'bg-blue-500' },
    { title: 'Approved', status: 'Approved', color: 'bg-green-500' },
    { title: 'Rejected', status: 'Rejected', color: 'bg-red-500' },
  ];

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    columnBg: isDarkMode ? "bg-slate-800/50" : "bg-slate-50",
    border: isDarkMode ? "border-slate-700" : "border-slate-200"
  };

  return (
    <div className="h-full flex flex-col space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Claims Management</h1>
          <p className={`text-sm ${theme.subText}`}>Track and manage insurance claims workflow.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus size={16} />
          New Claim
        </button>
      </div>

      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-6 min-w-[1000px] h-full pb-4">
          {columns.map((col) => (
            <div key={col.status} className={`flex-1 min-w-[280px] flex flex-col rounded-xl ${theme.columnBg} p-4`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${col.color}`} />
                  <h3 className={`font-semibold ${theme.text}`}>{col.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
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
                      <span className={`px-2 py-1 rounded text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20`}>
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