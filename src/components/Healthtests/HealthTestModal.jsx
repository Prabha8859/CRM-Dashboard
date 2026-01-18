import React, { useState, useEffect } from 'react';
import { X, Save, Activity, FileText, DollarSign, Info } from 'lucide-react';

const HealthTestModal = ({ isOpen, onClose, onSave, test, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Blood',
    price: '',
    preparation: '',
    status: 'Active'
  });

  useEffect(() => {
    if (test && mode === 'edit') {
      setFormData(test);
    } else {
      setFormData({
        name: '',
        description: '',
        category: 'Blood',
        price: '',
        preparation: '',
        status: 'Active'
      });
    }
  }, [test, mode, isOpen]);

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
            {mode === 'add' ? 'Create New Test' : 'Edit Test'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="testForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Test Name</label>
                <div className="relative">
                  <Activity size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="e.g. CBC" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Category</label>
                <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>Blood</option>
                  <option>Urine</option>
                  <option>Scan</option>
                  <option>X-Ray</option>
                  <option>MRI</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Price (₹)</label>
                <div className="relative">
                  <DollarSign size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                  <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Status</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={`text-xs font-medium ${theme.label}`}>Description</label>
                <div className="relative">
                  <FileText size={18} className={`absolute left-3 top-3 ${theme.label}`} />
                  <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} rows="2" placeholder="Details about the test..." />
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className={`text-xs font-medium ${theme.label}`}>Preparation Instructions</label>
                <div className="relative">
                  <Info size={18} className={`absolute left-3 top-3 ${theme.label}`} />
                  <textarea value={formData.preparation} onChange={e => setFormData({...formData, preparation: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} rows="2" placeholder="e.g. Fasting required for 12 hours..." />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end gap-3`}>
          <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
          <button type="submit" form="testForm" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Test</button>
        </div>
      </div>
    </div>
  );
};

export default HealthTestModal;