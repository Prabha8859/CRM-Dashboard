import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Save, Check } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const RolePermissions = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [selectedRole, setSelectedRole] = useState('Admin');

  const roles = ['Super Admin', 'Admin', 'Manager', 'Staff'];
  
  const modules = [
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Staff Management', key: 'staff' },
    { name: 'Roles & Permissions', key: 'roles' },
    { name: 'Teams', key: 'teams' },
    { name: 'Employees', key: 'employees' },
    { name: 'Insurance', key: 'insurance' },
    { name: 'Offers', key: 'offers' },
    { name: 'Health Tests', key: 'tests' },
  ];

  const actions = ['View', 'Create', 'Edit', 'Delete'];

  // Mock permissions state
  const [permissions, setPermissions] = useState({
    'Admin': {
      'dashboard': ['View'],
      'staff': ['View', 'Create', 'Edit', 'Delete'],
      'roles': ['View', 'Create'],
      'teams': ['View', 'Create', 'Edit'],
    }
  });

  const handlePermissionChange = (moduleKey, action) => {
    setPermissions(prev => {
      const rolePerms = prev[selectedRole] || {};
      const modulePerms = rolePerms[moduleKey] || [];

      let newModulePerms;
      if (modulePerms.includes(action)) {
        newModulePerms = modulePerms.filter(p => p !== action);
      } else {
        newModulePerms = [...modulePerms, action];
      }

      return {
        ...prev,
        [selectedRole]: {
          ...rolePerms,
          [moduleKey]: newModulePerms
        }
      };
    });
  };

  const isChecked = (moduleKey, action) => {
    return permissions[selectedRole]?.[moduleKey]?.includes(action) || false;
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Permission Assignment" 
        subtitle="Configure granular access controls for each role."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <div className="flex items-center gap-3">
          <select 
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/50 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
          >
            {roles.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <button className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </DashboardHeader>

      <div className={`rounded-2xl border overflow-hidden ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200 shadow-sm'}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className={`text-xs uppercase font-bold ${isDarkMode ? 'bg-[#055b65]/50 text-[#b2c9c5]' : 'bg-slate-50 text-slate-500'}`}>
              <tr>
                <th className="px-6 py-4">Module</th>
                {actions.map(action => (
                  <th key={action} className="px-6 py-4 text-center">{action}</th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${isDarkMode ? 'divide-[#45828b]/20' : 'divide-slate-100'}`}>
              {modules.map((module) => (
                <tr key={module.key} className={`transition-colors ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}>
                  <td className={`px-6 py-4 font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {module.name}
                  </td>
                  {actions.map(action => (
                    <td key={action} className="px-6 py-4 text-center">
                      <label className="relative inline-flex items-center justify-center cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="peer sr-only"
                          checked={isChecked(module.key, action)}
                          onChange={() => handlePermissionChange(module.key, action)}
                        />
                        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${isChecked(module.key, action) ? 'bg-[#1bd488] border-[#1bd488] text-[#055b65]' : isDarkMode ? 'border-[#45828b] group-hover:border-[#1bd488]' : 'border-slate-300 group-hover:border-blue-500'}`}>
                          <Check size={14} className={`transition-transform duration-200 ${isChecked(module.key, action) ? 'scale-100' : 'scale-0'}`} strokeWidth={3} />
                        </div>
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolePermissions;
