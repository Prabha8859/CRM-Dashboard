
import React, { useState, useEffect } from 'react';
import { X, Save, User, Mail, Lock, Shield, Phone, Briefcase } from 'lucide-react';

const StaffModal = ({ isOpen, onClose, onSave, staff, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Staff',
    department: 'General',
    status: 'Active',
    password: ''
  });

  useEffect(() => {
    if (staff && mode === 'edit') {
      setFormData({
        name: staff.name || '',
        email: staff.email || '',
        phone: staff.phone || '',
        role: staff.role || 'Staff',
        department: staff.department || '',
        status: staff.status || 'Active',
        password: ''
      });
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Staff',
        department: 'General',
        status: 'Active',
        password: ''
      });
    }
  }, [staff, mode, isOpen]);

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
        
        {/* Header */}
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>
            {mode === 'add' ? 'Add New Staff' : 'Edit Staff Member'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="staffForm" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <User size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="John Doe" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Email Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <Mail size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="john@crm.com" />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Phone Number</label>
              <div className="relative">
                <Phone size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="+1 234 567 890" />
              </div>
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Department</label>
              <div className="relative">
                <Briefcase size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="Sales, IT, etc." />
              </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Role <span className="text-red-500">*</span></label>
              <div className="relative">
                <Shield size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 appearance-none ${theme.inputBg}`}>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
            </div>

            {/* Password (Only for Add) */}
            {mode === 'add' && (
              <div className="space-y-2">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme.label}`}>Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Lock size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                  <input required type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} placeholder="••••••••" />
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end gap-3`}>
          <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
          <button type="submit" form="staffForm" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Staff</button>
        </div>
      </div>
    </div>
  );
};

export default StaffModal;
