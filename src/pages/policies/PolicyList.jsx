import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, Filter, FileText, Plus, MoreHorizontal, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const PolicyList = () => {
  const { isDarkMode } = useOutletContext();

  const [policies] = useState([
    { id: 'POL-2024-001', holder: 'John Doe', type: 'Life Insurance', amount: '$500,000', premium: '$250/mo', startDate: 'Jan 15, 2024', status: 'Active' },
    { id: 'POL-2024-002', holder: 'Sarah Smith', type: 'Health Insurance', amount: '$1,000,000', premium: '$450/mo', startDate: 'Feb 01, 2024', status: 'Active' },
    { id: 'POL-2024-003', holder: 'Mike Johnson', type: 'Vehicle Insurance', amount: '$50,000', premium: '$120/mo', startDate: 'Mar 10, 2024', status: 'Pending' },
    { id: 'POL-2024-004', holder: 'Emily Davis', type: 'Home Insurance', amount: '$350,000', premium: '$180/mo', startDate: 'Jan 20, 2023', status: 'Expired' },
    { id: 'POL-2024-005', holder: 'Robert Wilson', type: 'Life Insurance', amount: '$750,000', premium: '$320/mo', startDate: 'Apr 05, 2024', status: 'Active' },
  ]);

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    tableHeader: isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-50 text-slate-500",
    rowHover: isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-slate-50",
    border: isDarkMode ? "border-slate-700" : "border-slate-200"
  };

  const getStatusBadge = (status) => {
    const styles = {
      Active: "bg-green-500/10 text-green-500 border-green-500/20",
      Pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      Expired: "bg-red-500/10 text-red-500 border-red-500/20",
    };
    const icons = {
      Active: <CheckCircle size={12} />,
      Pending: <Clock size={12} />,
      Expired: <AlertCircle size={12} />,
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status] || styles.Pending}`}>
        {icons[status]}
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Policy Management</h1>
          <p className={`text-sm ${theme.subText}`}>View and manage customer insurance policies.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus size={16} />
          New Policy
        </button>
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-xl border ${theme.card} flex flex-col sm:flex-row gap-4`}>
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subText}`} size={18} />
          <input 
            type="text" 
            placeholder="Search policies, holders, or ID..." 
            className={`w-full pl-10 pr-4 py-2 rounded-lg border bg-transparent outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme.border} ${theme.text}`}
          />
        </div>
        <button className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${theme.border} ${theme.text} hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}>
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className={`rounded-xl border ${theme.card} overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className={`${theme.tableHeader} uppercase font-medium`}>
              <tr>
                <th className="px-6 py-4">Policy ID</th>
                <th className="px-6 py-4">Policy Holder</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Premium</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme.border}`}>
              {policies.map((policy) => (
                <tr key={policy.id} className={`transition-colors ${theme.rowHover}`}>
                  <td className={`px-6 py-4 font-medium ${theme.text}`}>{policy.id}</td>
                  <td className={`px-6 py-4 ${theme.text}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {policy.holder.charAt(0)}
                      </div>
                      {policy.holder}
                    </div>
                  </td>
                  <td className={`px-6 py-4 ${theme.subText}`}>{policy.type}</td>
                  <td className={`px-6 py-4 font-medium ${theme.text}`}>{policy.amount}</td>
                  <td className={`px-6 py-4 ${theme.subText}`}>{policy.premium}</td>
                  <td className={`px-6 py-4 ${theme.subText}`}>{policy.startDate}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(policy.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${theme.subText}`}>
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PolicyList;