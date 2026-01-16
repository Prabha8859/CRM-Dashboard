import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Shield, ShieldAlert, CheckCircle, Eye, Edit, Trash2, Phone, MapPin, Briefcase } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';
import Card from '../../ui/Card';
import FilterBar from '../../ui/FilterBar';
import Table from '../../ui/Table';
import Pagination from '../../ui/Pagination';

const AdminList = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const [viewMode, setViewMode] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Mock data
  const [admins, setAdmins] = useState([
    { id: 1, name: 'John Doe', email: 'admin@crm.com', phone: '+1 (555) 123-4567', region: 'North America', department: 'Sales', staffCount: 12, teamCount: 3, role: 'Super Admin', status: 'Active', lastLogin: '2 mins ago' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@crm.com', phone: '+1 (555) 987-6543', region: 'Europe', department: 'Support', staffCount: 8, teamCount: 2, role: 'Admin', status: 'Active', lastLogin: '1 hour ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@crm.com', phone: '+1 (555) 456-7890', region: 'Asia Pacific', department: 'Operations', staffCount: 15, teamCount: 4, role: 'Admin', status: 'Blocked', lastLogin: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@crm.com', phone: '+1 (555) 234-5678', region: 'South America', department: 'Marketing', staffCount: 5, teamCount: 1, role: 'Admin', status: 'Active', lastLogin: '5 hours ago' },
  ]);

  const toggleStatus = (id) => {
    setAdmins(admins.map(admin => {
      if (admin.id === id) {
        return { ...admin, status: admin.status === 'Active' ? 'Blocked' : 'Active' };
      }
      return admin;
    }));
  };

  // Filter Logic
  const filteredAdmins = admins.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || admin.email.toLowerCase().includes(searchTerm.toLowerCase()) || admin.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || admin.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sorting Logic
  const sortedAdmins = [...filteredAdmins].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (typeof aValue === 'string') aValue = aValue.toLowerCase();
    if (typeof bValue === 'string') bValue = bValue.toLowerCase();

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedAdmins.length / itemsPerPage);
  const paginatedAdmins = sortedAdmins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Admin Management" 
        subtitle="Manage system administrators and their access privileges."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <button className="px-4 py-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#1bd488]/20 flex items-center gap-2">
          <Shield size={16} />
          Add New Admin
        </button>
      </DashboardHeader>

      {/* Reusable Filter Bar */}
      <FilterBar 
        isDarkMode={isDarkMode}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search admins by name, email, or region..."
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        filters={[
          {
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { value: 'All', label: 'All Status' },
              { value: 'Active', label: 'Active' },
              { value: 'Blocked', label: 'Blocked' }
            ]
          }
        ]}
      />

      {viewMode === 'list' ? (
        <Table 
          isDarkMode={isDarkMode}
          data={paginatedAdmins}
          onSort={handleSort}
          sortConfig={sortConfig}
          columns={[
            { 
              key: 'name', 
              label: 'Admin Name',
              sortable: true,
              render: (value, row) => (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1bd488] to-[#45828b] flex items-center justify-center text-[#055b65] font-bold text-sm shadow-md">
                    {value.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium mt-1 ${
                      row.role === 'Super Admin' 
                        ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' 
                        : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'
                    }`}>
                      {row.role === 'Super Admin' ? <ShieldAlert size={10} /> : <Shield size={10} />}
                      {row.role}
                    </span>
                  </div>
                </div>
              )
            },
            {
              key: 'email',
              label: 'Contact Info',
              sortable: true,
              render: (value, row) => (
                <div className="space-y-1">
                  <p className={`text-xs flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <Briefcase size={12} /> {value}
                  </p>
                  <p className={`text-xs flex items-center gap-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <Phone size={12} /> {row.phone}
                  </p>
                </div>
              )
            },
            {
              key: 'department',
              label: 'Region / Dept',
              sortable: true,
              render: (value, row) => (
                <div className="space-y-1">
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{value}</p>
                  <p className={`text-xs flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                    <MapPin size={10} /> {row.region}
                  </p>
                </div>
              )
            },
            {
              key: 'staffCount',
              label: 'Staff / Teams',
              sortable: true,
              className: 'text-center',
              render: (value, row) => (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                    <p className="text-[10px] uppercase text-slate-500 font-bold">Staff</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                  <div className="text-center">
                    <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{row.teamCount}</p>
                    <p className="text-[10px] uppercase text-slate-500 font-bold">Teams</p>
                  </div>
                </div>
              )
            },
            {
              key: 'status',
              label: 'Status',
              sortable: true,
              render: (value) => (
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                  value === 'Active'
                    ? 'bg-green-500/10 text-green-500 border-green-500/20'
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${value === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                  {value}
                </span>
              )
            }
          ]}
          actions={(row) => (
            <div className="flex items-center justify-end gap-2">
              <button className={`p-2 rounded-lg transition-all hover:scale-110 ${isDarkMode ? 'text-slate-400 hover:text-blue-400 hover:bg-blue-500/10' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'}`} title="View Details">
                <Eye size={18} />
              </button>
              <button className={`p-2 rounded-lg transition-all hover:scale-110 ${isDarkMode ? 'text-slate-400 hover:text-[#1bd488] hover:bg-[#1bd488]/10' : 'text-slate-500 hover:text-[#055b65] hover:bg-[#1bd488]/20'}`} title="Edit Admin">
                <Edit size={18} />
              </button>
              <button 
                onClick={() => toggleStatus(row.id)}
                className={`p-2 rounded-lg transition-all hover:scale-110 ${row.status === 'Active' ? 'text-red-500 hover:bg-red-500/10' : 'text-green-500 hover:bg-green-500/10'}`} 
                title={row.status === 'Active' ? 'Disable Admin' : 'Enable Admin'}
              >
                {row.status === 'Active' ? <Trash2 size={18} /> : <CheckCircle size={18} />}
              </button>
            </div>
          )}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedAdmins.map((admin) => (
            <Card key={admin.id} isDarkMode={isDarkMode} className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1bd488] to-[#45828b] flex items-center justify-center text-[#055b65] font-bold text-lg shadow-md">
                    {admin.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{admin.name}</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{admin.role}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                  admin.status === 'Active'
                    ? 'bg-green-500/10 text-green-500 border-green-500/20'
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}>
                  {admin.status}
                </span>
              </div>
              
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'} space-y-2`}>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase size={14} className="text-slate-400" />
                  <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{admin.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-slate-400" />
                  <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{admin.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} className="text-slate-400" />
                  <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{admin.region} • {admin.department}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{admin.staffCount}</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Staff</p>
                </div>
                <div className="text-center">
                  <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{admin.teamCount}</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Teams</p>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <button className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}>
                  View Profile
                </button>
                <button 
                  onClick={() => toggleStatus(admin.id)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    admin.status === 'Active' 
                      ? 'bg-red-500/10 text-red-500 hover:bg-red-500/20' 
                      : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                  }`}
                >
                  {admin.status === 'Active' ? 'Block' : 'Unblock'}
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default AdminList;
