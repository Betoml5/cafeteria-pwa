import DayMenu from "../components/menu/DayMenu";
import Categories from "../components/menu/Categories";
import { IMenuProduct } from "../types";
import Loader from "../components/shared/Loader";
import useMenuDia from "../hooks/menu/useMenuDia";
import useProductos from "../hooks/productos/useProductos";
const Home = () => {
  const menu = useMenuDia();
  const productos = useProductos();

  if (menu.isLoading || productos.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  return (
    <div>
      <div className="p-4">
        {/* <Categories /> */}
        <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
        <div className="mx-auto ">
          <DayMenu products={menu.data as IMenuProduct[]} />
        </div>
        <div className="my-4">
          <h1 className="text-left font-bold text-3xl my-4">Categorías</h1>
          <div className="flex flex-wrap   gap-x-1 lg:gap-x-2 md:justify-start">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
