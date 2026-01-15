
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CheckSquare, Clock, AlertCircle, Plus, MoreHorizontal, Calendar } from 'lucide-react';

const TeamTasks = () => {
  const { isDarkMode } = useOutletContext();

  const [tasks] = useState([
    { id: 1, title: 'Review Q1 Financial Report', assignee: 'Alice Freeman', due: 'Today', priority: 'High', status: 'In Progress' },
    { id: 2, title: 'Update Client Policy #4592', assignee: 'Bob Smith', due: 'Tomorrow', priority: 'Medium', status: 'Pending' },
    { id: 3, title: 'Prepare Presentation for Meeting', assignee: 'Charlie Davis', due: 'Feb 24', priority: 'High', status: 'Completed' },
    { id: 4, title: 'Fix Login Issue on Portal', assignee: 'Tech Team', due: 'Feb 25', priority: 'Critical', status: 'In Progress' },
    { id: 5, title: 'Email Marketing Campaign', assignee: 'Marketing Crew', due: 'Feb 28', priority: 'Low', status: 'Pending' },
  ]);

  const theme = {
    text: isDarkMode ? "text-white" : "text-slate-900",
    subText: isDarkMode ? "text-slate-400" : "text-slate-500",
    card: isDarkMode ? "bg-slate-900/50 border-slate-700" : "bg-white border-slate-200",
    hover: isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-slate-50",
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'text-red-600 bg-red-100 dark:bg-red-500/20 dark:text-red-400';
      case 'High': return 'text-orange-600 bg-orange-100 dark:bg-orange-500/20 dark:text-orange-400';
      case 'Medium': return 'text-blue-600 bg-blue-100 dark:bg-blue-500/20 dark:text-blue-400';
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700 dark:text-slate-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return <CheckSquare size={18} className="text-green-500" />;
      case 'In Progress': return <Clock size={18} className="text-blue-500" />;
      default: return <AlertCircle size={18} className="text-slate-400" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Team Tasks</h1>
          <p className={`text-sm ${theme.subText}`}>Manage and track team assignments.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
          <Plus size={16} />
          Add Task
        </button>
      </div>

      <div className={`rounded-2xl border ${theme.card} overflow-hidden shadow-sm`}>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {tasks.map((task) => (
            <div key={task.id} className={`p-4 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors ${theme.hover}`}>
              {/* Status Icon */}
              <div className="flex-shrink-0 mt-1 sm:mt-0">
                {getStatusIcon(task.status)}
              </div>

              {/* Task Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-sm font-semibold truncate ${theme.text} ${task.status === 'Completed' ? 'line-through opacity-60' : ''}`}>
                    {task.title}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <p className={`text-xs ${theme.subText}`}>
                  Assigned to <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>{task.assignee}</span>
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 sm:gap-6 text-xs">
                <div className={`flex items-center gap-1.5 ${theme.subText}`}>
                  <Calendar size={14} />
                  <span>{task.due}</span>
                </div>
                <div className={`px-2.5 py-1 rounded-full border ${
                  task.status === 'Completed' 
                    ? 'border-green-500/20 text-green-500 bg-green-500/5' 
                    : task.status === 'In Progress'
                    ? 'border-blue-500/20 text-blue-500 bg-blue-500/5'
                    : 'border-slate-500/20 text-slate-500 bg-slate-500/5'
                }`}>
                  {task.status}
                </div>
                <button className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 ${theme.subText}`}>
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={`p-4 border-t text-center ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <button className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                View All Tasks
            </button>
        </div>
      </div>
    </div>
  );
};
export default TeamTasks;
