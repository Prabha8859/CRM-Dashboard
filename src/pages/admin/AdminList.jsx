
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, Filter, Shield, ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

const AdminList = () => {
  const { isDarkMode } = useOutletContext();
  
  // Mock data
  const [admins, setAdmins] = useState([
    { id: 1, name: 'John Doe', email: 'admin@crm.com', role: 'Super Admin', status: 'Active', lastLogin: '2 mins ago' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@crm.com', role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@crm.com', role: 'Admin', status: 'Blocked', lastLogin: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@crm.com', role: 'Admin', status: 'Active', lastLogin: '5 hours ago' },
  ]);

  const toggleStatus = (id) => {
    setAdmins(admins.map(admin => {
      if (admin.id === id) {
        return { ...admin, status: admin.status === 'Active' ? 'Blocked' : 'Active' };
      }
      return admin;
    }));
  };

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    tableHeader: isDarkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-50 text-slate-500",
    rowHover: isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-slate-50",
    border: isDarkMode ? "border-slate-700" : "border-slate-200"
  };
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Admin Management</h1>
          <p className={`text-sm ${theme.subText}`}>Manage system administrators and their access privileges.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Shield size={16} />
          Add New Admin
        </button>
      </div>

      {/* Filters */}
      <div className={`p-4 rounded-xl border ${theme.card} flex flex-col sm:flex-row gap-4`}>
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subText}`} size={18} />
          <input 
            type="text" 
            placeholder="Search admins by name or email..." 
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
                <th className="px-6 py-4">Admin</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${theme.border}`}>
              {admins.map((admin) => (
                <tr key={admin.id} className={`transition-colors ${theme.rowHover}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {admin.name.charAt(0)}
                      </div>
                      <div>
                        <p className={`font-medium ${theme.text}`}>{admin.name}</p>
                        <p className={`text-xs ${theme.subText}`}>{admin.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      admin.role === 'Super Admin' 
                        ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' 
                        : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                    }`}>
                      {admin.role === 'Super Admin' ? <ShieldAlert size={12} /> : <Shield size={12} />}
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                      admin.status === 'Active'
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : 'bg-red-500/10 text-red-500 border-red-500/20'
                    }`}>
                      {admin.status === 'Active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      {admin.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 ${theme.subText}`}>{admin.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => toggleStatus(admin.id)}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors border ${
                        admin.status === 'Active'
                          ? 'bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20'
                          : 'bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20'
                      }`}
                    >
                      {admin.status === 'Active' ? 'Block' : 'Unblock'}
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

export default AdminList;
