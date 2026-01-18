import React, { useState } from 'react';
import { X, Plus, Trash2, Tag } from 'lucide-react';

const PackageCategoriesModal = ({ isOpen, onClose, isDarkMode }) => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'General', count: 5 },
    { id: 2, name: 'Senior Citizen', count: 3 },
    { id: 3, name: 'Women Health', count: 4 },
    { id: 4, name: 'Corporate', count: 2 },
  ]);
  const [newCategory, setNewCategory] = useState('');

  if (!isOpen) return null;

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory, count: 0 }]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const theme = {
    bg: isDarkMode ? 'bg-[#022c33]' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    inputBg: isDarkMode ? 'bg-[#055b65] border-[#45828b]/50 text-white' : 'bg-slate-50 border-slate-200 text-slate-900',
    borderColor: isDarkMode ? 'border-[#45828b]/30' : 'border-slate-200',
    itemBg: isDarkMode ? 'bg-[#055b65]/30' : 'bg-slate-50',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md rounded-2xl shadow-2xl ${theme.bg} border ${theme.borderColor} overflow-hidden`}>
        <div className={`px-6 py-4 border-b ${theme.borderColor} flex justify-between items-center`}>
          <h2 className={`text-xl font-bold ${theme.text}`}>Manage Categories</h2>
          <button onClick={onClose} className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${theme.text}`}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleAddCategory} className="flex gap-2">
            <input 
              type="text" 
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New Category Name" 
              className={`flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 ${theme.inputBg}`}
            />
            <button type="submit" className="p-2 bg-[#1bd488] hover:bg-[#1bd488]/90 text-[#055b65] rounded-xl transition-colors">
              <Plus size={20} />
            </button>
          </form>

          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {categories.map(cat => (
              <div key={cat.id} className={`flex items-center justify-between p-3 rounded-xl ${theme.itemBg}`}>
                <div className="flex items-center gap-3">
                  <Tag size={16} className={isDarkMode ? 'text-[#1bd488]' : 'text-blue-600'} />
                  <div>
                    <p className={`font-medium ${theme.text}`}>{cat.name}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{cat.count} Packages</p>
                  </div>
                </div>
                <button onClick={() => handleDeleteCategory(cat.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCategoriesModal;