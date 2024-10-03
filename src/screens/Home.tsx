import DayMenu from "../components/menu/DayMenu";
import Hero from "../components/Hero";
import Categories from "../components/menu/Categories";
import { IMenuProduct } from "../types";
import Loader from "../components/shared/Loader";
import useMenuDia from "../hooks/menu/useMenuDia";
import useProductos from "../hooks/productos/useProductos";
import Product from "../components/menu/Product";
import { useState } from "react";
const Home = () => {
  const [search, setSearch] = useState("");

  const menu = useMenuDia();
  const productos = useProductos();

  if (menu.isLoading || productos.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  const catalogo = productos.data?.filter(
    (item) =>
      !menu.data?.find((menuItem) => menuItem.idProducto === item.id) &&
      item.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Hero />
      <div className="p-4">
        <Categories />
        <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
        <div className="flex gap-x-2 overflow-x-auto dayMenu snap-proximity overscroll-x-contain md:flex-wrap md:justify-center">
          <DayMenu products={menu.data as IMenuProduct[]} />
        </div>
        <p className="text-3xl font-semibold mb-2 mt-4">Otros productos</p>
        <div className="flex flex-col  ">
          <div>
            <div className="relative">
              <img
                className="absolute left-4 top-1/2 -translate-y-1/2"
                src="/search.svg"
                alt="Buscar productos"
              />
              <input
                type="text"
                className="input pl-10 w-full lg:w-1/6"
                placeholder="Buscar"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-x-2 overflow-x-auto mt-4 dayMenu ">
            {catalogo?.length === 0 && (
              <div>
                <p className="text-xl mt-4">
                  No hay productos que coincidan con {search}
                </p>
              </div>
            )}
            {catalogo?.map((product) => (
              <Product product={product} />
            ))}
            {/* <Product product={products[0]} />
            <Product product={products[1]} />
            <Product product={products[2]} />
            <Product product={products[3]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
