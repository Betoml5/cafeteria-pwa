import { useSearchParams } from "react-router-dom";
import useProductos from "../hooks/productos/useProductos";
import Product from "../components/menu/Product";

const ProductsByCategory = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading, isError } = useProductos();

  const category = searchParams.get("query");
  const products = data?.filter(
    (product) => product.categoria.nombre === category
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="p-4 ">
      <h2 className="text-4xl font-semibold mb-4">{category}</h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start  ">
        {products?.map((producto) => (
          <Product product={producto} key={producto.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
