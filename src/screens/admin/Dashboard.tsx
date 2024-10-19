import { useState } from "react";

import useProductos from "../../hooks/productos/useProductos";
import useCategorias from "../../hooks/categorias/useCategorias";
import Loader from "../../components/shared/Loader";
import useMenuDia from "../../hooks/menu/useMenuDia";
import Product from "../../components/admin/productos/Product";
import Modal from "../../components/shared/Modal";
import CreateProductoForm from "../../components/admin/forms/CreateProductoForm";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const productos = useProductos();
  const categorias = useCategorias();
  const menu = useMenuDia();

  if (productos.isLoading || categorias.isLoading || menu.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 p-4 relative ">
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Agregar producto"
      >
        <CreateProductoForm />
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute bottom-2 right-10 py-4 px-6 bg-amber-900 rounded-full text-white text-3xl hover:opacity-90"
      >
        +
      </button>
      <div className="col-span-12 md:col-span-8">
        <div className="flex gap-x-2 ">
          <p className="px-4 py-1 bg-white rounded-md border border-gray-400">
            Inicio
          </p>
          <p className="flex items-center">|</p>
          {categorias.data?.map((item) => (
            <p className="px-4 py-1 bg-white rounded-md border border-gray-400">
              {item.nombre}
            </p>
          ))}
        </div>
      </div>

      <h3 className="col-span-full text-2xl font-semibold my-4">
        Gestión de productos
      </h3>

      <div className="col-span-full">
        {categorias.data?.map((categoria) => (
          <div>
            <p>{categoria.nombre}</p>
            {categoria.productos.length === 0 && (
              <p className="text-center">No hay productos</p>
            )}
            <div className="flex">
              {categoria.productos.map((producto) => (
                <Product producto={producto} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
