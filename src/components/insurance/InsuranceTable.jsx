
import React from 'react';
import { Edit, Eye, Trash2, UserPlus } from 'lucide-react';
import Badge from '../../ui/badge';

const InsuranceTable = ({ plans, isDarkMode, onView, onEdit, onAssign }) => {
  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              <th className="px-6 py-4">Plan Name</th>
              <th className="px-6 py-4">Provider</th>
              <th className="px-6 py-4">Coverage</th>
              <th className="px-6 py-4">Duration</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
            {plans.map((plan) => (
              <tr key={plan.id} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{plan.provider}</td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{plan.coverage}</td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{plan.duration}</td>
                <td className="px-6 py-4">
                  <Badge text={plan.status} variant={plan.status === 'Active' ? 'success' : 'danger'} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onAssign(plan)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-[#1bd488]' : 'hover:bg-slate-100 text-green-600'}`} title="Assign to User">
                      <UserPlus size={16} />
                    </button>
                    <button onClick={() => onView(plan)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <Eye size={16} />
                    </button>
                    <button onClick={() => onEdit(plan)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
                      <Edit size={16} />
                    </button>
                    <button className={`p-2 rounded-lg transition-colors hover:bg-red-500/10 text-red-500`}>
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

export default InsuranceTable;