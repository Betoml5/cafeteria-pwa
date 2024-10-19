import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ open, setOpen }) => {
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

  return (
    <aside
      ref={drawerRef}
      className={`fixed z-50 top-0 right-0 bg-primary-color text-white w-96 min-h-screen overflow-y-auto
      transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        <button className="self-end" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu" />
        </button>
        <div className="flex flex-col items-center text-xl mt-4 space-y-2">
          <Link to="/admin">Inicio</Link>
          <Link to="/admin/categorias">Categorías</Link>
          <Link to="/admin/productos">Productos</Link>
          <Link to="/admin/actualizar-menu">Menú del día</Link>
          <button className="mt-4 text-left">Cerrar sesión</button>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
