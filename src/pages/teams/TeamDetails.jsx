import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import TeamMembers from './TeamMembers';
import TeamPerformance from './TeamPerformance';

const TeamDetails = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [activeTab, setActiveTab] = useState('members');

  // Mock Members Data
  const members = [
    { id: 1, name: 'John Doe', role: 'Senior Developer', email: 'john@crm.com', phone: '+1 234 567 890', tasks: 45, efficiency: 92, status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', email: 'jane@crm.com', phone: '+1 987 654 321', tasks: 38, efficiency: 95, status: 'Active' },
    { id: 3, name: 'Mike Ross', role: 'Backend Dev', email: 'mike@crm.com', phone: '+1 555 123 456', tasks: 50, efficiency: 88, status: 'Active' },
    { id: 4, name: 'Sarah Connor', role: 'QA Engineer', email: 'sarah@crm.com', phone: '+1 444 777 888', tasks: 62, efficiency: 96, status: 'Inactive' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Team Details: Sales Warriors" 
        subtitle="Manage team members and view performance metrics."
        userRole={userRole}
        isDarkMode={isDarkMode}
      />

      {/* Tabs */}
      <div className={`flex border-b ${isDarkMode ? 'border-[#45828b]/30' : 'border-slate-200'}`}>
        <button 
          onClick={() => setActiveTab('members')}
          className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${activeTab === 'members' ? (isDarkMode ? 'border-[#1bd488] text-[#1bd488]' : 'border-blue-600 text-blue-600') : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Team Members
        </button>
        <button 
          onClick={() => setActiveTab('performance')}
          className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${activeTab === 'performance' ? (isDarkMode ? 'border-[#1bd488] text-[#1bd488]' : 'border-blue-600 text-blue-600') : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Performance & Stats
        </button>
      </div>

      {/* Content */}
      {activeTab === 'members' ? <TeamMembers members={members} isDarkMode={isDarkMode} /> : <TeamPerformance isDarkMode={isDarkMode} />}
    </div>
  );
};

export default TeamDetails;