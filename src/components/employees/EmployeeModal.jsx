
import React, { useState, useEffect } from 'react';
import { X, Save, User, Mail, Phone, Briefcase, Calendar, Shield } from 'lucide-react';

const EmployeeModal = ({ isOpen, onClose, onSave, employee, mode, isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    team: '',
    status: 'Active',
    empId: '',
    department: '',
    joiningDate: '',
    gender: 'Male'
  });

  useEffect(() => {
    if (employee && mode === 'edit') {
      setFormData(employee);
    } else {
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Developer',
        team: 'Engineering',
        status: 'Active',
        empId: `EMP-${Math.floor(Math.random() * 1000)}`, // Auto-gen mock
        department: 'IT',
        joiningDate: new Date().toISOString().split('T')[0],
        gender: 'Male'
      });
    }
  }, [employee, mode, isOpen]);

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
            {mode === 'add' ? 'Add New Employee' : 'Edit Employee'}
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="empForm" onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Details */}
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.label} border-b ${theme.borderColor} pb-2`}>Basic Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Email</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Phone</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Gender</label>
                  <select value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Work Details */}
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${theme.label} border-b ${theme.borderColor} pb-2`}>Work Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Employee ID</label>
                  <input readOnly type="text" value={formData.empId} className={`w-full px-4 py-2 rounded-xl border opacity-70 cursor-not-allowed ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Department</label>
                  <input type="text" value={formData.department} onChange={e => setFormData({...formData, department: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Role</label>
                  <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Team</label>
                  <input type="text" value={formData.team} onChange={e => setFormData({...formData, team: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Joining Date</label>
                  <input type="date" value={formData.joiningDate} onChange={e => setFormData({...formData, joiningDate: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-medium ${theme.label}`}>Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>On Leave</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={`px-6 py-4 border-t ${theme.borderColor} flex justify-end gap-3`}>
          <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
          <button type="submit" form="empForm" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Save Employee</button>
        </div>
      </div>
    </div>
  );
};
export default EmployeeModal;