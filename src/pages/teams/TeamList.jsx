import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter, LayoutGrid, List } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import TeamOverview from '../../components/Teams/TeamOverview';
import TeamTable from '../../components/Teams/TeamTable';
import TeamModal from '../../components/Teams/TeamModal';
import TeamGrid from './TeamGrid';

const TeamList = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [teams, setTeams] = useState([
    { id: 1, name: 'Sales Warriors', leader: 'Alice Freeman', members: 12, target: '$150k', achieved: '85%', status: 'High Performing' },
    { id: 2, name: 'Customer Success', leader: 'Bob Smith', members: 8, target: '98% CSAT', achieved: '96%', status: 'On Track' },
    { id: 3, name: 'Claims Specialists', leader: 'Charlie Davis', members: 15, target: '24h Avg', achieved: '26h', status: 'At Risk' },
    { id: 4, name: 'Tech Support', leader: 'Diana Prince', members: 6, target: '50 Tickets', achieved: '65 Tickets', status: 'High Performing' },
    { id: 5, name: 'Marketing Crew', leader: 'Evan Wright', members: 5, target: '10k Leads', achieved: '8.5k', status: 'On Track' },
  ]);

  const handleAddTeam = () => {
    setModalMode('add');
    setSelectedTeam(null);
    setIsModalOpen(true);
  };

  const handleEditTeam = (team) => {
    setModalMode('edit');
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  const handleSaveTeam = (teamData) => {
    if (modalMode === 'add') {
      setTeams([...teams, { id: teams.length + 1, ...teamData, members: 0, target: '-', achieved: '-', status: 'Active' }]);
    } else {
      setTeams(teams.map(t => t.id === selectedTeam.id ? { ...t, ...teamData } : t));
    }
  };

  const handleDeleteTeam = (id) => {
    if (window.confirm('Are you sure you want to delete this team?')) {
      setTeams(teams.filter(t => t.id !== id));
    }
  };

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Team Management" 
        subtitle="Oversee team performance, members, and assignments."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddTeam}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} />
          Create Team
        </button>
      </DashboardHeader>

      {/* Team Overview Stats */}
      <TeamOverview isDarkMode={isDarkMode} />

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search teams..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
          />
        </div>
        
        <div className={`flex items-center gap-2 p-1 rounded-lg border ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200'}`}>
          <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? (isDarkMode ? 'bg-[#055b65] text-white' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400' : 'text-slate-500')}`}>
            <List size={18} />
          </button>
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? (isDarkMode ? 'bg-[#055b65] text-white' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400' : 'text-slate-500')}`}>
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {/* Team List / Grid */}
      {viewMode === 'list' ? (
        <TeamTable teams={filteredTeams} isDarkMode={isDarkMode} onEdit={handleEditTeam} onDelete={handleDeleteTeam} />
      ) : (
        <TeamGrid teams={filteredTeams} isDarkMode={isDarkMode} onEdit={handleEditTeam} onDelete={handleDeleteTeam} />
      )}

      <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveTeam} team={selectedTeam} mode={modalMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default TeamList;
