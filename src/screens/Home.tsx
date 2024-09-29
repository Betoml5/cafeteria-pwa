import DayMenu from "../components/menu/DayMenu";
import Hero from "../components/Hero";
import Categories from "../components/menu/Categories";
import useProductos from "../hooks/productos/useProductos";
import { IProducto } from "../types";
import Loader from "../components/shared/Loader";
const Home = () => {
  const products = useProductos();
  console.log(products);

  if (products.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  return (
    <div>
      <Hero />
      <div className="p-4">
        <Categories />
        <h1 className="text-center font-bold text-5xl my-4">Menú del dia</h1>
        <div className="flex gap-x-2 overflow-x-auto dayMenu snap-proximity overscroll-x-contain md:flex-wrap md:justify-center">
          <DayMenu products={products.data as IProducto[]} />
        </div>
        <p className="text-3xl font-semibold mb-2 mt-4">Otros productos</p>
        <div className="flex flex-col">
          <div>
            <div className="relative">
              <img
                className="absolute left-4 top-1/2 -translate-y-1/2"
                src="/search.svg"
                alt="Buscar productos"
              />
              <input
                type="text"
                className="input pl-10 w-full"
                placeholder="Buscar"
              />
            </div>
            <div className="flex gap-x-2 my-4">
              <label
                htmlFor="all"
                onChange={() => {
                  console.log("object");
                }}
              >
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="sr-only peer"
                />

                <span className="text-sm font-medium bg-primary-color px-4 py-2 text-white rounded-md">
                  Todos
                </span>
              </label>
              <label
                htmlFor="all"
                onChange={() => {
                  console.log("object");
                }}
              >
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="sr-only peer"
                />

                <span className="text-sm font-medium bg-primary-color px-4 py-2 text-white rounded-md">
                  Bebidas
                </span>
              </label>
              <label
                htmlFor="all"
                onChange={() => {
                  console.log("object");
                }}
              >
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  className="sr-only peer"
                />

                <span className="text-sm font-medium bg-primary-color px-4 py-2 text-white rounded-md">
                  Fritos
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-x-2 overflow-x-auto dayMenu">
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
