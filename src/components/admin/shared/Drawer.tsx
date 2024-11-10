/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/auth/useAuth";

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ open, setOpen }) => {
  const auth = useAuth();

  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <aside
      ref={drawerRef}
      className={`fixed z-50 top-0 right-0 bg-primary-color text-white w-full min-h-screen overflow-y-auto
      transform transition-transform duration-300 ease-in-out md:w-96  ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        <h3 className="text-center text-2xl font-bold">ITESRC</h3>
        <button className="self-end" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu" />
        </button>
        {auth && (
          <div className="flex flex-col items-center text-xl mt-4 space-y-2">
            <Link to="/admin" onClick={handleCloseDrawer}>
              Inicio
            </Link>
            <Link to="/admin/categorias" onClick={handleCloseDrawer}>
              Categorías
            </Link>
            <Link to="/admin" onClick={handleCloseDrawer}>
              Productos
            </Link>
            <Link to="/admin/actualizar-menu" onClick={handleCloseDrawer}>
              Menú del día
            </Link>
            <button className="mt-4 text-left" onClick={handleCloseDrawer}>
              Cerrar sesión
            </button>
          </div>
        )}
        {!auth && (
          <div className="flex flex-col items-center text-xl mt-4 space-y-2">
            <Link to="/" onClick={handleCloseDrawer}>
              Inicio
            </Link>
            <Link to="/login" onClick={handleCloseDrawer}>
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Drawer;
