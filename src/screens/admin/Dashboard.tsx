import DayMenu from "../../components/menu/DayMenu";
import products from "../../data.json";
import categorias from "../../categorias.json";
import CategoriasTable from "../../components/admin/categoria/CategoriasTable";
import OutOfStockProducts from "../../components/admin/productos/OutOfStockProducts";
const Dashboard = () => {
  return (
    <div className="">
      <div>
        <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
        <div className="flex overflow-x-auto dayMenu snap-proximity overscroll-x-contain">
          <DayMenu products={products} />
        </div>
      </div>
      <div className="p-4">
        <CategoriasTable categorias={categorias} />
      </div>
      <div className="p-4">
        <OutOfStockProducts />
      </div>
    </div>
  );
};

export default Dashboard;
