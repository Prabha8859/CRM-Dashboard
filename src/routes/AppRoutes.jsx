import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import StaffList from "../pages/staff/StaffList";
import InsuranceList from "../pages/insurance/InsuranceList";
import Login from "../pages/auth/Login";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";
import Profile from "../pages/profile/Profile";
import Notifications from "../pages/notifications/Notifications";
import PlaceholderPage from "./PlaceholderPage";
import AdminList from "../pages/admin/AdminList";
import ClaimsBoard from "../pages/claims/ClaimsBoard";
import TeamList from "../pages/teams/TeamList";
import Messaging from "../pages/messaging/Messaging";
import PolicyList from "../pages/policies/PolicyList";
import CustomerList from "../pages/customers/CustomerList";
import TeamTasks from "../pages/tasks/TeamTasks";
import PerformanceMetrics from "../pages/performance/PerformanceMetrics";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<StaffList />} />
        <Route path="/insurance" element={<InsuranceList />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        
        {/* New Role-Based Routes */}
        <Route path="/admins" element={<AdminList />} />
        <Route path="/teams" element={<TeamList />} />
        <Route path="/policies" element={<PolicyList />} />
        <Route path="/claims" element={<ClaimsBoard />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/my-claims" element={<PlaceholderPage title="My Claims" />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/team-tasks" element={<TeamTasks />} />
        <Route path="/performance" element={<PerformanceMetrics />} />
      </Route>
    </Routes>
  );
}
