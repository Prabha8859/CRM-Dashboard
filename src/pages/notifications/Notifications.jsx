import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Bell, Check, Archive, Trash2 } from 'lucide-react';

const Notifications = () => {
  const { isDarkMode } = useOutletContext();

  const cardClass = isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200";
  const textClass = isDarkMode ? "text-white" : "text-slate-900";
  const subTextClass = isDarkMode ? "text-slate-400" : "text-slate-500";

  const notifications = [
    { id: 1, text: "New staff member 'Alex Johnson' was added to the team.", time: "5 min ago", unread: true },
    { id: 2, text: "Your weekly revenue report for 'Q4 2025' is ready for download.", time: "1 hour ago", unread: false },
    { id: 3, text: "A system-wide update is scheduled for tonight at 11:00 PM PST.", time: "4 hours ago", unread: false },
    { id: 4, text: "Insurance policy #INS-7890 for 'Client Corp' is about to expire.", time: "1 day ago", unread: true },
    { id: 5, text: "New login detected from a new device in 'New York, USA'.", time: "2 days ago", unread: false },
    { id: 6, text: "Task 'Finalize Q1 budget' is overdue by 3 days.", time: "3 days ago", unread: true },
    { id: 7, text: "You have been mentioned in a comment on the 'Project Phoenix' board.", time: "5 days ago", unread: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className={`text-2xl font-bold ${textClass}`}>Notifications</h2>
          <p className={`text-sm ${subTextClass}`}>View and manage all your system alerts.</p>
        </div>
        <div className="flex gap-2">
          <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
            <Check size={16} /> Mark all as read
          </button>
          <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}>
            <Archive size={16} /> Archive all
          </button>
        </div>
      </div>

      <div className={`rounded-2xl border ${cardClass} shadow-sm overflow-hidden`}>
        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {notifications.map((notif) => (
            <li key={notif.id} className={`p-4 flex items-start gap-4 transition-colors group ${notif.unread ? (isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50/50') : ''}`}>
              <div className={`mt-1 p-2 rounded-full ${notif.unread ? 'bg-blue-500/10 text-blue-500' : (isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500')}`}>
                <Bell size={18} />
              </div>
              <div className="flex-1">
                <p className={`text-sm ${textClass}`}>{notif.text}</p>
                <p className={`text-xs mt-1 ${subTextClass}`}>{notif.time}</p>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button title="Mark as read" className={`p-2 rounded-lg hover:bg-green-500/10 text-green-500 transition-colors`}>
                  <Check size={16} />
                </button>
                <button title="Delete" className={`p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors`}>
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className={`p-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} text-center`}>
            <button className={`text-sm font-medium text-blue-500 hover:text-blue-600`}>
                Load More
            </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;