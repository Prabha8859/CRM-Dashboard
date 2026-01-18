
import React, { useState, useEffect } from 'react';
import { X, Save, Shield, Briefcase, DollarSign, Calendar } from 'lucide-react';

const InsuranceModal = ({ isOpen, onClose, onSave, plan, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    coverage: '',
    duration: '1 Year',
    status: 'Active',
    code: '',
    diseases: '',
    hospitals: ''
  });

  useEffect(() => {
    if (plan && mode === 'edit') {
      setFormData(plan);
    } else {
      setFormData({
        name: '',
        provider: '',
        coverage: '',
        duration: '1 Year',
        status: 'Active',
        code: `INS-${Math.floor(Math.random() * 1000)}`,
        diseases: '',
        hospitals: ''
      });
    }
  }, [plan, mode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const theme = {
    bg: isDarkMode ? 'bg-[#022c33]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    inputBg: isDarkMode ? 'bg-[#055b65] border-[#45828b]/50 text-white' : 'bg-slate-50 border-slate-200 text-slate-900',
    label: isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-600',
    borderColor: isDarkMode ? 'border-[#45828b]/30' : 'border-slate-200'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-2xl rounded-2xl shadow-2xl ${theme.bg} border ${theme.borderColor} overflow-hidden flex flex-col max-h-[90vh]`}>
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>
            {mode === 'add' ? 'Create Insurance Plan' : 'Edit Insurance Plan'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="insForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Plan Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="e.g. Gold Health Plan" />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Provider</label>
                <input required type="text" value={formData.provider} onChange={e => setFormData({...formData, provider: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="e.g. LIC, HDFC" />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Plan Code</label>
                <input readOnly type="text" value={formData.code} className={`w-full px-4 py-2 rounded-xl border opacity-70 cursor-not-allowed ${theme.inputBg}`} />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Coverage Amount</label>
                <input required type="text" value={formData.coverage} onChange={e => setFormData({...formData, coverage: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="$500,000" />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Duration</label>
                <select value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>1 Year</option>
                  <option>2 Years</option>
                  <option>3 Years</option>
                  <option>5 Years</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Status</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={`text-xs font-medium ${theme.label}`}>Diseases Covered</label>
                <textarea value={formData.diseases} onChange={e => setFormData({...formData, diseases: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} rows="2" placeholder="List major diseases..." />
              </div>
            </div>
          </form>
        </div>

        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end gap-3`}>
          <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
          <button type="submit" form="insForm" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Plan</button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceModal;