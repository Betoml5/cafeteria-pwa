import DayMenu from "../../components/menu/DayMenu";
import { useState } from "react";
import ProductsTable from "../../components/admin/productos/ProductsTable";
import { Link } from "react-router-dom";
import CategoriasTable from "../../components/admin/categoria/CategoriasTable";
import SelectedModal from "../../components/admin/SelectedModal";
import useProductos from "../../hooks/productos/useProductos";
import { ICategoria, IMenuProduct, IProducto } from "../../types";
import useCategorias from "../../hooks/categorias/useCategorias";
import { MODALS_NAMES } from "../../constants";
import Loader from "../../components/shared/Loader";
import useMenuDia from "../../hooks/menu/useMenuDia";
import Product from "../../components/admin/productos/Product";
const Dashboard = () => {
  const [selectedModal, setSelectedModal] = useState("");
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
    <div className="grid grid-cols-12 p-4">
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
