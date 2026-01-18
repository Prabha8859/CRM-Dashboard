import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layout/DasbaordLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import StaffList from "../pages/staff/StaffList";
import InsuranceList from "../pages/insurance/InsuranceList";
import Login from "../pages/auth/Login";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/notifications/Notifications";
import PlaceholderPage from "./PlaceholderPage";
import TeamList from "../pages/teams/TeamList";
import RolesList from "../components/Staff/RolesList";
import RolePermissions from "../components/Staff/RolePermissions";
import TeamDetails from "../pages/teams/TeamDetails";
import Employee from "../pages/employee/Employee";
import Offerslists from "../pages/offers/Offerslist";
import Healthtests from "../pages/health-tests/Healthtests";
import HealthPackages from "../pages/healthpackages/Healthpackages";
import UserAssignments from "../pages/assignments/UserAssignments";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stats" element={<PlaceholderPage title="Stats" />} />

        {/* Staff Management */}
        <Route path="/staff/list" element={<StaffList />} />
        <Route path="/staff/add" element={<PlaceholderPage title="Add Staff" />} />
        <Route path="/staff/edit" element={<PlaceholderPage title="Edit Staff" />} />
        {/* Redirect /staff to /staff/list */}
        <Route path="/staff" element={<Navigate to="/staff/list" replace />} />

        {/* Roles & Permissions */}
        <Route path="/roles/list" element={<RolesList />} />
        <Route path="/roles/create" element={<Navigate to="/roles/list" replace />} />
        <Route path="/roles/permissions" element={<RolePermissions />} />
        <Route path="/roles" element={<Navigate to="/roles/list" replace />} />

        {/* Teams */}
        <Route path="/teams/list" element={<TeamList />} />
        <Route path="/teams/details" element={<TeamDetails />} />
        <Route path="/teams" element={<Navigate to="/teams/list" replace />} />

        {/* Employees */}
        <Route path="/employees/list" element={<Employee />} />
        <Route path="/employees" element={<Navigate to="/employees/list" replace />} />

        {/* Assignments */}
        <Route path="/assignments" element={<UserAssignments />} />

        {/* Insurance */}
        <Route path="/insurance/list" element={<InsuranceList />} />
        <Route path="/insurance/assign" element={<PlaceholderPage title="Assign Insurance" />} />
        <Route path="/insurance" element={<Navigate to="/insurance/list" replace />} />

        {/* Offers */}
        <Route path="/offers/list" element={<Offerslists />} />
        <Route path="/offers/assigned" element={<PlaceholderPage title="Assigned Offers" />} />
        <Route path="/offers" element={<Navigate to="/offers/list" replace />} />

        {/* Health Tests */}
        <Route path="/health-tests/list" element={<Healthtests />} />
        <Route path="/health-tests/assign" element={<PlaceholderPage title="Assign Test" />} />
        <Route path="/health-tests" element={<Navigate to="/health-tests/list" replace />} />

        {/* Health Packages */}
        <Route path="/health-packages/list" element={<HealthPackages />} />
        <Route path="/health-packages/manage" element={<PlaceholderPage title="Add / Remove Tests" />} />
        <Route path="/health-packages/assign" element={<PlaceholderPage title="Assign Package" />} />
        <Route path="/health-packages" element={<Navigate to="/health-packages/list" replace />} />

        {/* Common Pages */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  );
}
