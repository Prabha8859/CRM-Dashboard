
import { X, LogOut } from 'lucide-react';

const LogoutModal = ({ isOpen, onClose, onConfirm, isDarkMode }) => {
  if (!isOpen) return null;

  const bgClass = isDarkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md rounded-2xl border shadow-2xl transform transition-all scale-100 ${bgClass}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-full bg-red-500/10 text-red-500">
              <LogOut size={24} />
            </div>
            <button onClick={onClose} className={`p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${subTextClass}`}>
              <X size={20} />
            </button>
          </div>

          <h3 className={`text-xl font-bold mb-2 ${textClass}`}>Confirm Logout</h3>
          <p className={`mb-6 ${subTextClass}`}>
            Are you sure you want to log out? You will need to sign in again to access your account.
          </p>

          <div className="flex gap-3 justify-end">
            <button 
              onClick={onClose}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-red-500/20"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
