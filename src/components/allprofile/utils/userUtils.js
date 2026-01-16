export const getUserDetails = (role) => {
  switch(role) {
    case 'Super Admin': return { name: 'Super Admin', email: 'super.admin@crm.com', initials: 'SA', role: 'Super Admin', department: 'Executive' };
    case 'Admin': return { name: 'Admin User', email: 'admin@crm.com', initials: 'AD', role: 'Admin', department: 'Operations' };
    case 'Staff': return { name: 'Staff Member', email: 'staff@crm.com', initials: 'SM', role: 'Staff', department: 'Sales' };
    case 'Team': return { name: 'Team Lead', email: 'team.lead@crm.com', initials: 'TL', role: 'Team', department: 'Development' };
    default: return { name: 'John Doe', email: 'user@crm.com', initials: 'JD', role: 'User', department: 'General' };
  }
};