import { FC } from "react";
import { Link } from "react-router-dom";

interface DrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Drawer: FC<DrawerProps> = ({ open, setOpen }) => {
  return (
    <aside
      className={`fixed top-0 right-0 bg-primary-color text-white w-96 min-h-screen overflow-y-auto
      transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        <button className="self-end" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu" />
        </button>
        <div className="flex flex-col items-center mt-4 space-y-2">
          <Link to="/admin">Inicio</Link>
          <Link to="/admin/categorias">Categorías</Link>
          <Link to="/admin/productos">Productos</Link>
          <Link to="/admin/menu-dia">Menú del día</Link>
          <button className="mt-4 text-left">Cerrar sesión</button>
        </div>
      </div>
    </aside>
  );
};

export default Drawer;
