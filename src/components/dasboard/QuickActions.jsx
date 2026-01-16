import React from 'react';
import { UserPlus, Shield, FileText, Activity, Plus, Package, Megaphone, Settings, Upload } from 'lucide-react';
import ActionCard from '../../ui/ActionCard';

const QuickActions = ({ isDarkMode, actions = [] }) => {
  // Map action keys to UI configuration
  const actionConfig = {
    'CREATE_ADMIN': { label: 'Create Admin', icon: Shield, gradient: 'from-[#055b65] to-[#45828b]', hover: 'hover:shadow-[#055b65]/50' },
    'CREATE_STAFF': { label: 'Add Staff', icon: UserPlus, gradient: 'from-[#45828b] to-[#1bd488]', hover: 'hover:shadow-[#45828b]/50' },
    'BROADCAST_MSG': { label: 'Broadcast', icon: Megaphone, gradient: 'from-[#1bd488] to-[#b2c9c5]', hover: 'hover:shadow-[#1bd488]/50' },
    'SYSTEM_SETTINGS': { label: 'Settings', icon: Settings, gradient: 'from-[#055b65] to-[#1bd488]', hover: 'hover:shadow-[#055b65]/50' },
    'ASSIGN_LEAD': { label: 'Assign Lead', icon: Activity, gradient: 'from-[#45828b] to-[#b2c9c5]', hover: 'hover:shadow-[#45828b]/50' },
    'TEAM_REPORTS': { label: 'Reports', icon: FileText, gradient: 'from-[#1bd488] to-[#055b65]', hover: 'hover:shadow-[#1bd488]/50' },
    'UPDATE_LEAD': { label: 'Update Lead', icon: Plus, gradient: 'from-[#b2c9c5] to-[#45828b]', hover: 'hover:shadow-[#b2c9c5]/50' },
    'UPLOAD_DOCS': { label: 'Upload Docs', icon: Upload, gradient: 'from-[#055b65] to-[#45828b]', hover: 'hover:shadow-[#055b65]/50' },
  };

  // Filter and map available actions
  const visibleActions = actions
    .map(key => actionConfig[key])
    .filter(Boolean);

  if (visibleActions.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className={`text-xl font-black ${isDarkMode ? 'text-[#fbfcfc]' : 'text-[#055b65]'}`}>
          Quick Actions
        </h3>
        <div className={`px-3 py-1 rounded-lg text-xs font-bold border ${isDarkMode ? 'bg-[#055b65]/30 border-[#45828b]/30 text-[#1bd488]' : 'bg-white border-[#e0e5e9] text-[#055b65]'}`}>
          {visibleActions.length} Available
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {visibleActions.map((action, index) => (
          <ActionCard 
            key={index} 
            action={action} 
            isDarkMode={isDarkMode} 
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;