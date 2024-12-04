import { Link, useSearchParams } from "react-router-dom";
import useProductos from "../hooks/productos/useProductos";
import Product from "../components/menu/Product";
import "../lib/initSignalRConnection";
import connection from "../lib/hub";
import { useEffect, useState } from "react";
import { IProducto } from "../types";
import Loader from "../components/shared/Loader";

const ProductsByCategory = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useProductos();
  const category = searchParams.get("query");

  const [products, setProducts] = useState<IProducto[]>([]);

  useEffect(() => {
    // Filtra los productos cuando se cargan los datos
    if (data) {
      setProducts(
        data.filter((product) => product.categoria.nombre === category?.replace(/-/g, " "))
      );
    }
  }, [data, category, products]);

  useEffect(() => {
    // Escucha el evento de disponibilidad
    connection.on("disponibilidad", (data) => {
      setProducts((prevProducts) => {
        return prevProducts.map((product) =>
          product.id === data.id
            ? { ...product, disponible: data.disponibilidad }
            : product
        );
      });
    });

    // Limpia el evento cuando el componente se desmonte
    return () => {
      connection.off("disponibilidad");
    };
  }, [category]);

  if (isLoading) return <Loader />;
  if (isError) return <div>Error...</div>;

  return (
    <div className="p-4 ">
      <Link to="/" className="bg-black  text-xl">
        <img src="/arrow-back.svg" alt="arrow-back" className="w-10 h-10" />
      </Link>
      <h2 className="text-4xl font-semibold mb-4">
        {category?.replace(/-/g, " ")}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start  ">
        {products?.map((producto) => (
          <Product product={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
