import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import InsuranceOverview from '../../components/insurance/InsuranceOverview';
import InsuranceTable from '../../components/insurance/InsuranceTable';
import InsuranceModal from '../../components/insurance/InsuranceModal';
import AssignInsuranceModal from '../../components/insurance/AssignInsuranceModal';

const InsuranceList = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [plans, setPlans] = useState([
    { id: 1, name: 'Gold Health Plan', provider: 'LIC', coverage: '$500,000', duration: '1 Year', status: 'Active', code: 'INS-101', diseases: 'Heart, Cancer', hospitals: 'Apollo, Max' },
    { id: 2, name: 'Silver Life Cover', provider: 'HDFC', coverage: '$200,000', duration: '2 Years', status: 'Active', code: 'INS-102', diseases: 'Accidental', hospitals: 'Fortis' },
    { id: 3, name: 'Basic Medical', provider: 'SBI', coverage: '$100,000', duration: '1 Year', status: 'Inactive', code: 'INS-103', diseases: 'General', hospitals: 'Local' },
  ]);

  const handleAddPlan = () => {
    setModalMode('add');
    setSelectedPlan(null);
    setIsModalOpen(true);
  };

  const handleEditPlan = (plan) => {
    setModalMode('edit');
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleAssignPlan = (plan) => {
    setSelectedPlan(plan);
    setIsAssignModalOpen(true);
  };

  const handleSavePlan = (planData) => {
    if (modalMode === 'add') {
      setPlans([...plans, { id: plans.length + 1, ...planData }]);
    } else {
      setPlans(plans.map(p => p.id === selectedPlan.id ? { ...p, ...planData } : p));
    }
  };

  const handleAssignSubmit = (assignmentData) => {
    console.log('Assigned:', assignmentData);
    // Here you would typically make an API call to save the assignment
  };

  const filteredPlans = plans.filter(plan => 
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Insurance Policies"
        subtitle="View and manage insurance plans and policies."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddPlan}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} />
          Create Policy
        </button>
      </DashboardHeader>

      <InsuranceOverview isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search plans..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
          />
        </div>
        
        <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-colors ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white hover:bg-[#055b65]' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <InsuranceTable 
        plans={filteredPlans} 
        isDarkMode={isDarkMode} 
        onView={(plan) => console.log('View', plan)} 
        onEdit={handleEditPlan} 
        onAssign={handleAssignPlan}
      />

      <InsuranceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSavePlan} 
        plan={selectedPlan} 
        mode={modalMode} 
        isDarkMode={isDarkMode} 
      />

      <AssignInsuranceModal 
        isOpen={isAssignModalOpen} 
        onClose={() => setIsAssignModalOpen(false)} 
        onAssign={handleAssignSubmit} 
        plan={selectedPlan} 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
};

export default InsuranceList;
