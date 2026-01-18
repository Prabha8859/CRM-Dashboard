import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Bell, CheckCircle, AlertTriangle, Info, Clock, Trash2 } from 'lucide-react';
import DashboardHeader from '../../ui/Header/DashboardHeader';

const Notifications = () => {
  const { isDarkMode, userRole } = useOutletContext();
  
  // Mock Notifications Data
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'info', title: 'New Staff Added', message: 'Rahul Sharma has joined the Engineering team.', time: '10 mins ago', read: false },
    { id: 2, type: 'success', title: 'Report Generated', message: 'Weekly revenue report is ready for download.', time: '1 hour ago', read: true },
    { id: 3, type: 'warning', title: 'System Update', message: 'Scheduled maintenance at 2:00 AM UTC.', time: '4 hours ago', read: true },
    { id: 4, type: 'alert', title: 'High Usage Alert', message: 'Server CPU usage exceeded 90%.', time: 'Yesterday', read: true },
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle size={20} className="text-green-500" />;
      case 'warning': return <AlertTriangle size={20} className="text-amber-500" />;
      case 'alert': return <Bell size={20} className="text-red-500" />;
      default: return <Info size={20} className="text-blue-500" />;
    }
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  const clearAll = () => {
    setNotifications([]);
  };

  const theme = {
    text: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    cardBg: isDarkMode ? 'bg-[#022c33] border-[#45828b]/30' : 'bg-white border-slate-200',
    itemBg: isDarkMode ? 'hover:bg-[#055b65]/30' : 'hover:bg-slate-50',
    unreadBg: isDarkMode ? 'bg-[#055b65]/20' : 'bg-blue-50/50',
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <DashboardHeader 
        title="Notifications" 
        subtitle="View your system alerts and messages."
        userRole={userRole}
        isDarkMode={isDarkMode}
      >
        <div className="flex gap-2">
          <button onClick={markAllRead} className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isDarkMode ? 'text-[#1bd488] hover:bg-[#1bd488]/10' : 'text-blue-600 hover:bg-blue-50'}`}>
            Mark all read
          </button>
          <button onClick={clearAll} className="px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2">
            <Trash2 size={16} /> Clear all
          </button>
        </div>
      </DashboardHeader>

      <div className={`rounded-2xl border overflow-hidden ${theme.cardBg}`}>
        {notifications.length > 0 ? (
          <div className="divide-y divide-gray-200/10">
            {notifications.map((notif) => (
              <div key={notif.id} className={`p-4 flex gap-4 transition-colors ${theme.itemBg} ${!notif.read ? theme.unreadBg : ''}`}>
                <div className={`mt-1 p-2 rounded-full ${isDarkMode ? 'bg-black/20' : 'bg-slate-100'}`}>
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-semibold ${theme.text}`}>{notif.title}</h3>
                    <span className={`text-xs flex items-center gap-1 ${theme.subText}`}>
                      <Clock size={12} /> {notif.time}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${theme.subText}`}>{notif.message}</p>
                </div>
                {!notif.read && (
                  <div className="mt-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <Bell size={48} className={`mx-auto mb-4 ${isDarkMode ? 'text-slate-700' : 'text-slate-300'}`} />
            <p className={theme.subText}>No notifications to show</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Notifications;