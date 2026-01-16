import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SuperAdminProfile from '../../components/allprofile/SuperAdminProfile';
import AdminProfile from '../../components/allprofile/AdminProfile';
import StaffProfile from '../../components/allprofile/StaffProfile';
import TeamProfile from '../../components/allprofile/TeamProfile';
import { getUserDetails } from '../../components/allprofile/utils/userUtils';

const Profile = () => {
  const { isDarkMode, userRole } = useOutletContext();
  const user = getUserDetails(userRole);

  const renderProfile = () => {
    switch (userRole) {
      case 'Super Admin': return <SuperAdminProfile isDarkMode={isDarkMode} user={user} />;
      case 'Admin': return <AdminProfile isDarkMode={isDarkMode} user={user} />;
      case 'Staff': return <StaffProfile isDarkMode={isDarkMode} user={user} />;
      case 'Team': return <TeamProfile isDarkMode={isDarkMode} user={user} />;
      default: return <div className={`text-center p-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Profile not found</div>;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {renderProfile()}
    </div>
  );
};

export default Profile;