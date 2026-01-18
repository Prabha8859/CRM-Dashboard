
import React, { useState, useEffect } from 'react';
import { X, Save, Tag, Percent, Calendar, FileText } from 'lucide-react';

const OfferModal = ({ isOpen, onClose, onSave, offer, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    title: '',
    code: '',
    type: 'Percentage',
    value: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Active',
    applicableOn: 'All'
  });

  useEffect(() => {
    if (offer && mode === 'edit') {
      setFormData(offer);
    } else {
      setFormData({
        title: '',
        code: `OFFER-${Math.floor(Math.random() * 10000)}`,
        type: 'Percentage',
        value: '',
        description: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        status: 'Active',
        applicableOn: 'All'
      });
    }
  }, [offer, mode, isOpen]);

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
            {mode === 'add' ? 'Create New Offer' : 'Edit Offer'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="offerForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Offer Title</label>
                <div className="relative">
                  <Tag size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                  <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="Summer Sale" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Offer Code</label>
                <input readOnly type="text" value={formData.code} className={`w-full px-4 py-2 rounded-xl border opacity-70 cursor-not-allowed ${theme.inputBg}`} />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Offer Type</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>Percentage</option>
                  <option>Flat Discount</option>
                  <option>Free Test</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Value</label>
                <div className="relative">
                  <Percent size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                  <input required type="text" value={formData.value} onChange={e => setFormData({...formData, value: e.target.value})} className={`w-full pl-10 pr-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="10% or 500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Start Date</label>
                <input type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>End Date</label>
                <input type="date" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
              </div>
              <div className="space-y-2">
                <label className={`text-xs font-medium ${theme.label}`}>Applicable On</label>
                <select value={formData.applicableOn} onChange={e => setFormData({...formData, applicableOn: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                  <option>All</option>
                  <option>Health Tests</option>
                  <option>Health Packages</option>
                  <option>Insurance Plans</option>
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
                <label className={`text-xs font-medium ${theme.label}`}>Description</label>
                <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} rows="2" placeholder="Terms and conditions..." />
              </div>
            </div>
          </form>
        </div>

        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end gap-3`}>
          <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
          <button type="submit" form="offerForm" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Offer</button>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;