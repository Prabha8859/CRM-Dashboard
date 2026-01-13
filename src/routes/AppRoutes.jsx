import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import StaffList from "../pages/staff/StaffList";
import InsuranceList from "../pages/insurance/InsuranceList";
import Login from "../pages/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Pages render their own layout (each page wraps with `DashboardLayout`) */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/staff" element={<StaffList />} />
      <Route path="/insurance" element={<InsuranceList />} />
    </Routes>
  );
}
