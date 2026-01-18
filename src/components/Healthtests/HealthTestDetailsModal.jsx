import React from 'react';
import { X, Activity, FileText, Info } from 'lucide-react';

const HealthTestDetailsModal = ({ isOpen, onClose, test, isDarkMode }) => {
  if (!isOpen || !test) return null;

  const theme = {
    bg: isDarkMode ? 'bg-[#022c33]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-600',
    borderColor: isDarkMode ? 'border-[#45828b]/30' : 'border-slate-200',
    cardBg: isDarkMode ? 'bg-[#055b65]/30' : 'bg-slate-50',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-lg rounded-2xl shadow-2xl ${theme.bg} border ${theme.borderColor} overflow-hidden flex flex-col max-h-[90vh]`}>
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>
            Test Details
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6">
          {/* Header Info */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-2xl font-bold ${theme.text}`}>{test.name}</h3>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${test.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {test.status}
              </span>
            </div>
            <div className={`text-right`}>
              <p className={`text-2xl font-bold ${isDarkMode ? 'text-[#1bd488]' : 'text-green-600'}`}>₹{test.price}</p>
              <p className={`text-xs ${theme.subText}`}>Per Test</p>
            </div>
          </div>

          {/* Category */}
          <div className={`p-4 rounded-xl border ${theme.borderColor} ${theme.cardBg} flex items-center gap-3`}>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-[#055b65] text-[#1bd488]' : 'bg-blue-100 text-blue-600'}`}>
              <Activity size={20} />
            </div>
            <div>
              <p className={`text-xs ${theme.subText}`}>Category</p>
              <p className={`font-medium ${theme.text}`}>{test.category}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.subText} flex items-center gap-2`}>
              <FileText size={16} /> Description
            </h4>
            <p className={`text-sm leading-relaxed ${theme.text}`}>
              {test.description || "No description provided."}
            </p>
          </div>

          {/* Preparation */}
          <div className="space-y-2">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${theme.subText} flex items-center gap-2`}>
              <Info size={16} /> Preparation Instructions
            </h4>
            <div className={`p-4 rounded-xl border ${theme.borderColor} ${isDarkMode ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <p className={`text-sm ${isDarkMode ? 'text-amber-200' : 'text-amber-800'}`}>
                {test.preparation || "No specific preparation required."}
              </p>
            </div>
          </div>
        </div>

        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end`}>
          <button onClick={onClose} className={`px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all`}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthTestDetailsModal;