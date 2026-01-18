
import React from 'react';
import { Edit, Trash2, Send, Copy } from 'lucide-react';
import Badge from '../../ui/badge';

const OffersTable = ({ offers, isDarkMode, onEdit, onAssign }) => {
  return (
    <div className={`rounded-xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
            <tr>
              <th className="px-6 py-4">Offer Name</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Value</th>
              <th className="px-6 py-4">Validity</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
            {offers.map((offer) => (
              <tr key={offer.id} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {offer.title}
                </td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-2 px-2 py-1 rounded-md font-mono text-xs ${isDarkMode ? 'bg-black/30 text-[#1bd488]' : 'bg-slate-100 text-slate-700'}`}>
                    {offer.code}
                    <Copy size={12} className="cursor-pointer opacity-50 hover:opacity-100" />
                  </div>
                </td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{offer.type}</td>
                <td className={`px-6 py-4 font-bold ${isDarkMode ? 'text-[#1bd488]' : 'text-green-600'}`}>{offer.value}</td>
                <td className={`px-6 py-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{offer.validity}</td>
                <td className="px-6 py-4">
                  <Badge text={offer.status} variant={offer.status === 'Active' ? 'success' : 'danger'} />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onAssign(offer)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-[#1bd488]' : 'hover:bg-slate-100 text-blue-600'}`} title="Assign Offer">
                      <Send size={16} />
                    </button>
                    <button onClick={() => onEdit(offer)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
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

export default OffersTable;