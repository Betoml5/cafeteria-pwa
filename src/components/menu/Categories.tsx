import { Link } from "react-router-dom";
import useCategorias from "../../hooks/categorias/useCategorias";
import Loader from "../shared/Loader";

const Categories = () => {
  const categorias = useCategorias();

  if (categorias.isLoading)
    return (
      <div className="flex justify-center items-center ">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-wrap justify-center gap-x-1 lg:gap-x-2">
      {categorias.data?.map((categoria) => (
        <Link
          to={`/?category=${categoria.nombre}`}
          key={categoria.id}
          className="bg-white rounded-full border-2 p-4"
        >
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src={`https://pwabrd.labsystec.net/categorias/${categoria.id}.webp`}
          />
        </Link>
      ))}
      {/* <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/candy.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/soda.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/chips.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/dish.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link>
      <Link to={`/?category=$example`}>
        <div className="bg-white rounded-full border-2 p-4">
          <img
            className="w-8 h-8 object-contain lg:w-16 lg:h-16"
            src="/more.png"
          />
        </div>
        <p className="text-center font-semibold mt-2">Dulces</p>
      </Link> */}
    </div>
  );
};

export default Categories;
