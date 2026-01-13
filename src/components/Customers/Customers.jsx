import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, Plus, X } from 'lucide-react';

const Customers = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', status: 'Active', spent: '$0' });

  const cardBg = isDarkMode ? "bg-indigo-950/50 border-purple-800/30" : "bg-white border-purple-100";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-purple-200" : "text-gray-500";
  const borderColor = isDarkMode ? "border-purple-800/30" : "border-purple-100";
  const hoverBg = isDarkMode ? "hover:bg-white/5" : "hover:bg-gray-50";

  const [customers, setCustomers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "+1 234 567 890", status: "Active", spent: "$1,200" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "+1 987 654 321", status: "Inactive", spent: "$500" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "+1 456 789 012", status: "Active", spent: "$3,400" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", phone: "+1 321 654 987", status: "Active", spent: "$850" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", phone: "+1 654 987 321", status: "Pending", spent: "$0" },
  ]);

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const customer = {
      id: customers.length + 1,
      ...newCustomer
    };
    setCustomers([...customers, customer]);
    setIsModalOpen(false);
    setNewCustomer({ name: '', email: '', phone: '', status: 'Active', spent: '$0' });
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className={`text-2xl font-bold ${textColor}`}>Customers</h2>
          <p className={subTextColor}>Manage your customer base</p>
        </div>
        <div className="flex gap-3">
          <div className={`flex items-center px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30' : 'bg-white'}`}>
            <Search size={18} className={subTextColor} />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`bg-transparent border-none outline-none ml-2 w-48 text-sm ${textColor} placeholder-${isDarkMode ? 'purple-300' : 'gray-400'}`}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={`px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30 text-white' : 'bg-white text-gray-900'} outline-none cursor-pointer`}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </select>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add Customer</span>
          </button>
        </div>
      </div>

      <div className={`rounded-2xl border ${borderColor} ${cardBg} backdrop-blur-xl overflow-hidden`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`text-left text-xs font-semibold ${subTextColor} border-b ${borderColor}`}>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${borderColor}`}>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className={`${hoverBg} transition-colors`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">
                        {customer.name.charAt(0)}
                      </div>
                      <span className={`font-medium ${textColor}`}>{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className={`flex items-center gap-2 text-xs ${subTextColor}`}><Mail size={12} /> {customer.email}</div>
                      <div className={`flex items-center gap-2 text-xs ${subTextColor}`}><Phone size={12} /> {customer.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      customer.status === 'Inactive' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-medium ${textColor}`}>{customer.spent}</td>
                  <td className="px-6 py-4">
                    <button className={`p-1.5 rounded-lg hover:bg-white/10 ${subTextColor} transition-colors`}><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className={`w-full max-w-md rounded-2xl border ${borderColor} ${cardBg} p-6 shadow-2xl animate-in fade-in zoom-in duration-200`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-xl font-bold ${textColor}`}>Add New Customer</h3>
              <button onClick={() => setIsModalOpen(false)} className={`p-1 rounded-lg hover:bg-white/10 ${subTextColor} transition-colors`}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddCustomer} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-1`}>Name</label>
                <input 
                  type="text" 
                  required
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                  className={`w-full px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-1`}>Email</label>
                <input 
                  type="email" 
                  required
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                  className={`w-full px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-1`}>Phone</label>
                <input 
                  type="tel" 
                  required
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
                  className={`w-full px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-1`}>Status</label>
                <select 
                  value={newCustomer.status}
                  onChange={(e) => setNewCustomer({...newCustomer, status: e.target.value})}
                  className={`w-full px-4 py-2 rounded-xl border ${borderColor} ${isDarkMode ? 'bg-purple-900/30 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`px-4 py-2 rounded-xl font-medium ${subTextColor} hover:bg-white/5 transition-colors`}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
