import React from 'react';
import { Activity, AlertTriangle, AlertCircle, UserPlus, Package, Gift } from 'lucide-react';
import Card from '../../ui/Card';

const RecentActivity = ({ isDarkMode }) => {
  const activities = [
    { text: 'Staff "Amit" added', time: '2 hrs ago', icon: UserPlus, color: 'bg-green-500' },
    { text: 'Package "Heart Care" assigned', time: '4 hrs ago', icon: Package, color: 'bg-blue-500' },
    { text: 'Offer "Summer Sale" created', time: '5 hrs ago', icon: Gift, color: 'bg-purple-500' },
    { text: 'Dr. Sarah updated status', time: '1 day ago', icon: Activity, color: 'bg-orange-500' },
  ];

  const alerts = [
    { text: '3 Offers expiring soon', type: 'warning' },
    { text: '5 Employees unassigned', type: 'critical' },
    { text: 'System maintenance scheduled', type: 'info' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card isDarkMode={isDarkMode}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Recent Activity</h3>
          <Activity size={20} className="text-slate-400" />
        </div>
        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className={`mt-1 w-2 h-2 rounded-full ${activity.color}`}></div>
              <div className="flex-1">
                <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{activity.text}</p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card isDarkMode={isDarkMode}>
        <div className="flex items-center justify-between mb-6">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>System Alerts</h3>
          <AlertTriangle size={20} className="text-amber-500" />
        </div>
        <div className="space-y-3">
          {alerts.map((alert, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border ${alert.type === 'critical' ? 'bg-red-500/10 border-red-500/20 text-red-600' : alert.type === 'warning' ? 'bg-amber-500/10 border-amber-500/20 text-amber-600' : 'bg-blue-500/10 border-blue-500/20 text-blue-600'}`}>
              <AlertCircle size={18} />
              <span className="text-sm font-medium">{alert.text}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RecentActivity;
