import DayMenu from "../../components/menu/DayMenu";
import { useState } from "react";
import ProductsTable from "../../components/admin/productos/ProductsTable";
import { Link } from "react-router-dom";
import CategoriasTable from "../../components/admin/categoria/CategoriasTable";
import SelectedModal from "../../components/admin/SelectedModal";
import useProductos from "../../hooks/productos/useProductos";
import { ICategoria, IProducto } from "../../types";
import useCategorias from "../../hooks/categorias/useCategorias";
import { MODALS_NAMES } from "../../constants";
const Dashboard = () => {
  const [selectedModal, setSelectedModal] = useState("");
  const productos = useProductos();
  const categorias = useCategorias();

  if (productos.isLoading || categorias.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-12 ">
      <SelectedModal
        selectedModal={selectedModal}
        isOpen={selectedModal !== ""}
        onClose={() => setSelectedModal("")}
      />
      <div className="col-span-full  lg:col-span-full">
        <div className="flex flex-col items-center  my-4 mx-4 ">
          <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
          <Link to="/admin/actualizar-menu" className="btn mx-4">
            Modificar menu
          </Link>
        </div>
        <div className="flex gap-x-2 overflow-x-auto dayMenu mx-2">
          <DayMenu products={productos.data as IProducto[]} />
        </div>
      </div>
      <div className="col-span-full p-4 lg:col-span-8">
        <p className="text-2xl mb-2">Productos</p>
        <ProductsTable
          productos={productos.data as IProducto[]}
          onAdd={() => setSelectedModal(MODALS_NAMES.ADD_PRODUCT)}
        />
      </div>
      <div className=" col-span-full  p-4 lg:col-span-4">
        <p className="text-2xl mb-2">Categorias</p>
        <CategoriasTable categorias={categorias.data as ICategoria[]} />
      </div>
    </div>
  );
};

export default Dashboard;
