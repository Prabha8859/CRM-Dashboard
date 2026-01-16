// Mock Data Service
export const fetchDashboardData = async ({ scope, role }) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const mockDatabase = {
    'Super Admin': {
      totalAdmins: { value: '12', trend: 2, label: 'Total Admins' },
      totalStaff: { value: '142', trend: 5, label: 'Total Staff' },
      totalTeams: { value: '24', trend: 0, label: 'Total Teams' },
      totalLeads: { value: '4,529', trend: 15, label: 'Total Leads' },
      activeLeads: { value: '1,240', trend: 8, label: 'Active Leads' },
      closedLeads: { value: '3,289', trend: 12, label: 'Closed Leads' },
      // Table Data
      recentAdmins: [
        { id: 1, name: 'John Doe', role: 'Admin', date: '2 days ago' },
        { id: 2, name: 'Sarah Smith', role: 'Admin', date: '5 days ago' }
      ],
      recentLeads: [
        { id: 101, client: 'Acme Corp', amount: '$12,000', status: 'New' },
        { id: 102, client: 'Global Tech', amount: '$8,500', status: 'In Progress' }
      ],
      topTeams: [
        { name: 'Alpha Team', leads: 150, revenue: '$450k' },
        { name: 'Beta Squad', leads: 120, revenue: '$320k' }
      ],
      inactiveStaff: [
        { name: 'Mike Ross', daysInactive: 15 },
        { name: 'Rachel Zane', daysInactive: 10 }
      ]
    },
    'Admin': {
      myStaffCount: { value: '24', trend: 2, label: 'My Staff' },
      myTeamCount: { value: '5', trend: 0, label: 'My Teams' },
      myTotalLeads: { value: '850', trend: 12, label: 'Total Leads' },
      myActiveLeads: { value: '120', trend: 5, label: 'Active Leads' },
      myClosedLeads: { value: '730', trend: 15, label: 'Closed Leads' },
      // Table Data
      myTeams: [
        { name: 'Sales Team A', members: 8, performance: 'High' },
        { name: 'Support Team B', members: 6, performance: 'Medium' }
      ],
      myStaff: [
        { name: 'Alice', role: 'Sales', status: 'Active' },
        { name: 'Bob', role: 'Support', status: 'Active' }
      ],
      recentLeads: [
        { id: 201, client: 'Stark Ind', amount: '$50,000', status: 'Negotiation' },
        { id: 202, client: 'Wayne Ent', amount: '$75,000', status: 'Closed' }
      ],
      lowPerformingStaff: [
        { name: 'Gary', leadsClosed: 2, target: 10 },
        { name: 'Larry', leadsClosed: 1, target: 10 }
      ]
    },
    'Staff': {
      myLeads: { value: '45', trend: 5, label: 'Total Leads' },
      newLeads: { value: '12', trend: 2, label: 'New Leads' },
      inProgressLeads: { value: '28', trend: 0, label: 'In Progress' },
      closedLeads: { value: '5', trend: 1, label: 'Closed Leads' },
      // Table Data
      todaysTasks: [
        { task: 'Call Client X', time: '10:00 AM', priority: 'High' },
        { task: 'Email Proposal Y', time: '2:00 PM', priority: 'Medium' }
      ],
      myRecentLeads: [
        { client: 'John Doe', interest: 'Life Insurance', status: 'New' },
        { client: 'Jane Smith', interest: 'Auto Insurance', status: 'Contacted' }
      ],
      followUps: [
        { client: 'Mr. Anderson', date: 'Tomorrow', notes: 'Discuss premium' }
      ]
    },
    'Team': {
      teamTotalLeads: { value: '320', trend: 8, label: 'Team Leads' },
      teamActiveLeads: { value: '85', trend: 4, label: 'Active' },
      teamClosedLeads: { value: '235', trend: 10, label: 'Closed' },
      teamMembersCount: { value: '8', trend: 0, label: 'Members' },
      // Table Data
      teamMembersList: [
        { name: 'Sarah', role: 'Lead', activeLeads: 15 },
        { name: 'Mike', role: 'Member', activeLeads: 12 }
      ],
      recentTeamLeads: [
        { client: 'Tech Solutions', owner: 'Sarah', status: 'In Progress' },
        { client: 'Retail Inc', owner: 'Mike', status: 'New' }
      ],
      pendingLeads: [
        { client: 'Pending Co', daysOpen: 5, owner: 'Unassigned' }
      ]
    }
  };

  // Return data specific to the role/scope
  return mockDatabase[role] || mockDatabase['Super Admin'];
};