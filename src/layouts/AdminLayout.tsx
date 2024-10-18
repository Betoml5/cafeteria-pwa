import { Link, Outlet } from "react-router-dom";
import Drawer from "../components/admin/shared/Drawer";
import { useState } from "react";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-primary-color text-white">
        <Link to="/admin" className="flex items-center gap-x-2">
          <h1 className="text-2xl font-bold">ITESRC</h1>
        </Link>
        <button onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu" />
        </button>
        <Drawer open={open} setOpen={setOpen} />
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
