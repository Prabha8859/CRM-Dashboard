import React from 'react';
import { Edit, Trash2, UserPlus, Eye, Package } from 'lucide-react';
import Badge from '../../ui/badge';

const HealthPackagesTable = ({ packages = [], isDarkMode,  onEdit, onDelete, onAssign }) => {
  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              <th className="px-6 py-4">Package Name</th>
              <th className="px-6 py-4">Tests Included</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
            {packages.map((pkg) => (
              <tr key={pkg.id} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-[#055b65] text-[#1bd488]' : 'bg-blue-50 text-blue-600'}`}>
                      <Package size={18} />
                    </div>
                    <div>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{pkg.category}</p>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${isDarkMode ? 'bg-white/10' : 'bg-slate-100'}`}>
                    {pkg.tests?.length || 0} Tests
                  </span>
                </td>
                <td className={`px-6 py-4 font-bold ${isDarkMode ? 'text-[#1bd488]' : 'text-green-600'}`}>₹{pkg.price}</td>
                <td className="px-6 py-4">
                  <Badge text={pkg.status} variant={pkg.status === 'Active' ? 'success' : 'danger'} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onAssign(pkg)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-[#1bd488]' : 'hover:bg-slate-100 text-blue-600'}`} title="Assign Package">
                      <UserPlus size={16} />
                    </button>
                    <button onClick={() => onEdit(pkg)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`} title="Edit">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => onDelete(pkg.id)} className={`p-2 rounded-lg transition-colors hover:bg-red-500/10 text-red-500`} title="Delete">
                      <Trash2 size={16} />
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

export default HealthPackagesTable;
