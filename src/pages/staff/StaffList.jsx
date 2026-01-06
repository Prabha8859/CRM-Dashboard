import { useState } from "react";
import { 
  Plus, Search, Filter, Edit, Trash2, Shield, 
  Download, Upload, Eye, Star, Mail, Phone, TrendingUp, X, Check 
} from "lucide-react";
import PageHeader from "../../components/PageHeader";
import ConfirmDialog from "../../components/ConfirmDialog";
import Button from "../../ui/Button";
import Badge from "../../ui/badge";

export default function StaffList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  // Mock Data
  const staffData = [
    { 
      id: 1, 
      name: "Rahul Sharma", 
      email: "rahul@crm.com", 
      phone: "+91 98765 43210",
      role: "Admin", 
      status: "Active", 
      joinDate: "12 Jan 2024",
      department: "IT",
      rating: 4.8,
      tasks: 24
    },
    { 
      id: 2, 
      name: "Priya Singh", 
      email: "priya@crm.com", 
      phone: "+91 98765 43211",
      role: "Manager", 
      status: "Active", 
      joinDate: "15 Feb 2024",
      department: "Sales",
      rating: 4.6,
      tasks: 18
    },
    { 
      id: 3, 
      name: "Amit Verma", 
      email: "amit@crm.com", 
      phone: "+91 98765 43212",
      role: "Staff", 
      status: "Inactive", 
      joinDate: "01 Mar 2024",
      department: "Support",
      rating: 4.2,
      tasks: 12
    },
    { 
      id: 4, 
      name: "Sneha Gupta", 
      email: "sneha@crm.com", 
      phone: "+91 98765 43213",
      role: "Staff", 
      status: "Active", 
      joinDate: "10 Mar 2024",
      department: "Marketing",
      rating: 4.9,
      tasks: 31
    },
    { 
      id: 5, 
      name: "Vikram Malhotra", 
      email: "vikram@crm.com", 
      phone: "+91 98765 43214",
      role: "Manager", 
      status: "Active", 
      joinDate: "22 Mar 2024",
      department: "Operations",
      rating: 4.5,
      tasks: 22
    },
  ];

  // Statistics
  const stats = {
    total: staffData.length,
    active: staffData.filter(s => s.status === "Active").length,
    inactive: staffData.filter(s => s.status === "Inactive").length,
    admins: staffData.filter(s => s.role === "Admin").length,
  };

  // Filter Logic
  const filteredData = staffData.filter((staff) => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          staff.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || staff.role === roleFilter;
    const matchesStatus = statusFilter === "All" || staff.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDeleteClick = (staff) => {
    setSelectedStaff(staff);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting:", selectedStaff);
    setShowDeleteDialog(false);
    setSelectedStaff(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <PageHeader 
          title="Staff Management" 
          subtitle="Manage your team members and their roles"
        >
          <Button variant="ghost" icon={Download}>Export</Button>
          <Button variant="secondary" icon={Upload}>Import</Button>
          <Button icon={Plus}>Add Staff</Button>
        </PageHeader>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Staff", value: stats.total, icon: Shield, color: "blue", trend: "+12%" },
            { label: "Active", value: stats.active, icon: Check, color: "green", trend: "+8%" },
            { label: "Inactive", value: stats.inactive, icon: X, color: "red", trend: "-3%" },
            { label: "Admins", value: stats.admins, icon: Star, color: "purple", trend: "+2" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-lg bg-${stat.color}-100 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className={`text-${stat.color}-600`} />
                  </div>
                  <span className={`text-sm font-semibold text-${stat.color}-600 flex items-center gap-1`}>
                    <TrendingUp size={14} />
                    {stat.trend}
                  </span>
                </div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 mb-6 overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-slate-700 font-medium hover:text-blue-600 transition-colors"
            >
              <Filter size={18} />
              <span>Filters</span>
              <span className={`ml-auto transition-transform ${showFilters ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
          </div>

          {showFilters && (
            <div className="p-4 space-y-4 animate-slideDown">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search by name or email..." 
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Role Filter */}
                <select 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-slate-700 cursor-pointer hover:border-slate-300 transition-all"
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                >
                  <option value="All">All Roles</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Staff">Staff</option>
                </select>

                {/* Status Filter */}
                <select 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white text-slate-700 cursor-pointer hover:border-slate-300 transition-all"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Active Filters */}
              {(searchTerm || roleFilter !== "All" || statusFilter !== "All") && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-slate-600">Active filters:</span>
                  {searchTerm && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1">
                      Search: {searchTerm}
                      <button onClick={() => setSearchTerm("")} className="hover:text-blue-900">×</button>
                    </span>
                  )}
                  {roleFilter !== "All" && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1">
                      Role: {roleFilter}
                      <button onClick={() => setRoleFilter("All")} className="hover:text-purple-900">×</button>
                    </span>
                  )}
                  {statusFilter !== "All" && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center gap-1">
                      Status: {statusFilter}
                      <button onClick={() => setStatusFilter("All")} className="hover:text-green-900">×</button>
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Table */}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-20"></div>
          <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Staff Member</span>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Contact</span>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Role</span>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Performance</span>
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Status</span>
                    </th>
                    <th className="px-6 py-4 text-right font-semibold text-slate-700">
                      <span className="text-xs uppercase tracking-wider">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.map((staff, index) => (
                    <tr
                      key={staff.id}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`transition-all duration-200 ${
                        hoveredRow === index 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50' 
                          : 'bg-white hover:bg-slate-50/50'
                      }`}
                      style={{ animation: `fadeInRow 0.3s ease-out ${index * 0.05}s backwards` }}
                    >
                      {/* Staff Member */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                              {staff.name.charAt(0)}
                            </div>
                            {staff.status === "Active" && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{staff.name}</p>
                            <p className="text-xs text-slate-500">{staff.department}</p>
                          </div>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-slate-600 text-xs">
                            <Mail size={12} />
                            <span>{staff.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600 text-xs">
                            <Phone size={12} />
                            <span>{staff.phone}</span>
                          </div>
                        </div>
                      </td>

                      {/* Role */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Shield size={14} className="text-blue-500" />
                          <span className="font-medium">{staff.role}</span>
                        </div>
                      </td>

                      {/* Performance */}
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-semibold text-slate-700">{staff.rating}</span>
                          </div>
                          <p className="text-xs text-slate-500">{staff.tasks} tasks completed</p>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <Badge 
                          text={staff.status} 
                          variant={staff.status === "Active" ? "success" : "danger"}
                          pulse={staff.status === "Active"}
                        />
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all hover:scale-110">
                            <Eye size={16} />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all hover:scale-110">
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(staff)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all hover:scale-110"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filteredData.length}</span> of {staffData.length} entries
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-slate-600">Live data</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Dialog */}
        <ConfirmDialog 
          isOpen={showDeleteDialog}
          title="Disable Staff Member?"
          message={`Are you sure you want to disable ${selectedStaff?.name}? They will no longer be able to access the system.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setShowDeleteDialog(false)}
        />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRow {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}