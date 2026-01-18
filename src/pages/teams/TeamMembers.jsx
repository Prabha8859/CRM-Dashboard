import React from 'react';
import { User, Mail, Phone, Shield } from 'lucide-react';
import Badge from '../../ui/badge';

const TeamMembers = ({ members, isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {members.map((member) => (
        <div 
          key={member.id} 
          className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg group ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 hover:border-[#1bd488]/50' : 'bg-white border-slate-200 hover:border-blue-400'}`}
        >
          <div className="flex flex-col items-center text-center mb-4">
            <div className="relative mb-3">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold border-4 ${isDarkMode ? 'border-[#055b65] bg-[#022c33] text-white' : 'border-white bg-slate-100 text-slate-700'} shadow-lg`}>
                {member.name.charAt(0)}
              </div>
              <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 ${isDarkMode ? 'border-[#022c33]' : 'border-white'} ${member.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>
            
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
            <p className={`text-sm ${isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-500'}`}>{member.role}</p>
          </div>

          <div className={`space-y-3 pt-4 border-t ${isDarkMode ? 'border-[#45828b]/20' : 'border-slate-100'}`}>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className={isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-white' : 'text-slate-700'}>{member.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className={isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-400'} />
              <span className={isDarkMode ? 'text-white' : 'text-slate-700'}>{member.phone}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-center">
              <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{member.tasks}</p>
              <p className={`text-[10px] uppercase font-bold ${isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-500'}`}>Tasks</p>
            </div>
            <div className={`h-8 w-px ${isDarkMode ? 'bg-[#45828b]/20' : 'bg-slate-200'}`}></div>
            <div className="text-center">
              <p className={`text-lg font-bold ${isDarkMode ? 'text-[#1bd488]' : 'text-green-600'}`}>{member.efficiency}%</p>
              <p className={`text-[10px] uppercase font-bold ${isDarkMode ? 'text-[#b2c9c5]' : 'text-slate-500'}`}>Efficiency</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-dashed border-gray-200/20 flex justify-center">
             <button className={`text-xs font-bold flex items-center gap-1 hover:underline ${isDarkMode ? 'text-[#1bd488]' : 'text-blue-600'}`}>
                View Profile
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;