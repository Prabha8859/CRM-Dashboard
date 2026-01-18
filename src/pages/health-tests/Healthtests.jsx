import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import HealthTestsOverview from '../../components/Healthtests/HealthTestsOverview';
import HealthTestsTable from '../../components/Healthtests/HealthTestsTable';
import HealthTestModal from '../../components/Healthtests/HealthTestModal';
import AssignTestModal from '../../components/Healthtests/AssignTestModal';
import HealthTestDetailsModal from '../../components/Healthtests/HealthTestDetailsModal';

const Healthtests = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedTest, setSelectedTest] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [tests, setTests] = useState([
    { id: 1, name: 'Complete Blood Count (CBC)', category: 'Blood', price: '500', status: 'Active', description: 'Measures different parts of the blood.', preparation: 'No fasting required.' },
    { id: 2, name: 'Thyroid Profile', category: 'Blood', price: '800', status: 'Active', description: 'Checks thyroid function.', preparation: 'Fasting preferred.' },
    { id: 3, name: 'MRI Brain', category: 'Scan', price: '5000', status: 'Active', description: 'Detailed imaging of the brain.', preparation: 'Remove metal objects.' },
    { id: 4, name: 'X-Ray Chest', category: 'X-Ray', price: '1000', status: 'Inactive', description: 'Imaging of the chest area.', preparation: 'None.' },
    { id: 5, name: 'Lipid Profile', category: 'Blood', price: '900', status: 'Active', description: 'Cholesterol check.', preparation: '12 hours fasting.' },
  ]);

  const handleAddTest = () => {
    setModalMode('add');
    setSelectedTest(null);
    setIsModalOpen(true);
  };

  const handleEditTest = (test) => {
    setModalMode('edit');
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const handleViewTest = (test) => {
    setSelectedTest(test);
    setIsDetailsModalOpen(true);
  };

  const handleDeleteTest = (id) => {
    if (window.confirm('Are you sure you want to delete this test?')) {
      setTests(tests.filter(t => t.id !== id));
    }
  };

  const handleAssignTest = (test) => {
    setSelectedTest(test);
    setIsAssignModalOpen(true);
  };

  const handleSaveTest = (testData) => {
    if (modalMode === 'add') {
      setTests([...tests, { id: tests.length + 1, ...testData }]);
    } else {
      setTests(tests.map(t => t.id === selectedTest.id ? { ...t, ...testData } : t));
    }
  };

  const handleAssignSubmit = (assignmentData) => {
    console.log('Assigned Test:', assignmentData);
    // API call would go here
  };

  const filteredTests = tests.filter(test => 
    test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    test.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Health Tests" 
        subtitle="Manage individual medical tests and pricing."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddTest}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Test
        </button>
      </DashboardHeader>

      <HealthTestsOverview isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search tests..." 
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

      <HealthTestsTable 
        tests={filteredTests} 
        isDarkMode={isDarkMode} 
        onView={handleViewTest}
        onEdit={handleEditTest} 
        onDelete={handleDeleteTest}
        onAssign={handleAssignTest}
      />

      <HealthTestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveTest} 
        test={selectedTest} 
        mode={modalMode} 
        isDarkMode={isDarkMode} 
      />

      <AssignTestModal 
        isOpen={isAssignModalOpen} 
        onClose={() => setIsAssignModalOpen(false)} 
        onAssign={handleAssignSubmit} 
        test={selectedTest} 
        isDarkMode={isDarkMode} 
      />

      <HealthTestDetailsModal 
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        test={selectedTest}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Healthtests;