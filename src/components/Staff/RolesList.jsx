import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Shield, Plus, Users, Edit, Trash2, Lock } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import RoleModal from './RoleModal.jsx';

const RolesList = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedRole, setSelectedRole] = useState(null);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Super Admin', users: 2, description: 'Full system access with all permissions.' },
    { id: 2, name: 'Admin', users: 5, description: 'Can manage staff, teams, and view reports.' },
    { id: 3, name: 'Manager', users: 12, description: 'Can manage their own team and view team reports.' },
    { id: 4, name: 'Staff', users: 45, description: 'Basic access to assigned tasks and profile.' },
  ]);

  const handleAddRole = () => {
    setModalMode('add');
    setSelectedRole(null);
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setModalMode('edit');
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleSaveRole = (roleData) => {
    if (modalMode === 'add') {
      setRoles([...roles, { id: roles.length + 1, users: 0, ...roleData }]);
    } else {
      setRoles(roles.map(r => r.id === selectedRole.id ? { ...r, ...roleData } : r));
    }
  };

  const handleDeleteRole = (id) => {
    if (window.confirm('Are you sure you want to delete this role?')) {
      setRoles(roles.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Roles Management" 
        subtitle="Define roles and manage system access levels."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddRole}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} /> Create Role
        </button>
      </DashboardHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <div 
            key={role.id} 
            className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 hover:border-[#1bd488]/50' : 'bg-white border-slate-200 hover:border-blue-400'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-[#055b65] text-[#1bd488]' : 'bg-blue-50 text-blue-600'}`}>
                <Shield size={24} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEditRole(role)} className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-600'}`}>
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDeleteRole(role.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{role.name}</h3>
            <p className={`text-sm mb-6 line-clamp-2 ${isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-500'}`}>{role.description}</p>

            <div className="flex items-center justify-between pt-4 border-t border-dashed border-gray-200/20">
              <div className={`flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-600'}`}>
                <Users size={16} />
                {role.users} Users
              </div>
              <button onClick={() => navigate('/roles/permissions')} className={`text-sm font-bold flex items-center gap-1 hover:underline ${isDarkMode ? 'text-[#1bd488]' : 'text-blue-600'}`}>
                <Lock size={14} /> Permissions
              </button>
            </div>
          </div>
        ))}
      </div>

      <RoleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveRole} role={selectedRole} mode={modalMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default RolesList;
