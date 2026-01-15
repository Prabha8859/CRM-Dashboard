
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone, Calendar, User } from 'lucide-react';

const CustomerList = () => {
  const { isDarkMode } = useOutletContext();

  const [customers] = useState([
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', phone: '+1 (555) 123-4567', status: 'Active', joined: 'Jan 10, 2024', policies: 2 },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', phone: '+1 (555) 987-6543', status: 'Inactive', joined: 'Dec 15, 2023', policies: 0 },
    { id: 3, name: 'Charlie Day', email: 'charlie@example.com', phone: '+1 (555) 456-7890', status: 'Active', joined: 'Feb 01, 2024', policies: 1 },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', phone: '+1 (555) 234-5678', status: 'Active', joined: 'Jan 20, 2024', policies: 3 },
    { id: 5, name: 'Evan Wright', email: 'evan@example.com', phone: '+1 (555) 876-5432', status: 'Pending', joined: 'Mar 05, 2024', policies: 0 },
  ]);
  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    tableHeader: isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-50 text-slate-500",
    rowHover: isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-slate-50",
    border: isDarkMode ? "border-slate-700" : "border-slate-200",
    input: isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900",
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Customer Management</h1>
          <p className={`text-sm ${theme.subText}`}>View and manage your customer base.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus size={16} />
          Add Customer
        </button>
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-xl border ${theme.card} flex flex-col sm:flex-row gap-4`}>
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subText}`} size={18} />
          <input 
            type="text" 
            placeholder="Search customers..." 
            className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all ${theme.input}`}
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
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Policies</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme.border}`}>
              {customers.map((customer) => (
                <tr key={customer.id} className={`transition-colors ${theme.rowHover}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className={`font-medium ${theme.text}`}>{customer.name}</p>
                        <p className={`text-xs ${theme.subText}`}>ID: #{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className={`flex items-center gap-2 text-xs ${theme.subText}`}>
                        <Mail size={12} /> {customer.email}
                      </div>
                      <div className={`flex items-center gap-2 text-xs ${theme.subText}`}>
                        <Phone size={12} /> {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      customer.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      customer.status === 'Inactive' ? 'bg-slate-500/10 text-slate-500 border-slate-500/20' :
                      'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 ${theme.subText}`}>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {customer.joined}
                    </div>
                  </td>
                  <td className={`px-6 py-4 ${theme.text}`}>
                    {customer.policies}
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
export default CustomerList;
