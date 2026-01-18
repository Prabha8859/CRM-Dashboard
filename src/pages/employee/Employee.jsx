import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import EmployeeOverview from '../../components/employees/EmployeeOverview';
import EmployeeTable from '../../components/employees/EmployeeTable';
import EmployeeModal from '../../components/Employees/EmployeeModal';

const Employee = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [employees, setEmployees] = useState([
    { id: 1, name: 'Rahul Sharma', empId: 'EMP-001', role: 'Frontend Dev', team: 'Engineering', email: 'rahul@crm.com', phone: '9876543210', status: 'Active', department: 'IT', joiningDate: '2023-01-15', gender: 'Male' },
    { id: 2, name: 'Neha Gupta', empId: 'EMP-002', role: 'HR Manager', team: 'HR', email: 'neha@crm.com', phone: '9876543211', status: 'Active', department: 'HR', joiningDate: '2023-02-20', gender: 'Female' },
    { id: 3, name: 'Amit Verma', empId: 'EMP-003', role: 'Backend Dev', team: 'Engineering', email: 'amit@crm.com', phone: '9876543212', status: 'Inactive', department: 'IT', joiningDate: '2023-03-10', gender: 'Male' },
    { id: 4, name: 'Priya Singh', empId: 'EMP-004', role: 'UI/UX Designer', team: 'Design', email: 'priya@crm.com', phone: '9876543213', status: 'Active', department: 'Design', joiningDate: '2023-04-05', gender: 'Female' },
  ]);

  const handleAddEmployee = () => {
    setModalMode('add');
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleEditEmployee = (emp) => {
    setModalMode('edit');
    setSelectedEmployee(emp);
    setIsModalOpen(true);
  };

  const handleSaveEmployee = (empData) => {
    if (modalMode === 'add') {
      setEmployees([...employees, { id: employees.length + 1, ...empData }]);
    } else {
      setEmployees(employees.map(e => e.id === selectedEmployee.id ? { ...e, ...empData } : e));
    }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.empId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Employee Management" 
        subtitle="Manage your workforce, attendance, and performance."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button 
          onClick={handleAddEmployee}
          className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2"
        >
          <Plus size={16} />
          Add Employee
        </button>
      </DashboardHeader>

      <EmployeeOverview isDarkMode={isDarkMode} />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className={`relative w-full md:w-96`}>
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={18} />
          <input 
            type="text" 
            placeholder="Search employees..." 
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

      <EmployeeTable 
        employees={filteredEmployees} 
        isDarkMode={isDarkMode} 
        onEdit={handleEditEmployee} 
        onView={(emp) => console.log('View profile', emp)} 
      />

      <EmployeeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveEmployee} 
        employee={selectedEmployee} 
        mode={modalMode} 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
};

export default Employee;