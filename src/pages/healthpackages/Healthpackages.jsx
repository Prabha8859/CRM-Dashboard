import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter, Tags } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import HealthPackagesOverview from '../../components/HealthPackages/HealthPackagesOverview';
import HealthPackagesTable from '../../components/HealthPackages/HealthPackagesTable';
import HealthPackageModal from '../../components/HealthPackages/HealthPackageModal';
import AssignTestModal from '../../components/Healthtests/AssignTestModal';
import PackageCategoriesModal from '../../components/HealthPackages/PackageCategoriesModal';

const HealthPackages = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Data for Packages
  const [packages, setPackages] = useState([
    { id: 1, name: 'Full Body Checkup', category: 'General', price: '2500', status: 'Active', description: 'Complete body analysis.', tests: [1, 2, 5] },
    { id: 2, name: 'Senior Citizen Care', category: 'Senior Citizen', price: '3500', status: 'Active', description: 'Special care for seniors.', tests: [1, 2, 3, 5] },
    { id: 3, name: 'Women Wellness', category: 'Women Health', price: '3000', status: 'Active', description: 'Essential tests for women.', tests: [1, 2] },
  ]);

  // Mock Data for Available Tests (to select from)
  const availableTests = [
    { id: 1, name: 'Complete Blood Count (CBC)' },
    { id: 2, name: 'Thyroid Profile' },
    { id: 3, name: 'MRI Brain' },
    { id: 4, name: 'X-Ray Chest' },
    { id: 5, name: 'Lipid Profile' },
  ];

  const handleAddPackage = () => {
    setModalMode('add');
    setSelectedPackage(null);
    setIsModalOpen(true);
  };

  const handleEditPackage = (pkg) => {
    setModalMode('edit');
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleDeletePackage = (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  const handleAssignPackage = (pkg) => {
    setSelectedPackage(pkg);
    setIsAssignModalOpen(true);
  };

  const handleSavePackage = (pkgData) => {
    if (modalMode === 'add') {
      setPackages([...packages, { id: packages.length + 1, ...pkgData }]);
    } else {
      setPackages(packages.map(p => p.id === selectedPackage.id ? { ...p, ...pkgData } : p));
    }
  };

  const filteredPackages = packages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Health Packages" 
        subtitle="Bundle tests into packages for better value."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <div className="flex gap-3">
          <button 
            onClick={() => setIsCategoryModalOpen(true)}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 border ${isDarkMode ? 'border-[#1bd488] text-[#1bd488] hover:bg-[#1bd488]/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
          >
            <Tags size={16} />
            Categories
          </button>
          <button 
            onClick={handleAddPackage}
            className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
          >
            <Plus size={16} />
            Create Package
          </button>
        </div>
      </DashboardHeader>

      <HealthPackagesOverview isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search packages..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${isDarkMode ? 'bg-[#022c33] border-[#45828b]/30 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
          />
        </div>
      </div>

      <HealthPackagesTable 
        packages={filteredPackages} 
        isDarkMode={isDarkMode} 
        onEdit={handleEditPackage} 
        onDelete={handleDeletePackage}
        onAssign={handleAssignPackage}
      />

      <HealthPackageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSavePackage} 
        pkg={selectedPackage} 
        mode={modalMode} 
        isDarkMode={isDarkMode}
        availableTests={availableTests}
      />

      {/* Reusing AssignTestModal for packages as the logic is similar (User + Date) */}
      <AssignTestModal 
        isOpen={isAssignModalOpen} 
        onClose={() => setIsAssignModalOpen(false)} 
        onAssign={(data) => console.log('Assigned Package:', data)} 
        test={selectedPackage} // Passing package as 'test' prop since modal expects a name/price object
        isDarkMode={isDarkMode} 
      />

      <PackageCategoriesModal 
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default HealthPackages;