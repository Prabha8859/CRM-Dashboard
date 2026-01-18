import React, { useState, useEffect } from 'react';
import { X, Save, Users, User } from 'lucide-react';

const TeamModal = ({ isOpen, onClose, onSave, team, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    leader: '',
    members: 0,
    status: 'Active'
  });

  useEffect(() => {
    if (team && mode === 'edit') {
      setFormData(team);
    } else {
      setFormData({ name: '', leader: '', members: 0, status: 'Active' });
    }
  }, [team, mode, isOpen]);

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
      <div className={`w-full max-w-lg rounded-2xl shadow-2xl ${theme.bg} border ${theme.borderColor} overflow-hidden`}>
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>
            {mode === 'add' ? 'Create New Team' : 'Edit Team'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Team Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <Users size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="e.g. Marketing" />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Team Lead</label>
            <div className="relative">
              <User size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
              <input type="text" value={formData.leader} onChange={e => setFormData({...formData, leader: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="Select Lead" />
            </div>
          </div>

          <div className="space-y-2">
            <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Status</label>
            <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 appearance-none ${theme.inputBg}`}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
            <button type="submit" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Team</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamModal;
