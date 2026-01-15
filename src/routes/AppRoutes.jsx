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
      </Route>
    </Routes>
  );
}
