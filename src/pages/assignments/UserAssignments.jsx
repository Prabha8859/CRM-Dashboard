import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Search, User, ShieldCheck, Gift, TestTube, Package, Calendar } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const UserAssignments = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Mock Data
  const users = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@crm.com', role: 'Staff' },
    { id: 2, name: 'Neha Gupta', email: 'neha@crm.com', role: 'Manager' },
  ];

  const assignments = {
    insurance: [
      { id: 1, name: 'Gold Health Plan', provider: 'LIC', validTill: '2025-12-31', status: 'Active' }
    ],
    offers: [
      { id: 1, name: 'Summer Sale', code: 'SUMMER20', discount: '20%', status: 'Unused' }
    ],
    tests: [
      { id: 1, name: 'Thyroid Profile', date: '2024-06-15', status: 'Scheduled' }
    ],
    packages: [
      { id: 1, name: 'Full Body Checkup', date: '2024-06-20', status: 'Pending' }
    ]
 };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Mock search logic
    if (e.target.value.length > 2) {
      setSelectedUser(users[0]); // Auto-select first user for demo
    } else {
      setSelectedUser(null);
    }
  };

  const theme = {
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    cardBg: isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200',
    inputBg: isDarkMode ? 'bg-[#055b65] border-[#45828b]/50 text-white' : 'bg-white border-slate-200 text-slate-900',
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="User Assignments" 
        subtitle="View and manage all assignments for a specific user."
        userRole={userRole}
        isDarkMode={isDarkMode}
      />

      {/* User Search */}
      <div className="relative max-w-md">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subText}`} size={18} />
        <input 
          type="text" 
          placeholder="Search user by name or email..." 
          value={searchTerm}
          onChange={handleSearch}
          className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
        />
      </div>

      {selectedUser ? (
        <div className="space-y-6">
          {/* User Profile Card */}
          <div className={`p-6 rounded-2xl border ${theme.cardBg} flex items-center gap-4`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${isDarkMode ? 'bg-[#055b65] text-white' : 'bg-blue-100 text-blue-600'}`}>
              {selectedUser.name.charAt(0)}
            </div>
            <div>
              <h2 className={`text-xl font-bold ${theme.text}`}>{selectedUser.name}</h2>
              <p className={theme.subText}>{selectedUser.email} • {selectedUser.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Insurance */}
            <div className={`p-6 rounded-2xl border ${theme.cardBg}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.text}`}>
                <ShieldCheck className="text-blue-500" /> Insurance
              </h3>
              <div className="space-y-3">
                {assignments.insurance.map(item => (
                  <div key={item.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <div className="flex justify-between">
                      <p className={`font-medium ${theme.text}`}>{item.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-500">{item.status}</span>
                    </div>
                    <p className={`text-xs ${theme.subText} mt-1`}>{item.provider} • Valid till {item.validTill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offers */}
            <div className={`p-6 rounded-2xl border ${theme.cardBg}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.text}`}>
                <Gift className="text-purple-500" /> Offers
              </h3>
              <div className="space-y-3">
                {assignments.offers.map(item => (
                  <div key={item.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <div className="flex justify-between">
                      <p className={`font-medium ${theme.text}`}>{item.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-500">{item.status}</span>
                    </div>
                    <p className={`text-xs ${theme.subText} mt-1`}>Code: {item.code} • {item.discount} Off</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Tests */}
            <div className={`p-6 rounded-2xl border ${theme.cardBg}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.text}`}>
                <TestTube className="text-red-500" /> Health Tests
              </h3>
              <div className="space-y-3">
                {assignments.tests.map(item => (
                  <div key={item.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <div className="flex justify-between">
                      <p className={`font-medium ${theme.text}`}>{item.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-500">{item.status}</span>
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${theme.subText} mt-1`}>
                      <Calendar size={12} /> {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packages */}
            <div className={`p-6 rounded-2xl border ${theme.cardBg}`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.text}`}>
                <Package className="text-orange-500" /> Health Packages
              </h3>
              <div className="space-y-3">
                {assignments.packages.map(item => (
                  <div key={item.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-black/20 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <div className="flex justify-between">
                      <p className={`font-medium ${theme.text}`}>{item.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-500/10 text-slate-500">{item.status}</span>
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${theme.subText} mt-1`}>
                      <Calendar size={12} /> {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`p-12 rounded-2xl border border-dashed text-center ${isDarkMode ? 'border-slate-700 bg-slate-900/30' : 'border-slate-300 bg-slate-50'}`}>
          <User size={48} className={`mx-auto mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`} />
          <p className={`text-lg font-medium ${theme.text}`}>Select a user to view assignments</p>
          <p className={`text-sm ${theme.subText}`}>Search above to find employee details.</p>
        </div>
      )}
    </div>
  );
};

export default UserAssignments;