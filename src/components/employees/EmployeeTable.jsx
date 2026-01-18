
import React from 'react';
import { Edit, Eye, MoreVertical } from 'lucide-react';
import Badge from '../../ui/badge';

const EmployeeTable = ({ employees, isDarkMode, onView, onEdit }) => {
  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Emp ID</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Team</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
            {employees.map((emp) => (
              <tr key={emp.id} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-[#055b65] text-white' : 'bg-slate-200 text-slate-700'}`}>
                      {emp.name.charAt(0)}
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{emp.name}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{emp.empId}</td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{emp.role}</td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{emp.team}</td>
                <td className="px-6 py-4">
                  <Badge text={emp.status} variant={emp.status === 'Active' ? 'success' : 'danger'} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onView(emp)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <Eye size={16} />
                    </button>
                    <button onClick={() => onEdit(emp)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <Edit size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EmployeeTable;
