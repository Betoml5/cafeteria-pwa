import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-primary-color text-white">
        <Link to="/admin" className="flex items-center gap-x-2">
          <img src="/tecLogo.png" alt="Logo de TECNM" />
          <h1 className="text-2xl font-bold">
            ITESRC Cafetería - Administración
          </h1>
        </Link>
        <button className="btn bg-gray-800 text-md">Cerrar sesión</button>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
