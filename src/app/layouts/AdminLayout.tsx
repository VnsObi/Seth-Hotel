import { Outlet, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { useEffect } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full">
        <div className="p-4 border-b flex items-center gap-4 bg-white/50 backdrop-blur-sm sticky top-0 z-10 w-full">
          <SidebarTrigger />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
