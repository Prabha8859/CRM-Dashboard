export const dashboardConfig = {
  'Super Admin': {
    title: 'System Overview',
    stats: ['totalAdmins', 'totalStaff', 'totalTeams', 'totalLeads', 'activeLeads', 'closedLeads'],
    canSeeLeadsOf: 'ALL',
    actions: ['CREATE_ADMIN', 'CREATE_STAFF', 'BROADCAST_MSG'],
    sections: ['recentAdmins', 'recentLeads', 'topTeams', 'inactiveStaff']
  },

  'Admin': {
    title: 'Administration',
    stats: ['myStaffCount', 'myTeamCount', 'myTotalLeads', 'myActiveLeads', 'myClosedLeads'],
    canSeeLeadsOf: 'OWN',
    actions: ['CREATE_STAFF', 'ASSIGN_LEAD'],
    sections: ['myTeams', 'myStaff', 'recentLeads', 'lowPerformingStaff']
  },

  'Staff': {
    title: 'My Workspace',
    stats: ['myLeads', 'newLeads', 'inProgressLeads', 'closedLeads'],
    canSeeLeadsOf: 'SELF',
    actions: ['UPDATE_LEAD'],
    sections: ['todaysTasks', 'myRecentLeads', 'followUps']
  },

  'Team': {
    title: 'Team Performance',
    stats: ['teamTotalLeads', 'teamActiveLeads', 'teamClosedLeads', 'teamMembersCount'],
    canSeeLeadsOf: 'TEAM',
    actions: [],
    sections: ['teamMembersList', 'recentTeamLeads', 'pendingLeads']
  }
};

export const getRoleConfig = (role) => {
  return dashboardConfig[role] || dashboardConfig['Super Admin'];
};