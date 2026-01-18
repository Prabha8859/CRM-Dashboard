
import React, { useState } from 'react';
import { X, Save, User, Calendar } from 'lucide-react';

const AssignInsuranceModal = ({ isOpen, onClose, onAssign, plan, isDarkMode }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign({ user: selectedUser, planId: plan.id, startDate, endDate });
    onClose();
  };

  // Mock Users
  const users = ['Rahul Sharma', 'Neha Gupta', 'Amit Verma', 'Priya Singh'];

  const handleStartDateChange = (e) => {
    const start = e.target.value;
    setStartDate(start);
    // Auto calculate end date based on plan duration (assuming 1 year for simplicity)
    if (start) {
      const date = new Date(start);
      date.setFullYear(date.getFullYear() + 1);
      setEndDate(date.toISOString().split('T')[0]);
    }
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
      <div className={`w-full max-w-md rounded-2xl shadow-2xl ${theme.bg} border ${theme.borderColor} overflow-hidden`}>
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>
            Assign Insurance Plan
          </h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-[#055b65]/30 border-[#45828b]/30' : 'bg-blue-50 border-blue-100'}`}>
            <p className={`text-sm font-medium ${theme.text}`}>Selected Plan:</p>
            <p className={`text-lg font-bold ${isDarkMode ? 'text-[#1bd488]' : 'text-blue-600'}`}>{plan?.name}</p>
          </div>

          <div className="space-y-2">
            <label className={`text-xs font-medium ${theme.label}`}>Select User</label>
            <div className="relative">
              <User size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
              <select required value={selectedUser} onChange={e => setSelectedUser(e.target.value)} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 appearance-none ${theme.inputBg}`}>
                <option value="">Select Employee</option>
                {users.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={`text-xs font-medium ${theme.label}`}>Start Date</label>
              <div className="relative">
                <Calendar size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input required type="date" value={startDate} onChange={handleStartDateChange} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`} />
              </div>
            </div>
            <div className="space-y-2">
              <label className={`text-xs font-medium ${theme.label}`}>End Date</label>
              <div className="relative">
                <Calendar size={18} className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.label}`} />
                <input readOnly type="date" value={endDate} className={`w-full pl-10 pr-4 py-2.5 rounded-xl border opacity-70 cursor-not-allowed ${theme.inputBg}`} />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={onClose} className={`px-4 py-2 rounded-xl font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>Cancel</button>
            <button type="submit" className="px-6 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] font-bold rounded-xl shadow-lg shadow-[#1bd488]/20 transition-all flex items-center gap-2"><Save size={18} /> Assign</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AssignInsuranceModal;