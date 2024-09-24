import DayMenu from "../../components/menu/DayMenu";
import products from "../../data.json";
import categorias from "../../categorias.json";
import Modal from "../../components/shared/Modal";
import { useState } from "react";
import CreateCategoriaForm from "../../components/admin/forms/CreateCategoriaForm";
import ProductsTable from "../../components/admin/productos/ProductsTable";
import { Link } from "react-router-dom";
import CategoriasTable from "../../components/admin/categoria/CategoriasTable";
import SelectedModal from "../../components/admin/SelectedModal";
const Dashboard = () => {
  const [selectedModal, setSelectedModal] = useState("");

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
          <DayMenu products={products} />
        </div>
      </div>
      <div className="col-span-full p-4 lg:col-span-8">
        <p className="text-2xl mb-2">Productos</p>
        <ProductsTable products={products} />
      </div>
      <div className=" col-span-full  p-4 lg:col-span-4">
        <p className="text-2xl mb-2">Categorias</p>
        <CategoriasTable categorias={categorias} />
      </div>
    </div>
  );
};

export default Dashboard;
