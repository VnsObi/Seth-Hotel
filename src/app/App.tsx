import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminBookings } from "./pages/admin/AdminBookings";
import { AdminGuests } from "./pages/admin/AdminGuests";
import { AdminSettings } from "./pages/admin/AdminSettings";
import { Login } from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="guests" element={<AdminGuests />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
