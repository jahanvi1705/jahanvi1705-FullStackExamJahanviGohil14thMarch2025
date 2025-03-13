// src/layout/AdminLayout.tsx

import Sidebar from "../app/components/sidebar";
import Topbar from "../app/components/topbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
    </>
   
  );
};

export default AdminLayout;
